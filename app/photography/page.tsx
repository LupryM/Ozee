import Navbar from "@/components/navbar";
import Gallery from "@/components/gallery";

export default function PhotographyPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#110C0A" }}>
      <Navbar />

      {/* Photography Heading */}
      <div
        className="py-8 sm:py-12 md:py-16 text-center"
        style={{ backgroundColor: "#110C0A" }}
      >
        <h1
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-widest px-6 sm:px-4"
          style={{ color: "#8A7F66" }}
        >
          PHOTOGRAPHY
        </h1>
      </div>

      {/* Gallery - now with full brown background */}
      <div
        style={{ backgroundColor: "#110C0A" }}
        className="py-8 sm:py-12 md:py-16"
      >
        <Gallery />
      </div>
    </main>
  );
}
