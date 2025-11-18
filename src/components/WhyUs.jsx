function WhyUs() {
  const perks = [
    { title: 'Eigen kwekerij', desc: 'Direct van het land – supervers en duurzaam geteeld.', icon: '🌲' },
    { title: 'Persoonlijk advies', desc: 'We helpen je graag de perfecte boom te kiezen.', icon: '🎁' },
    { title: 'Zakelijk & particulier', desc: 'Bezorging en plaatsing mogelijk voor bedrijven en events.', icon: '🏢' },
    { title: 'Milieubewust', desc: 'Verantwoorde teelt en recycling na de feestdagen.', icon: '♻️' },
  ]

  return (
    <section id="voordelen" className="py-16 md:py-24 bg-gradient-to-b from-emerald-950 to-black/80">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Waarom Bolhuis Kwekerij</h2>
        <p className="text-emerald-200/80 text-center mt-2">Kwaliteit, service en lokale roots</p>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {perks.map((p) => (
            <div key={p.title} className="rounded-xl border border-emerald-800/50 bg-emerald-950/60 p-6 text-center">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="text-emerald-200/80 text-sm mt-1">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
