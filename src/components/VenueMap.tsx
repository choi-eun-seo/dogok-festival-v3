"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { NAVER_MAP_CLIENT_ID, VENUE_MAP, VENUE_MAP_LINK } from "@/config/venue-map";

type Coordinate = { lat: number; lng: number };
type MapInstance = {
  autoResize(): void;
  fitBounds(points: Coordinate[], options: Record<string, number>): void;
  destroy(): void;
};
type Overlay = { setMap(map: MapInstance | null): void };
type MapsAPI = {
  Map: new (element: HTMLElement, options: Record<string, unknown>) => MapInstance;
  Marker: new (options: Record<string, unknown>) => Overlay;
  Polyline: new (options: Record<string, unknown>) => Overlay;
};

declare global {
  interface Window {
    naver?: { maps: MapsAPI };
    navermap_authFailure?: () => void;
  }
}

export default function VenueMap() {
  const container = useRef<HTMLDivElement>(null);
  const [sdkReady, setSdkReady] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const clientId = NAVER_MAP_CLIENT_ID.trim();

  useEffect(() => {
    if (!clientId) return;
    const previous = window.navermap_authFailure;
    const onAuthFailure = () => {
      console.error("[VenueMap] Naver Maps authentication failed. Check client ID and allowed web service URLs.");
      setError(true);
    };
    window.navermap_authFailure = onAuthFailure;
    const timeout = window.setTimeout(() => {
      if (!window.naver?.maps) {
        console.error("[VenueMap] Map SDK load timed out.");
        setError(true);
      }
    }, 20000);
    return () => {
      window.clearTimeout(timeout);
      if (window.navermap_authFailure === onAuthFailure) {
        window.navermap_authFailure = previous;
      }
    };
  }, [clientId]);

  useEffect(() => {
    if (!sdkReady || !container.current) return;
    const api = window.naver?.maps;
    if (!api) return;
    let map: MapInstance | undefined;
    let marker: Overlay | undefined;
    let route: Overlay | undefined;
    let observer: ResizeObserver | undefined;
    let frame = 0;
    let statusFrame = 0;
    try {
      const points = [VENUE_MAP.marker, ...VENUE_MAP.route];
      if (points.some(({ lat, lng }) => !Number.isFinite(lat) || !Number.isFinite(lng) || Math.abs(lat) > 90 || Math.abs(lng) > 180)) {
        throw new Error("Invalid venue map coordinates");
      }
      map = new api.Map(container.current, {
        center: VENUE_MAP.marker,
        zoom: 17,
        scrollWheel: true,
        pinchZoom: true,
        zoomControl: false,
      });
      marker = new api.Marker({
        map,
        position: VENUE_MAP.marker,
        title: "강남수도사업소 삼거리",
        icon: {
          content: `<div style="position:relative;width:0;height:0;">
            <div style="position:absolute;left:0;bottom:0;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:4px;pointer-events:none;">
              <div style="white-space:nowrap;padding:6px 12px;border-radius:999px;background:#754223;color:#fff;font-family:inherit;font-size:13px;font-weight:700;box-shadow:0 2px 6px rgba(0,0,0,.2);">강남수도사업소 삼거리</div>
              <svg width="26" height="36" viewBox="0 0 26 36" aria-hidden="true"><path d="M13 0C5.8 0 0 5.8 0 13c0 9.4 13 23 13 23s13-13.6 13-23C26 5.8 20.2 0 13 0z" fill="#385CFF"/><circle cx="13" cy="13" r="5" fill="#fff"/></svg>
            </div>
          </div>`,
        },
      });
      route = new api.Polyline({
        map,
        path: [...VENUE_MAP.route],
        strokeColor: "#385CFF",
        strokeWeight: 3,
        strokeOpacity: 1,
        clickable: false,
      });
      const fit = () => {
        map?.autoResize();
        map?.fitBounds(points, { top: 100, right: 45, bottom: 45, left: 45, maxZoom: 18 });
      };
      fit();
      observer = new ResizeObserver(() => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(fit);
      });
      observer.observe(container.current);
      // 지도 생성 완료 알림을 별도 프레임에서 반영합니다.
      statusFrame = requestAnimationFrame(() => setLoaded(true));
    } catch (cause) {
      console.error("[VenueMap] Map initialization failed.", cause);
      statusFrame = requestAnimationFrame(() => setError(true));
    }
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(statusFrame);
      observer?.disconnect();
      marker?.setMap(null);
      route?.setMap(null);
      map?.destroy();
    };
  }, [sdkReady]);

  return (
    <div className="relative h-[calc(470*var(--px))] w-full min-w-0 overflow-hidden rounded-[calc(24*var(--px))] bg-[#EDF0E5]">
      <div ref={container} aria-label="강남수도사업소삼거리와 행사 구간 지도" className="h-full w-full" />
      {(!clientId || error || !loaded) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#EDF0E5] px-4 text-center font-suit text-brand-brown-700">
          <p role="status" className="text-[calc(18*var(--px))]">{!clientId || error ? "지도를 불러올 수 없습니다." : "지도를 불러오는 중입니다."}</p>
          <a href={VENUE_MAP_LINK} target="_blank" rel="noopener noreferrer" className="text-[calc(16*var(--px))] underline underline-offset-4">네이버 지도에서 위치 보기</a>
        </div>
      )}
      {clientId && (
        <Script
          id="naver-maps-sdk"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${encodeURIComponent(clientId)}`}
          strategy="afterInteractive"
          onReady={() => setSdkReady(true)}
          onError={() => {
            console.error("[VenueMap] Unable to load Naver Maps SDK.");
            setError(true);
          }}
        />
      )}
    </div>
  );
}
