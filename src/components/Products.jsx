function Products() {
  const products = [
    {
      name: 'Nordmann Premium',
      desc: 'Naaldvast, volle boom met zachte naalden – ideaal voor binnen.',
      sizes: ['125-150 cm', '150-175 cm', '175-200 cm', '200-250 cm'],
      price: 'vanaf €29,95',
      color: 'from-emerald-700 to-emerald-900'
    },
    {
      name: 'Fijnspar Klassiek',
      desc: 'De traditionele kerstgeur en uitstraling – prachtige kegelvorm.',
      sizes: ['100-125 cm', '125-150 cm', '150-175 cm'],
      price: 'vanaf €19,95',
      color: 'from-green-700 to-green-900'
    },
    {
      name: 'Blauwspar',
      desc: 'Stoere blauwgroene tint met stevige takken – perfect voor buiten.',
      sizes: ['125-150 cm', '150-200 cm'],
      price: 'vanaf €34,95',
      color: 'from-sky-700 to-sky-900'
    }
  ]

  return (
    <section id="bomen" className="relative py-16 md:py-24 bg-emerald-975">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(255,255,255,0.05),transparent_40%)]"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ons assortiment</h2>
            <p className="text-emerald-200/80 mt-2">Altijd vers gesneden, duurzaam geteeld</p>
          </div>
          <a href="#offerte" className="hidden md:inline-flex px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-emerald-950 font-semibold rounded-md">Offerte aanvragen</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="group rounded-xl overflow-hidden border border-emerald-800/50 bg-gradient-to-br from-emerald-950 to-emerald-900">
              <div className={`h-2 bg-gradient-to-r ${p.color}`}></div>
              <div className="p-6">
                <h3 className="text-white text-xl font-semibold">{p.name}</h3>
                <p className="text-emerald-200/85 mt-2 min-h-[56px]">{p.desc}</p>
                <div className="mt-4">
                  <p className="text-emerald-100/90 text-sm">Maten:</p>
                  <p className="text-emerald-50 text-sm">{p.sizes.join(' • ')}</p>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-yellow-300 font-bold">{p.price}</span>
                  <button className="px-3 py-1.5 rounded-md bg-red-800 hover:bg-red-700 text-white text-sm font-semibold">Interesse</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
