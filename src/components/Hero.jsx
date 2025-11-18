function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 via-emerald-950/80 to-emerald-950"></div>

      <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Echte kerstbomen van <span className="text-yellow-300">Bolhuis Kwekerij</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-emerald-100/90">
            Prachtige, verse bomen direct uit onze eigen Groningse kwekerij. Voor particulieren, bedrijven en evenementen.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#offerte" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-red-800 hover:bg-red-700 text-white font-semibold shadow-lg shadow-red-900/30">
              Vraag offerte aan
            </a>
            <a href="#bomen" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-yellow-400 hover:bg-yellow-300 text-emerald-950 font-semibold">
              Bekijk assortiment
            </a>
          </div>
          <p className="mt-4 text-sm text-emerald-200/80">Dennegroen • Donker rood • Geel • Wit • Zwart</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
