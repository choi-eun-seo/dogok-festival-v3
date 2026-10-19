"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import hero from "@/assets/main/new_main.svg";
import bird from "@/assets/main/bird.svg";
import bigStar from "@/assets/main/big-star.png";
import smStar from "@/assets/main/star.svg";
import tree1 from "@/assets/main/tree/tree1.svg";
import tree2 from "@/assets/main/tree/tree2.svg";
import treeGreen2 from "@/assets/main/tree/tree-g2.svg";
import tree4 from "@/assets/main/tree/tree4.svg";
import music from "@/assets/main/music.svg";
import smMusic from "@/assets/main/music-sm.svg";
import smMusic2 from "@/assets/main/music-sm2.svg";
import guitar from "@/assets/main/guitar.svg";
import car from "@/assets/main/car.svg";
import person from "@/assets/main/person.svg";
import group from "@/assets/main/Group1.svg";
import yellowBig from "@/assets/main/maple/yellow-big.svg";
import greenL from "@/assets/main/green-l.svg";
import greenR from "@/assets/main/green-r.svg";
import sm from "@/assets/main/maple/sm.svg";
import big from "@/assets/main/maple/big.svg";
import maple1 from "@/assets/main/maple/maple_1.svg";
import yellowSm from "@/assets/main/maple/yellow-sm.svg";

