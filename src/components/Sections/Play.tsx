"use client";

import redLeaf from "@/assets/main/maple/sm.svg";
import yellowLeaf from "@/assets/main/maple/yellow_two.svg";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { play as playData } from "@/app/app.const";
import market from "@/assets/program/market.png";
import draw from "@/assets/program/draw.svg";
import OpenBook from "@/components/OpenBook";

function PlayCard({ name, tag }: { name: string; tag?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;
    const nameEl = nameRef.current;
    if (!card || !content || !nameEl) return;

    const fit = () => {
      nameEl.style.fontSize = "";
      if (tagRef.current) tagRef.current.style.fontSize = "";

      const nameMax = parseFloat(getComputedStyle(nameEl).fontSize);
      const tagMax = tagRef.current
        ? parseFloat(getComputedStyle(tagRef.current).fontSize)
        : 0;
      const cardStyle = getComputedStyle(card);
      const heightLimit =
        card.clientHeight -
        parseFloat(cardStyle.paddingTop) -
        parseFloat(cardStyle.paddingBottom);
      const widthLimit = card.clientWidth;

      let nameSize = nameMax;
      let tagSize = tagMax;
      nameEl.style.fontSize = `${nameSize}px`;

      const nameTooWide = () =>
        [...nameEl.children].some(
          (line) => (line as HTMLElement).scrollWidth > widthLimit + 1,
        );
      const tagTooWide = () =>
        tagRef.current ? tagRef.current.scrollWidth > widthLimit + 1 : false;
      const tooTall = () => content.offsetHeight > heightLimit + 1;

      while ((nameTooWide() || tooTall()) && nameSize > nameMax * 0.55) {
        nameSize -= 0.5;
        nameEl.style.fontSize = `${nameSize}px`;
      }

      if (tagRef.current) {
        while ((tagTooWide() || tooTall()) && tagSize > tagMax * 0.6) {
          tagSize -= 0.5;
          tagRef.current.style.fontSize = `${tagSize}px`;
        }
      }
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(card);
    return () => observer.disconnect();
  }, [name, tag]);

  return (
    <div
      ref={cardRef}
      className="flex h-[calc(111*var(--px))] w-[calc(180*var(--px))] flex-col justify-center overflow-hidden rounded-[calc(10*var(--px))] bg-[#FFF2F8] py-[calc(20*var(--px))]"
    >
      <div ref={contentRef} className="shrink-0">
        <p
          ref={nameRef}
          className="text-center font-suit text-[calc(20*var(--px))] font-bold text-brand-brown-700"
        >
          {name.split("\n").map((line, index) => (
            <span key={`${line}-${index}`} className="mx-auto block w-fit whitespace-nowrap">
              {line}
            </span>
          ))}
        </p>
        {tag && (
          <div
            ref={tagRef}
            className="mx-auto mt-[calc(6*var(--px))] w-fit rounded-[calc(4*var(--px))] bg-[#FF72A1] px-[calc(6*var(--px))] py-[calc(2*var(--px))] text-center font-suit text-[calc(12*var(--px))] font-medium text-white"
          >
            {tag}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Play() {
  return (
    <section id="play" className="mobile-chapter section-target relative min-h-[calc(1330*var(--px))] w-full bg-brand-green-300">
      <div className="chapter-heading relative z-30 pt-[calc(65*var(--px))]">
        <p className="text-brand-brown-700 text-center font-suit text-[calc(18*var(--px))] font-bold">
          Chapter 2
        </p>
        <p className="text-brand-brown-700 text-center font-warhaven text-[calc(40*var(--px))] font-bold">
          PLAY : 체험
        </p>
        <p className="text-brand-brown-700 text-center font-suit text-[calc(14*var(--px))] pt-[calc(10*var(--px))] font-medium">
          직접 만들고 경험하며 새로운 즐거움을 발견하는
          <br />
          체험의 한 페이지를 채워보세요.
        </p>
      </div>
      <div className="chapter-paper absolute top-[calc(0*var(--px))] z-20 left-0 w-[calc(1185*var(--px))] h-auto ml-[calc(366*var(--px))]">
        <OpenBook
          cover="#F4B1D0"
          edge="#FDE8F0"
          star="#F8C6DC"
          className="absolute left-0 h-auto w-[calc(1185*var(--px))]"
          />
      </div>
      <div className="chapter-grid absolute z-40 ml-[calc(486*var(--px))] mt-[calc(40*var(--px))] w-[calc(948*var(--px))] snap-x snap-proximity overflow-x-auto overflow-y-hidden pc:overflow-visible">
        <div className="chapter-grid-inner grid w-max grid-flow-col grid-rows-3 gap-[calc(12*var(--px))] pc:grid-flow-row pc:grid-cols-5 pc:grid-rows-none">
          {playData.map((item) => (
            <PlayCard key={item.name} name={item.name} tag={item.tag} />
          ))}
        </div>
      </div>
      <Image
        src={market}
        alt=""
        className="absolute bottom-80 left-0 z-50 w-[calc(331*var(--px))] ml-[calc(254*var(--px))] max-pc:w-[calc(167*var(--mobile-px))] max-pc:bottom-[calc(240*var(--mobile-px))] max-pc:ml-[calc(22*var(--mobile-px))]"
      />
      <Image
        src={draw}
        alt=""
        className="absolute bottom-65 right-0 w-[calc(428*var(--px))] mr-[calc(438*var(--px))]  z-50 max-pc:w-[calc(143*var(--mobile-px))] max-pc:bottom-[calc(80*var(--mobile-px))] max-pc:mr-[calc(10*var(--mobile-px))]"
      />

      <Image
        src={redLeaf}
        alt=""
        className="animate-maple maple-delay-1 pointer-events-none absolute left-[calc(245*var(--px))] top-[calc(535*var(--px))] z-30 h-auto w-[calc(35*var(--px))] "
      />
      <Image
        src={yellowLeaf}
        alt=""
        className="animate-maple maple-delay-2 maple-reverse pointer-events-none absolute left-[calc(1605*var(--px))] top-[calc(555*var(--px))] z-30 h-auto w-[calc(70*var(--px))] rotate-[15deg] max-pc:left-[calc(12*var(--mobile-px))] max-pc:right-auto max-pc:top-auto max-pc:bottom-[calc(42*var(--mobile-px))] max-pc:w-[calc(38*var(--mobile-px))]"
      />
    </section>
  );
}
