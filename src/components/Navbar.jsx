import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-emerald-950/80 border-b border-emerald-800/40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center ring-2 ring-emerald-400/30 shadow-lg shadow-emerald-900/30">
            <span className="text-yellow-400 text-xl">★</span>
          </div>
          <div>
            <p className="text-white font-semibold leading-tight tracking-wide">Bolhuis Kwekerij</p>
            <p className="text-emerald-200/70 text-xs -mt-1">Kerstbomen uit eigen kwekerij</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#bomen" className="text-emerald-100/90 hover:text-yellow-300 transition-colors">Bomen</a>
          <a href="#voordelen" className="text-emerald-100/90 hover:text-yellow-300 transition-colors">Waarom wij</a>
          <a href="#offerte" className="text-emerald-100/90 hover:text-yellow-300 transition-colors">Offerte</a>
          <a href="#contact" className="text-emerald-100/90 hover:text-yellow-300 transition-colors">Contact</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-emerald-800/40 bg-emerald-950/95">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            <a onClick={() => setOpen(false)} href="#bomen" className="text-emerald-100/90 hover:text-yellow-300">Bomen</a>
            <a onClick={() => setOpen(false)} href="#voordelen" className="text-emerald-100/90 hover:text-yellow-300">Waarom wij</a>
            <a onClick={() => setOpen(false)} href="#offerte" className="text-emerald-100/90 hover:text-yellow-300">Offerte</a>
            <a onClick={() => setOpen(false)} href="#contact" className="text-emerald-100/90 hover:text-yellow-300">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