const treeInitialStyle = {
  opacity: 0,
  transform: "scaleY(0.04) scaleX(0.88)",
  transformOrigin: "bottom center",
} satisfies CSSProperties;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const treeTriggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = treeTriggerRef.current;

    if (!section || !trigger) return;

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

      section.querySelectorAll<HTMLElement>("[data-green]").forEach((green) => {
        const fromCenter =
          green.dataset.green === "left"
            ? "translateX(-100%)"
            : "translateX(100%)";

        if (reduceMotion) {
          green.style.opacity = "1";
          green.style.transform = "none";
          return;
        }

        green.animate(
          [
            { opacity: 0, transform: fromCenter },
            { opacity: 1, transform: "translateX(0)" },
          ],
          {
            duration: 1050,
            delay: 680,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
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

    observer.observe(trigger);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative w-full">
        <Image
          src={hero}
          alt="도곡 메타세쿼이아 로드 페스타 메인 비주얼"
          priority
          className="block h-auto w-full pointer-events-none"
        />
        <div className="animate-bird-in absolute top-[calc(80*var(--px))] left-0 z-10 ml-[calc(228*var(--px))] w-[calc(128.5*var(--px))]">
          <Image
            src={bird}
            alt="새"
            priority
            className="animate-bird-float block h-auto w-full"
          />
        </div>
        <Image
          src={bigStar}
          alt=""
          priority
          className="animate-star-big absolute top-[calc(106*var(--px))] left-0 z-10 h-auto w-[calc(73*var(--px))] ml-[calc(503*var(--px))]"
        />
        <Image
          src={smStar}
          alt=""
          priority
          className="animate-star-small absolute top-[calc(72*var(--px))] left-0 z-10 h-auto w-[calc(45*var(--px))] ml-[calc(409*var(--px))]"
        />
        <Image
          src={smStar}
          alt=""
          priority
          className="animate-star-small star-delay-one absolute top-[calc(353*var(--px))] right-0 z-10 mr-[calc(265*var(--px))] h-auto w-[calc(45*var(--px))]"
        />
        <Image
          src={smStar}
          alt=""
          priority
          className="animate-star-small star-delay-two absolute top-[calc(741*var(--px))] right-0 z-10 mr-[calc(223*var(--px))] h-auto w-[calc(45*var(--px))]"
        />
        <Image
          src={tree1}
          alt=""
          priority
          data-tree
          data-tree-delay="80"
          style={treeInitialStyle}
          className="tree-rise tree-delay-1 absolute bottom-[calc(392*var(--px))] left-0 z-18 h-auto w-[calc(252.5*var(--px))] ml-[calc(147*var(--px))]"
        />
        <Image
          src={tree2}
          alt=""
          priority
          data-tree
          data-tree-delay="180"
          style={treeInitialStyle}
          className="tree-rise tree-delay-2 absolute bottom-[calc(537*var(--px))] left-0 z-15 h-auto w-[calc(216*var(--px))] ml-[calc(250*var(--px))]"
        />
        <Image
          src={treeGreen2}
          alt=""
          priority
          data-tree
          data-tree-delay="280"
          style={treeInitialStyle}
          className="tree-rise tree-delay-3 absolute bottom-[calc(710*var(--px))] left-0 z-11 h-auto w-[calc(168*var(--px))] ml-[calc(347*var(--px))]"
        />
        <Image
          src={tree4}
          alt=""
          priority
          data-tree
          data-tree-delay="380"
          style={treeInitialStyle}
          className="tree-rise tree-delay-4 absolute bottom-[calc(876*var(--px))] left-0 z-10 h-auto w-[calc(124*var(--px))] ml-[calc(431*var(--px))]"
        />
        <Image
          src={treeGreen2}
          alt=""
          priority
          data-tree
          data-tree-delay="480"
          style={treeInitialStyle}
          className="tree-rise tree-delay-5 absolute bottom-[calc(955*var(--px))] left-0 z-9 h-auto w-[calc(103*var(--px))] ml-[calc(489*var(--px))]"
        />
        <Image
          src={tree1}
          alt=""
          priority
          data-tree
          data-tree-delay="80"
          style={treeInitialStyle}
          className="tree-rise tree-delay-1 absolute bottom-[calc(392*var(--px))] right-0 z-18 h-auto w-[calc(252.5*var(--px))] mr-[calc(147*var(--px))]"
        />
        <Image
          src={tree2}
          alt=""
          priority
          data-tree
          data-tree-delay="180"
          style={treeInitialStyle}
          className="tree-rise tree-delay-2 absolute bottom-[calc(537*var(--px))] right-0 z-15 h-auto w-[calc(216*var(--px))] mr-[calc(250*var(--px))]"
        />
        <Image
          src={treeGreen2}
          alt=""
          priority
          data-tree
          data-tree-delay="280"
          style={treeInitialStyle}
          className="tree-rise tree-delay-3 absolute bottom-[calc(710*var(--px))] right-0 z-11 h-auto w-[calc(168*var(--px))] mr-[calc(347*var(--px))]"
        />
        <Image
          src={tree4}
          alt=""
          priority
          data-tree
          data-tree-delay="380"
          style={treeInitialStyle}
          className="tree-rise tree-delay-4 absolute bottom-[calc(876*var(--px))] right-0 z-10 h-auto w-[calc(124*var(--px))] mr-[calc(431*var(--px))]"
        />
        <Image
          src={treeGreen2}
          alt=""
          priority
          data-tree
          data-tree-delay="480"
          style={treeInitialStyle}
          className="tree-rise tree-delay-5 absolute bottom-[calc(955*var(--px))] right-0 z-9 h-auto w-[calc(103*var(--px))] mr-[calc(489*var(--px))]"
        />
        <div
          ref={treeTriggerRef}
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[calc(1050*var(--px))] left-1/2 h-px w-px"
        />
        <Image
          src={greenL}
          alt=""
          priority
          data-green="left"
          style={{ opacity: 0, transform: "translateX(-100%)" }}
          className="absolute top-[calc(1800*var(--px))] left-0 z-20 h-auto w-[calc(545*var(--px))]"
        />
        <Image
          src={greenR}
          alt=""
          priority
          data-green="right"
          style={{ opacity: 0, transform: "translateX(100%)" }}
          className="absolute top-[calc(1800*var(--px))] right-0 z-20 h-auto w-[calc(545*var(--px))]"
        />
        <Image
          src={group}
          alt=""
          priority
          className="absolute bottom-[calc(900*var(--px))] left-0 z-10 h-auto w-[calc(86*var(--px))] ml-[calc(1245*var(--px))]"
        />

        <Image
          src={music}
          alt=""
          priority
          className="absolute bottom-[calc(1187*var(--px))] left-0 z-10 h-auto w-[calc(33*var(--px))] ml-[calc(639*var(--px))]"
        />
        <Image
          src={smMusic}
          alt=""
          priority
          className="absolute bottom-[calc(1140*var(--px))] left-0 z-10 h-auto w-[calc(25*var(--px))] ml-[calc(1258*var(--px))]"
        />
        <Image
          src={smMusic2}
          alt=""
          priority
          className="absolute bottom-[calc(1181*var(--px))] left-0 z-10 h-auto w-[calc(21*var(--px))] ml-[calc(1195*var(--px))]"
        />
        <Image
          src={guitar}
          alt=""
          priority
          className="absolute bottom-[calc(900*var(--px))] left-0 z-10 h-auto w-[calc(86*var(--px))] ml-[calc(1245*var(--px))]"
        />
        <Image
          src={car}
          alt=""
          priority
          className="absolute bottom-[calc(853*var(--px))] left-0 z-10 h-auto w-[calc(181*var(--px))] ml-[calc(522*var(--px))]"
        />
        <Image
          src={person}
          alt=""
          priority
          className="absolute bottom-[calc(371*var(--px))] left-0 z-25 h-auto w-[calc(242*var(--px))] ml-[calc(376*var(--px))]"
        />
        <Image
          src={group}
          alt=""
          priority
          className="absolute bottom-[calc(698*var(--px))] left-0 z-25 h-auto w-[calc(125*var(--px))] ml-[calc(493*var(--px))]"
        />
        <Image
          src={yellowBig}
          alt=""
          priority
          className="animate-maple maple-slow maple-delay-1 absolute bottom-[calc(179*var(--px))] left-0 z-25 h-auto w-[calc(90*var(--px))] ml-[calc(578*var(--px))]"
        />
        <Image
          src={sm}
          alt=""
          priority
          className="animate-maple-fast maple-delay-2 absolute bottom-[calc(419*var(--px))] left-0 z-25 h-auto w-[calc(32*var(--px))] ml-[calc(676*var(--px))]"
        />
        <Image
          src={big}
          alt=""
          priority
          className="animate-maple maple-reverse maple-delay-3 absolute bottom-[calc(490*var(--px))] left-0 z-25 h-auto w-[calc(60*var(--px))] ml-[calc(803*var(--px))]"
        />
        <Image
          src={maple1}
          alt=""
          priority
          className="animate-maple maple-slow maple-reverse maple-delay-4 absolute bottom-[calc(282*var(--px))] left-0 z-25 h-auto w-[calc(94*var(--px))] ml-[calc(1132*var(--px))]"
        />
        <Image
          src={yellowSm}
          alt=""
          priority
          className="animate-maple-fast maple-delay-5 absolute bottom-[calc(285*var(--px))] left-0 z-25 h-auto w-[calc(33*var(--px))] ml-[calc(1485*var(--px))]"
        />
      </section>
    </>
  );
}
