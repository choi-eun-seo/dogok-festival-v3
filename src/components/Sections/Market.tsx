import Image from "next/image";
import { market as marketData } from "@/app/app.const";
import person from "@/assets/main/person.svg";
import group3 from "@/assets/program/group3.png";
import group4 from "@/assets/program/group4.png";
import OpenBook from "@/components/OpenBook";

export default function Market() {
  return (
    <section id="market" className="section-target relative box-content min-h-[calc(1000*var(--px))] w-full bg-brand-green-300 pb-[calc(120*var(--px))]">
      <div className="relative z-30 pt-[calc(75*var(--px))]">
        <p className="text-brand-brown-700 text-center font-suit text-[calc(18*var(--px))] font-bold">
          Chapter 1
        </p>
        <p className="text-brand-brown-700 text-center font-warhaven text-[calc(40*var(--px))] font-bold">
          MARKET : 플리마켓
        </p>
        <p className="text-brand-brown-700 text-center font-suit text-[calc(14*var(--px))] pt-[calc(10*var(--px))] font-medium">
          다채로운 취향과 이야기가 펼쳐지는
          <br />
          마켓의 한 페이지를 만나보세요.
        </p>
      </div>
      <div className="absolute top-0 z-20 left-0 w-[calc(1185*var(--px))] h-auto ml-[calc(366*var(--px))]">
        <OpenBook
          cover="#F8B23B"
          className="absolute left-0 h-auto w-[calc(1185*var(--px))]"
        />
      </div>
      <div className="absolute scroll-snap-y-mandatory z-40 grid grid-cols-5 gap-[calc(12*var(--px))] ml-[calc(486*var(--px))] mt-[calc(40*var(--px))]">
        {marketData.map((item) => (
          <div
            key={item.name}
            className="bg-[#FFF3D4] rounded-[calc(10*var(--px))] py-[calc(20*var(--px))] w-[calc(180*var(--px))]"
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
      <Image src={person} alt="" className="absolute bottom-30 left-0 w-[calc(284*var(--px))] ml-[calc(268*var(--px))]  z-40" />
      <Image src={group3} alt="" className="absolute bottom-20 right-0 w-[calc(133*var(--px))] mr-[calc(483*var(--px))]  z-30" />
      <Image src={group4} alt="" className="absolute bottom-20 right-0 w-[calc(176*var(--px))] mr-[calc(277*var(--px))]  z-30" />

    </section>
  );
}
