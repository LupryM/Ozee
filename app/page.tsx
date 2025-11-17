import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#1a1410" }}>
      <Navbar />

      {/* Full-screen Hero with Background Image */}
      <div
        className="relative min-h-screen flex items-center justify-start px-8 md:px-16 bg-cover bg-center"
        style={{
          backgroundImage: "url('/fm.webp')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-light tracking-widest leading-tight mb-8 text-white">
            WELCOME TO
            <br />
            SHOTSBYOZEE
            <br />
        
          </h1>

          <Link href="/photography">
            <button className="px-8 py-3 border border-white text-white text-xs font-semibold tracking-widest hover:bg-white hover:text-black transition-all duration-300">
              EXPLORE MY WORK
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
