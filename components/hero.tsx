export function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8">
            A Luxury Experience
          </p>

          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] mb-12 rounded-sm overflow-hidden">
            <img
              src="/Index+Image2.jpg"
              alt="Maison de Joëlle luxury jewelry store"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
