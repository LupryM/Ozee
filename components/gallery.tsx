"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  const galleryItems = [
    { id: 1, image: "/k.webp" },
    { id: 2, image: "/o.webp" },
    { id: 3, image: "/p.webp" },
    { id: 4, image: "/j.webp" },
    { id: 5, image: "/i.webp" },
    { id: 6, image: "/f.webp" },
    { id: 7, image: "/d.webp" },
    { id: 8, image: "/c.webp" },
    { id: 9, image: "/g.webp" },
    { id: 10, image: "/z.jpg" },
    { id: 11, image: "/r.webp" },
    { id: 12, image: "/l.webp" },
    { id: 13, image: "/q.webp" },
    { id: 14, image: "/b.webp" },
    { id: 15, image: "/m.webp" },
    { id: 16, image: "/y.webp" },
    { id: 17, image: "/a.webp" },
    { id: 18, image: "/e.webp" },
     { id: 19, image: "/aa.webp" }, 
     { id: 20, image: "/w.webp" }, 
     { id: 21, image: "/x.webp" }, 
     { id: 22, image: "/h.webp" }, 
     { id: 23, image: "/n.webp" },
   
  ];

  const slides = galleryItems.map((item) => ({ src: item.image }));

  return (
    <>
      <section
        className="px-2 sm:px-4 md:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-24"
        style={{ backgroundColor: "#110C0A" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {galleryItems.map((item, i) => (
              <div
                key={item.id}
                onClick={() => setIndex(i)}
                className="aspect-square overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`Gallery item ${item.id}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Zoom]}
        animation={{ zoom: 500 }}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
      />
    </>
  );
}