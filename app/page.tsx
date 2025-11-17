import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#1a1410" }}>
      <Navbar />

      {/* Mobile Hero - Cropped Image */}
      <div
        className="sm:hidden relative min-h-screen flex items-center justify-start px-4"
        style={{
          backgroundImage: "url(/fmm.jpg)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl w-full">
          <h1 className="text-4xl font-light tracking-widest leading-tight mb-6 text-white">
            WELCOME TO
            <br />
            SHOTSBYOZEE
          </h1>

          <Link href="/photography">
            <button className="px-5 py-2.5 border border-white text-white text-xs font-semibold tracking-widest hover:bg-white hover:text-black transition-all duration-300">
              EXPLORE MY WORK
            </button>
          </Link>
        </div>
      </div>

      {/* Desktop Hero - Original Image */}
      <div
        className="hidden sm:flex relative min-h-screen items-center justify-start px-6 md:px-8 lg:px-16"
        style={{
          backgroundImage: "url(/fm.webp)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl w-full">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-widest leading-tight mb-8 text-white">
            WELCOME TO
            <br />
            SHOTSBYOZEE
          </h1>

          <Link href="/photography">
            <button className="px-8 py-3 border border-white text-white text-sm font-semibold tracking-widest hover:bg-white hover:text-black transition-all duration-300">
              EXPLORE MY WORK
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
