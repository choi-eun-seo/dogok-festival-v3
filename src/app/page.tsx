import Header from "@/components/Header";
import Hero from "@/components/Sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="w-full pt-[var(--header-h)]">
        <Hero />
      </main>
    </div>
  );
}
