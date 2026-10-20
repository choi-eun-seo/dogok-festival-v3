import type { ReactNode } from "react";
import OpenBook from "@/components/OpenBook";

export default function BookChapter({ id, chapter, title, description, cover, children }: {
  id: string;
  chapter: number;
  title: string;
  description: ReactNode;
  cover: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section-target relative isolate min-h-[calc(1140*var(--px))] w-full bg-brand-green-300 text-brand-brown-700">
      <div className="relative ml-[calc(366*var(--px))] w-[calc(1185*var(--px))]">
        <OpenBook cover={cover} edge="#EEEAE3" star={cover} starOffset={chapter === 5 ? 110 : 0} className="pointer-events-none absolute inset-x-0 top-0 h-auto w-full" />
        <header className="relative pt-[calc(70*var(--px))] text-center">
          <p className="font-suit text-[calc(18*var(--px))] font-bold">Chapter {chapter}</p>
          <h2 className="font-warhaven text-[calc(40*var(--px))] font-bold">{title}</h2>
          <p className="pt-[calc(7*var(--px))] font-suit text-[calc(14*var(--px))] leading-relaxed">{description}</p>
        </header>
        {children}
      </div>
    </section>
  );
}
