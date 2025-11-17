export default function Gallery() {
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
    { id: 10, image: "/q.webp" },
    { id: 11, image: "/r.webp" },
    { id: 12, image: "/l.webp" },
    { id: 13, image: "/n.webp" },
    { id: 14, image: "/b.webp" },
    { id: 15, image: "/m.webp" },
    { id: 16, image: "/h.webp" },
    { id: 17, image: "/a.webp" },
    { id: 18, image: "/e.webp" },
  ];

  return (
    <section
      className="px-2 sm:px-4 md:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-24"
      style={{ backgroundColor: "#110C0A" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
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
  );
}
