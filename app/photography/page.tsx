import Navbar from "@/components/navbar";
import Gallery from "@/components/gallery";

export default function PhotographyPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#110C0A" }}>
      <Navbar />

      {/* Photography Heading */}
      <div className="py-16 text-center" style={{ backgroundColor: "#110C0A" }}>
        <h1
          className="text-6xl font-light tracking-widest"
          style={{ color: "#8A7F66" }}
        >
          PHOTOGRAPHY
        </h1>
      </div>

      {/* Gallery - now with full brown background */}
      <div style={{ backgroundColor: "#110C0A" }} className="py-16">
        <Gallery />
      </div>
    </main>
  );
}
