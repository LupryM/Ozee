export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5 border-y border-accent/20">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
          Ready to Collaborate?
        </h2>
        
        <p className="text-lg text-muted-foreground">
          Whether it's a commercial shoot, personal project, or something entirely new, let's create something amazing together. Get in touch to discuss your vision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button className="px-8 py-3 bg-accent text-background font-semibold hover:bg-accent/90 transition-colors rounded-sm">
            Start a Project
          </button>
          <button className="px-8 py-3 border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors rounded-sm">
            Schedule Call
          </button>
        </div>
      </div>
    </section>
  );
}
