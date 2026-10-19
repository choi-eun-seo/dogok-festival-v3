import star from "@/assets/main/star.svg";
import type { CSSProperties } from "react";
import Image from "next/image";
import sun from "@/assets/program/sun.svg";
import cloud from "@/assets/main/cloud.svg";
import cloudBlue from "@/assets/program/cloud-blue-line.svg";
import bird from "@/assets/main/bird.svg";
import map from "@/assets/program/map.png";
import bg from "@/assets/program/program_bg.png";
import tree1 from "@/assets/main/tree/tree1.svg";
import tree2 from "@/assets/main/tree/tree2.svg";
import treeGreen from "@/assets/main/tree/tree-g2.svg";
import treeYellow from "@/assets/main/tree/tree4.svg";
import bookshell from "@/assets/program/bookshell.png";
import BookButton from "@/components/Sections/BookButton";
import load from "@/assets/program/load.svg";
import maple from "@/assets/main/maple/maple_1.svg";
import loadScenery from "@/assets/program/load-scenery.svg";

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
  { name: "MARKET", color: "#F8B23B" },
  { name: "PLAY", color: "#ECB3CC" },
  { name: "FOOD", color: "#C2E0F4" },
  { name: "MUSIC", color: "#C6BBE4" },
  { name: "HEALING", color: "#FBE8B9" },
];

function HillTrees() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-[calc(1360*var(--px))] h-[calc(620*var(--px))] overflow-hidden"
    >
      {(["left", "right"] as const).map((side) => (
        <div
          key={side}
          className="absolute bottom-0 h-full w-[calc(470*var(--px))]"
          style={{ [side]: "calc(-78 * var(--px))" }}
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
              className="absolute z-10 h-auto"
              style={{
                width: `calc(${tree.width} * var(--px))`,
                bottom: `calc(${pillarHeight - pillarOverlap} * var(--px))`,
                [side]: `calc(${tree.offset} * var(--px))`,
              }}
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
    <section className="relative w-full">
      <div
        className="h-[calc(2792*var(--px))] w-full"
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
        className="animate-bird-float block absolute top-[calc(540*var(--px))] left-0 w-[calc(172*var(--px))] h-auto object-cover ml-[calc(174*var(--px))]"
      />
      <Image
        src={map}
        alt=""
        priority
        className="absolute top-[calc(367*var(--px))] z-10 left-0 w-[calc(1162*var(--px))] h-auto object-cover ml-[calc(379*var(--px))]"
      />
      <HillTrees />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src={bg}
          alt=""
          priority
          className="absolute top-[calc(1936*var(--px))] left-0 h-auto w-full"
        />
      </div>
      <div className="absolute ml-[calc(712*var(--px))] top-[calc(1208*var(--px))] left-0 object-cover rounded-[calc(99*var(--px))] bg-brand-blue-500 text-white text-center font-suit text-[calc(30*var(--px))] font-bold py-[calc(22*var(--px))] px-[calc(140*var(--px))]">
        이미지로 저장하기
      </div>
      <Image
        src={bookshell}
        alt=""
        priority
        className="absolute top-[calc(1500*var(--px))] left-0 z-20 w-[calc(1030*var(--px))] h-auto object-cover ml-[calc(445*var(--px))]"
      />
      <div className="absolute top-[calc(1710*var(--px))] left-0 z-20 ml-[calc(591*var(--px))] flex flex-row gap-[calc(22*var(--px))]">
        {bookCovers.map((book) => (
          <BookButton key={book.name} color={book.color} name={book.name} />
        ))}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[calc(2142*var(--px))] left-0 z-10 ml-[calc(446*var(--px))] h-[calc(1053.6*var(--px))] w-[calc(1027*var(--px))]"
      >
        <Image src={load} alt="" className="absolute inset-0 h-auto w-full" />
        <Image
          src={maple}
          alt=""
          className="absolute top-[calc(135*var(--px))] left-[calc(198*var(--px))] h-auto w-[calc(80*var(--px))]"
        />
        <svg
          viewBox="0 0 35 35"
          fill="none"
          className="absolute top-[calc(235*var(--px))] left-[calc(752*var(--px))] w-[calc(35*var(--px))] h-auto"
        >
          <path d="M6 29C5 14 13 5 29 5C29 20 20 28 6 29Z" fill="#358045" stroke="#754223" strokeWidth="2.5" />
          <path d="M6 29L26 8" stroke="#754223" strokeWidth="2" />
        </svg>
        <Image
          src={loadScenery}
          alt=""
          className="absolute top-0 left-0 h-auto w-full"
        />
      </div>

    </section>
  );
}
