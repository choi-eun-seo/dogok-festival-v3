import book from "@/assets/main/book.svg";
import Image from "next/image";
import maple from "@/assets/main/maple/maple_1.svg";
import yellowTwo from "@/assets/main/maple/yellow_two.svg";

export default function Intro() {
  return (
    <section id="intro" className="section-target w-full">
      <div className="relative w-full h-[calc(687*var(--px))] bg-brand-yellow-300">
        <Image
          src={book}
          alt=""
          priority
          className="mx-auto block w-[calc(97*var(--px))] h-auto object-cover pt-[calc(130*var(--px))]"
        />
        <p className="text-center text-brand-brown-500 font-warhaven text-[calc(28*var(--px))] font-regular mt-[calc(60*var(--px))]">
          메타세쿼이아 길을 따라 펼쳐지는
          <br />한 권의 가을 이야기
        </p>
        <p className="text-center text-brand-brown-500 font-suit text-[calc(16*var(--px))] font-bold mt-[calc(44*var(--px))]">
          올해로 세 번째를 맞이하는 도곡 메타세쿼이아 로드 페스타는
          <br />
          도곡2동의 메타세쿼이아 길을 천천히 거닐며 즐기는 가을 축제입니다.
          <br />
          <br />
          축제의 장면 하나하나가 책 속의 한 페이지가 되는 하루.
          <br />
          오늘의 산책을 한 권의 특별한 이야기로 완성해보세요.
        </p>
        <Image
          src={maple}
          alt=""
          priority
          className="animate-maple maple-slow maple-delay-1 absolute top-[calc(225*var(--px))] left-0 z-25 ml-[calc(604*var(--px))] h-auto w-[calc(62*var(--px))]"
        />
        <Image
          src={yellowTwo}
          alt=""
          priority
          className="animate-maple-fast maple-reverse maple-delay-4 absolute top-[calc(375*var(--px))] left-0 z-25 ml-[calc(1292*var(--px))] h-auto w-[calc(32*var(--px))]"
        />
      </div>
    </section>
  );
}
