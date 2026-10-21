"use client";

import star from "@/assets/main/star.svg";
import type { CSSProperties } from "react";
import Image from "next/image";
import sun from "@/assets/program/sun.svg";
import cloud from "@/assets/main/cloud.svg";
import cloudBlue from "@/assets/program/cloud-blue-line.svg";
import bird from "@/assets/main/bird.svg";
import map from "@/assets/main/map2.png";
import bg from "@/assets/program/program_bg.png";
import tree1 from "@/assets/main/tree/tree1.svg";
import tree2 from "@/assets/main/tree/tree2.svg";
import treeGreen from "@/assets/main/tree/tree-g2.svg";
import treeYellow from "@/assets/main/tree/tree4.svg";
import bookshelf from "@/assets/program/bookshelf.png";
import BookButton from "@/components/BookButton";
import load from "@/assets/program/load.svg";
import maple from "@/assets/main/maple/maple_1.svg";
import loadScenery from "@/assets/program/load-scenery.svg";
import { useRef, useEffect } from "react";
import moBookShelf from "@/assets/mo_bookshelf.svg";
import marketBook from "@/assets/book/market.svg";
import playBook from "@/assets/book/play.svg";
import foodBook from "@/assets/book/food.svg";
import musicBook from "@/assets/book/music.svg";
import healingBook from "@/assets/book/healing.svg";
import bigStar from "@/assets/main/big-star.png";

const hillTrees = [
  { src: tree1, width: 173, offset: 0 },
  { src: tree2, width: 161, offset: 95 },
  { src: treeGreen, width: 147, offset: 180 },
  { src: treeYellow, width: 131, offset: 255 },
  { src: treeGreen, width: 115, offset: 330 },
];

const pillarHeight = 148;
const pillarOverlap = 66;

const bookCovers = [
  { name: "MARKET", color: "#F8B23B", href: "#market", mobileSrc: marketBook },
  { name: "PLAY", color: "#ECB3CC", href: "#play", mobileSrc: playBook },
  { name: "FOOD", color: "#C2E0F4", href: "#food", mobileSrc: foodBook },
  { name: "MUSIC", color: "#C6BBE4", href: "#music", mobileSrc: musicBook },
  { name: "HEALING", color: "#FBE8B9", href: "#healing", mobileSrc: healingBook },
];

const treeInitialStyle = {
  opacity: 0,
  transform: "scaleY(0.04) scaleX(0.88)",
  transformOrigin: "bottom center",
} satisfies CSSProperties;

