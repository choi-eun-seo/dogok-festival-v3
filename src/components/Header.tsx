import Image from "next/image";
import logo from "@/assets/meta_header.svg";

const menus = [
  { href: "#", label: "행사 소개" },
  { href: "#map", label: "행사장 지도" },
  { href: "#program", label: "프로그램 소개" },
  { href: "#outro", label: "오시는 길" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-100 bg-brand-brown-500">
      <div className="container mx-auto flex flex-row items-center pt-[calc(26*var(--px))] pb-[calc(23*var(--px))]">
        <a href="#hero">
          <Image
            src={logo}
            alt="logo"
            width={440}
            height={41}
            style={{ width: "calc(440 * var(--px))", height: "auto" }}
          />
        </a>
        <nav className="ml-auto flex flex-row items-center font-suit text-white text-[length:calc(20*var(--px))] gap-[calc(30*var(--px))]">
          {menus.map((menu) => (
            <a key={menu.href} href={menu.href} className="text-base font-bold">
              {menu.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
