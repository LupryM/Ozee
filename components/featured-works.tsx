export default function FeaturedWorks() {
  const works = [
    {
      title: 'Urban Geometry',
      category: 'Architecture',
      image: '/modern-architecture-building-photography.jpg'
    },
    {
      title: 'Portrait Series',
      category: 'Portrait',
      image: '/studio-portrait-lighting.png'
    },
    {
      title: 'Landscape Dreams',
      category: 'Landscape',
      image: '/beautiful-landscape-nature-mountains-sunset.jpg'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-accent mb-4">
            Featured Works
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of my most recent and impactful projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {works.map((work, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
                <img 
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-accent text-lg font-semibold">View Project</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {work.title}
              </h3>
              <p className="text-accent text-sm">
                {work.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