function HillTrees() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const revealScene = () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      section.querySelectorAll<HTMLElement>("[data-tree]").forEach((tree) => {
        if (reduceMotion) {
          tree.style.opacity = "1";
          tree.style.transform = "none";
          return;
        }

        tree.animate(
          [
            { opacity: 0, transform: "scaleY(0.04) scaleX(0.88)" },
            {
              opacity: 1,
              transform: "scaleY(1.08) scaleX(0.97)",
              offset: 0.64,
            },
            { transform: "scaleY(0.96) scaleX(1.02)", offset: 0.82 },
            { opacity: 1, transform: "scaleY(1) scaleX(1)" },
          ],
          {
            duration: 850,
            delay: Number(tree.dataset.treeDelay ?? 0),
            easing: "cubic-bezier(0.22, 0.8, 0.32, 1.18)",
            fill: "forwards",
          },
        );
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        revealScene();
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      aria-hidden="true"
      className="program-hills pointer-events-none absolute inset-x-0 top-[calc(1360*var(--px))] h-[calc(620*var(--px))] overflow-hidden"
    >
      {(["left", "right"] as const).map((side) => (
        <div
          key={side}
          className="program-hill-side absolute bottom-0 h-full w-[calc(470*var(--px))]"
          style={{ [side]: "var(--hill-side-inset)" }}
        >
          {hillTrees.map((tree, index) => {
            const pillarWidth = Math.round(tree.width * 0.42);
            const inset = (tree.width - pillarWidth) / 2;

            return (
              <div
                key={index}
                className="absolute bottom-0 box-border border-[#754223] bg-[#A86B45]"
                style={{
                  width: `calc(${pillarWidth} * var(--px))`,
                  height: `calc(${pillarHeight} * var(--px))`,
                  borderWidth: `calc(3 * var(--px))`,
                  [side]: `calc(${tree.offset + inset} * var(--px))`,
                }}
              />
            );
          })}
          {hillTrees.map((tree, index) => (
            <Image
              key={index}
              src={tree.src}
              alt=""
              className="tree-rise absolute z-10 h-auto"
              style={{
                ...treeInitialStyle,
                width: `calc(${tree.width} * var(--px))`,
                bottom: `calc(${pillarHeight - pillarOverlap} * var(--px))`,
                [side]: `calc(${tree.offset} * var(--px))`,
              }}
              data-tree
              data-tree-delay={(hillTrees.length - 1 - index) * 100}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

const titleStarStyle = {
  aspectRatio: `${star.width} / ${star.height}`,
  WebkitMaskImage: `url(${star.src})`,
  maskImage: `url(${star.src})`,
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
  WebkitMaskSize: "contain",
  maskSize: "contain",
  maskMode: "alpha",
} satisfies CSSProperties;

function TitleStar() {
  return (
    <span
      aria-hidden
      className="h-auto w-[calc(22.8*var(--px))] shrink-0 bg-brand-blue-500"
      style={titleStarStyle}
    />
  );
}

export default function Program() {
  return (
    <div className="program-viewport">
    <section id="map" className="section-target relative w-full">
      <div
        className="min-h-[calc(2792*var(--px))] w-full"
        style={{
          background: "linear-gradient(180deg, #E6F5FC 0%, #67B9E7 100%)",
        }}
      >
        <p className="flex items-center justify-center gap-[calc(16*var(--px))] pt-[calc(284*var(--px))] text-center font-warhaven text-[calc(50*var(--px))] font-bold text-brand-blue-500">
          <TitleStar />
          행사장 지도
          <TitleStar />
        </p>
      </div>
      <Image
        src={sun}
        alt=""
        priority
        className="absolute top-[calc(225*var(--px))] left-0 w-[calc(300*var(--px))] h-auto object-cover ml-[calc(255*var(--px))]"
      />
      <Image
        src={cloud}
        alt=""
        priority
        className="animate-cloud absolute top-[calc(215*var(--px))] left-0 ml-[calc(1454*var(--px))] h-auto w-[calc(186*var(--px))] object-cover"
      />
      <Image
        src={cloudBlue}
        alt=""
        priority
        className="animate-cloud cloud-slow cloud-delay absolute top-[calc(301*var(--px))] left-0 z-10 ml-[calc(1610*var(--px))] h-auto w-[calc(152*var(--px))] object-cover"
      />
      <Image
        src={bird}
        alt=""
        priority
        className="animate-bird-float block absolute top-[calc(540*var(--px))] left-0 w-[calc(172*var(--px))] h-auto object-cover ml-[calc(174*var(--px))] max-pc:top-[calc(1700*var(--px))] max-pc:ml-[calc(480*var(--px))]"
      />
      <Image
        src={star}
        alt=""
        priority
        className="animate-star-small block absolute right-0 h-auto object-cover max-pc:top-[calc(1700*var(--px))] max-pc:mr-[calc(680*var(--px))] pc:hidden max-pc:w-[calc(48*var(--px))]"
      />
      <Image
        src={star}
        alt=""
        priority
        className="animate-star-small block absolute left-0 h-auto object-cover max-pc:top-[calc(1880*var(--px))] max-pc:ml-[calc(460*var(--px))] pc:hidden max-pc:w-[calc(48*var(--px))]"
      />
      <Image
        src={bigStar}
        alt=""
        priority
        className="animate-star-big block absolute  right-0 h-auto object-cover max-pc:top-[calc(1800*var(--px))] max-pc:mr-[calc(480*var(--px))] pc:hidden max-pc:w-[calc(80*var(--px))]"
      />
      <Image
        src={map}
        alt=""
        priority
        className="absolute top-[calc(367*var(--px))] z-10 left-0 w-[calc(1162*var(--px))] h-auto object-cover ml-[calc(379*var(--px))] max-pc:top-[calc(400*var(--px))]"
      />
      <HillTrees />
      <div className="program-bg pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src={bg}
          alt=""
          priority
          className="program-bg-image absolute top-[calc(1936*var(--px))] left-0 h-auto w-full"
        />
      </div>
      <a
        href={map.src}
        download="도곡-메타세쿼이아-로드-페스타-행사장-지도.png"
        className="absolute z-20 ml-[calc(712*var(--px))] top-[calc(1208*var(--px))] left-0 object-cover rounded-[calc(99*var(--px))] bg-brand-blue-500 text-white text-center font-suit text-[calc(30*var(--px))] font-bold py-[calc(22*var(--px))] px-[calc(140*var(--px))] max-pc:top-[calc(1250*var(--px))] max-pc:ml-[calc(650*var(--px))]"
      >
        이미지로 저장하기
      </a>
      {/* 스크롤 앵커는 하나만 — 모바일/PC 이미지 위치가 같아도 id 중복 방지 */}
      <span
        id="program"
        aria-hidden
        className="section-target absolute top-[calc(1500*var(--px))] left-0 max-pc:top-[calc(880*var(--px))]"
      />
      {/* 모바일: 책장 + 가로형 프로그램 버튼 */}
      <div className="program-mobile-shelf absolute z-20 pc:hidden">
        <Image
          src={moBookShelf}
          alt="프로그램 소개"
          priority
          className="h-auto w-full"
        />
        <nav
          aria-label="프로그램 소개"
          className="program-mobile-links absolute inset-x-0 flex flex-col"
        >
          {bookCovers.map((book) => (
            <a
              key={book.name}
              href={book.href}
              className="program-mobile-link"
              aria-label={book.name}
            >
              <Image
                src={book.mobileSrc}
                alt={book.name}
                className="h-auto w-full"
              />
            </a>
          ))}
        </nav>
      </div>
      {/* PC: 책장 + 책 버튼 묶음 */}
      <div className="hidden pc:contents">
        <Image
          src={bookshelf}
          alt=""
          priority
          className="absolute top-[calc(1500*var(--px))] left-0 z-20 w-[calc(1030*var(--px))] h-auto object-cover ml-[calc(445*var(--px))]"
        />
        <div className="absolute top-[calc(1710*var(--px))] left-0 z-20 ml-[calc(591*var(--px))] flex flex-row gap-[calc(22*var(--px))]">
          {bookCovers.map((book) => (
            <BookButton
              key={book.name}
              color={book.color}
              name={book.name}
              href={book.href}
            />
          ))}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="program-load-wrap pointer-events-none absolute top-[calc(2142*var(--px))] left-0 z-10 ml-[calc(446*var(--px))] h-[calc(1053.6*var(--px))] w-[calc(1027*var(--px))]"
      >
        <Image src={load} alt="" className="program-load absolute inset-0 h-auto w-full" />
        <Image
          src={maple}
          alt=""
          className="program-load-maple animate-maple absolute top-[calc(135*var(--px))] left-[calc(198*var(--px))] h-auto w-[calc(80*var(--px))]"
        />
        <svg
          viewBox="0 0 35 35"
          fill="none"
          className="program-load-leaf animate-maple absolute top-[calc(235*var(--px))] left-[calc(752*var(--px))] w-[calc(35*var(--px))] h-auto"
        >
          <path
            d="M6 29C5 14 13 5 29 5C29 20 20 28 6 29Z"
            fill="#358045"
            stroke="#754223"
            strokeWidth="2.5"
          />
          <path d="M6 29L26 8" stroke="#754223" strokeWidth="2" />
        </svg>
        <Image
          src={loadScenery}
          alt=""
          className="absolute top-0 left-0 h-auto w-full"
        />
      </div>
    </section>
    </div>
  );
}
