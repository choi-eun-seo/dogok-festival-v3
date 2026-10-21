import greenLeaf from "@/assets/main/maple/green-sm.svg";
import Image from "next/image";
import { market as marketData } from "@/app/app.const";
import person from "@/assets/main/person.svg";
import group3 from "@/assets/program/group3.png";
import group4 from "@/assets/program/group4.png";
import OpenBook from "@/components/OpenBook";
import load from "@/assets/program/load.svg";

export default function Market() {
  return (
    <section id="market" className="mobile-chapter section-target relative box-content min-h-[calc(1000*var(--px))] w-full bg-brand-green-300 pb-[calc(120*var(--px))]">
      {/* 모바일: 프로그램 길이 OpenBook 뒤로 이어짐 */}
      <div className="market-load-bridge pointer-events-none absolute pc:hidden" aria-hidden>
        <Image src={load} alt="" className="h-auto w-full" />
      </div>
      <div className="chapter-heading relative z-30 pt-[calc(75*var(--px))]">
        <p className="text-brand-brown-700 text-center font-suit text-[calc(18*var(--px))] font-bold max-pc:text-[calc(14*var(--mobile-px))]">
          Chapter 1
        </p>
        <p className="text-brand-brown-700 text-center font-warhaven text-[calc(40*var(--px))] font-bold">
          MARKET : 플리마켓
        </p>
        <p className="text-brand-brown-700 text-center font-suit text-[calc(14*var(--px))] pt-[calc(10*var(--px))] font-medium max-pc:text-[calc(12*var(--mobile-px))]">
          다채로운 취향과 이야기가 펼쳐지는
          <br />
          마켓의 한 페이지를 만나보세요.
        </p>
      </div>
      <div className="chapter-paper absolute top-0 z-20 left-0 w-[calc(1185*var(--px))] h-auto ml-[calc(366*var(--px))]">
        <OpenBook
          cover="#F8B23B"
          className="absolute left-0 h-auto w-[calc(1185*var(--px))] z-50"
        />
      </div>
      <div
        aria-label="플리마켓 부스 목록"
        tabIndex={0}
        className="chapter-grid absolute z-40 ml-[calc(486*var(--px))] mt-[calc(40*var(--px))] w-[calc(948*var(--px))] snap-x snap-proximity overflow-x-auto overflow-y-hidden"
      >
        <div className="chapter-grid-inner grid w-max grid-flow-col grid-rows-3 gap-[calc(12*var(--px))] pc:grid-rows-4">
          {marketData.map((item) => (
            <div
              key={item.name}
              className="snap-start bg-[#FFF3D4] rounded-[calc(10*var(--px))] py-[calc(20*var(--px))] w-[calc(180*var(--px))] max-h-[calc(97*var(--px))]"
            >
              <p className="whitespace-pre-line text-brand-brown-700 text-center font-suit text-[calc(20*var(--px))] font-bold">
                {item.name}
              </p>
              <div className="mx-auto w-fit rounded-[calc(4*var(--px))] bg-[#FFAB23] px-[calc(6*var(--px))] py-[calc(2*var(--px))] text-center font-suit text-[calc(12*var(--px))] font-medium text-white mt-[calc(6*var(--px))]">
                {item.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image src={person} alt="" className="absolute bottom-30 left-0 w-[calc(284*var(--px))] ml-[calc(268*var(--px))]  z-40 max-pc:w-[calc(142*var(--mobile-px))] max-pc:bottom-[calc(250*var(--mobile-px))] max-pc:ml-[calc(44*var(--mobile-px))]" />
      <Image src={group3} alt="" className="absolute bottom-20 right-0 w-[calc(133*var(--px))] mr-[calc(483*var(--px))]  z-30 max-pc:w-[calc(233*var(--px))] max-pc:mr-[calc(583*var(--px))] max-pc:mt-[calc(500*var(--px))]" />
      <Image src={group4} alt="" className="absolute bottom-20 right-0 w-[calc(176*var(--px))] mr-[calc(277*var(--px))]  z-30 max-pc:w-[calc(336*var(--px))] max-pc:mr-[calc(160*var(--px))] max-pc:mt-[calc(400*var(--px))]" />

      <Image
        src={greenLeaf}
        alt=""
        className="animate-maple maple-delay-1 pointer-events-none absolute left-[calc(1625*var(--px))] top-[calc(555*var(--px))] z-30 h-auto w-[calc(35*var(--px))] max-pc:left-[calc(42*var(--mobile-px))] max-pc:right-auto max-pc:top-auto max-pc:bottom-[calc(62*var(--mobile-px))] max-pc:w-[calc(28*var(--mobile-px))]"
      />
      <Image
        src={greenLeaf}
        alt=""
        className="animate-maple maple-delay-2 maple-reverse pointer-events-none absolute left-[calc(644*var(--px))] top-[calc(930*var(--px))] z-30 h-auto w-[calc(42*var(--px))] rotate-[35deg] max-pc:w-[calc(144*var(--px))] max-pc:hidden"
      />
    </section>
  );
}
