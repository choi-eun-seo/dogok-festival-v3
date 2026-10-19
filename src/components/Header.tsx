import Image from "next/image";
import logo from "@/assets/meta_header.svg";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-brown-500">
      <div className="container mx-auto flex flex-row items-center pt-[calc(26*var(--px))] pb-[calc(23*var(--px))]">
        <Image
          src={logo}
          alt="logo"
          width={440}
          height={41}
          style={{ width: "calc(440 * var(--px))", height: "auto" }}
        />
        <div className="ml-auto flex flex-row items-center font-suit text-white text-[length:calc(20*var(--px))] gap-[calc(30*var(--px))]">
          <p className="text-base font-bold">행사 소개</p>
          <p className="text-base font-bold">행사장 지도</p>
          <p className="text-base font-bold">프로그램 소개</p>
          <p className="text-base font-bold">오시는 길</p>
        </div>
      </div>
    </header>
  );
}
