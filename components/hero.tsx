export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-accent leading-tight">
            Capturing Light, <br />
            <span className="text-foreground">Creating Moments</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button className="px-8 py-3 bg-accent text-background font-semibold hover:bg-accent/90 transition-colors rounded-sm">
              View My Work
            </button>
            <button className="px-8 py-3 border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors rounded-sm">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 rounded-lg overflow-hidden aspect-video bg-accent/5 border border-accent/20">
          <img 
            src="/professional-photography-studio-setup-dark-moody.jpg" 
            alt="Photography Studio"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
