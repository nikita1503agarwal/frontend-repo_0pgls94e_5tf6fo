function Footer() {
  return (
    <footer id="contact" className="bg-black text-emerald-100/80 border-t border-emerald-800/40">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-semibold">Bolhuis Kwekerij</h4>
          <p className="text-sm mt-2">Verse kerstbomen uit eigen kwekerij in Groningen.</p>
          <p className="text-sm mt-2">KVK 12345678</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Contact</h4>
          <p className="text-sm mt-2">E: info@bolhuiskwekerij.nl</p>
          <p className="text-sm">T: 050 - 123 45 67</p>
          <p className="text-sm mt-2">Ma - Za: 09:00 - 18:00</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Adres</h4>
          <p className="text-sm mt-2">Kwekerijlaan 12</p>
          <p className="text-sm">9723 AB Groningen</p>
        </div>
      </div>
      <div className="border-t border-emerald-800/40 py-4 text-center text-xs text-emerald-100/60">
        © {new Date().getFullYear()} Bolhuis Kwekerij. Alle rechten voorbehouden.
      </div>
    </footer>
  )
}

export default Footer
