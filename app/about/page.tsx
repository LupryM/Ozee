import Navbar from "@/components/navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#110C0A" }}>
      <Navbar />

      <div className="pt-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-0">
            {/* Image */}
            <div className="lg:w-3/5 lg:pr-12">
              <img
                src="/main.webp"
                alt="About Me - Desert Road"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text Box */}
            <div className="lg:w-2/5 lg:-ml-12 lg:mt-12">
              <div
                className="p-8 lg:p-10"
                style={{ backgroundColor: "#1A1612" }}
              >
                <h2
                  className="text-2xl lg:text-3xl font-light mb-6 tracking-wide"
                  style={{ color: "#8A7F66" }}
                >
                  ABOUT ME
                </h2>

                <p
                  className="text-sm lg:text-base leading-relaxed space-y-4"
                  style={{ color: "#E8E6E1" }}
                >
                  <span className="block">
                    I’m Omhle Zuma, in certain circles, Ozee. A photographer and
                    visionary creative currently studying Chemical Engineering.
                    My world sits at the intersection of art and precision which
                    is the technical discipline from engineering that sharpens
                    my problem- solving and structure, while photography fuels
                    my curiosity storytelling through a lens.
                  </span>
                  <span className="block">
                    Photography started as a way to pass time outside of my
                    academics but it has grown into a craft rooted in
                    collaboration, intention, and brand identity. I specialize
                    in working with fashion labels, lifestyle and institutional
                    brands and personal clients who value originality and visual
                    impact. My goal is to create imagery that not only looks
                    good, but feels authentic and aligns perfectly with a story
                    I want to tell.
                  </span>
                  <span className="block">
                    I believe in building real connections with the people I
                    work with understanding their vision, personality, and
                    purpose. Whether it’s creative concepts, portraits, or
                    professional events, every project is approached with care,
                    honesty, and a commitment to excellence.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
