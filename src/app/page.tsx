import Header from "@/components/Header";
import Hero from "@/components/Sections/Hero";
import Intro from "@/components/Sections/Intro";
import Program from "@/components/Sections/Program";
import Market from "@/components/Sections/Market";
import Play from "@/components/Sections/Play";
import Food from "@/components/Sections/Food";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="w-full pt-[var(--header-h)]">
        <Hero />
        <Intro />
        <Program />
        <Market />
        <Play />
        <Food />
      </main>
    </div>
  );
}
