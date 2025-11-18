import { useState } from 'react'

function CTAForm() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    tree_type: 'Nordmann',
    size: '150-175 cm',
    quantity: 1,
    message: '',
    newsletter_opt_in: false,
  })

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Er ging iets mis')
      setStatus({ type: 'success', message: 'Bedankt! We nemen snel contact op.' })
      setForm({ name: '', email: '', phone: '', tree_type: 'Nordmann', size: '150-175 cm', quantity: 1, message: '', newsletter_opt_in: false })
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="offerte" className="py-16 md:py-24 bg-gradient-to-b from-black/80 to-emerald-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Offerte aanvragen</h2>
            <p className="text-emerald-200/80 mt-2">Vul je gegevens in en ontvang snel een scherpe prijs.</p>
            <ul className="mt-6 space-y-2 text-emerald-100/90 text-sm list-disc list-inside">
              <li>Levering en plaatsing mogelijk</li>
              <li>Grotere aantallen voor bedrijven op aanvraag</li>
              <li>Accessoires zoals standaarden en verlichting beschikbaar</li>
            </ul>
          </div>
          <form onSubmit={submit} className="bg-emerald-950/70 border border-emerald-800/50 rounded-xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-emerald-200/80 mb-1">Naam</label>
                <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full bg-black/40 border border-emerald-800/60 rounded-md px-3 py-2 text-white" />
              </div>
              <div>
                <label className="block text-sm text-emerald-200/80 mb-1">E-mail</label>
                <input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full bg-black/40 border border-emerald-800/60 rounded-md px-3 py-2 text-white" />
              </div>
              <div>
                <label className="block text-sm text-emerald-200/80 mb-1">Telefoon</label>
                <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="w-full bg-black/40 border border-emerald-800/60 rounded-md px-3 py-2 text-white" />
              </div>
              <div>
                <label className="block text-sm text-emerald-200/80 mb-1">Type boom</label>
                <select value={form.tree_type} onChange={e=>setForm({...form,tree_type:e.target.value})} className="w-full bg-black/40 border border-emerald-800/60 rounded-md px-3 py-2 text-white">
                  <option>Nordmann</option>
                  <option>Fijnspar</option>
                  <option>Blauwspar</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-emerald-200/80 mb-1">Maat</label>
                <select value={form.size} onChange={e=>setForm({...form,size:e.target.value})} className="w-full bg-black/40 border border-emerald-800/60 rounded-md px-3 py-2 text-white">
                  <option>100-125 cm</option>
                  <option>125-150 cm</option>
                  <option>150-175 cm</option>
                  <option>175-200 cm</option>
                  <option>200-250 cm</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-emerald-200/80 mb-1">Aantal</label>
                <input type="number" min={1} value={form.quantity} onChange={e=>setForm({...form,quantity:Number(e.target.value)})} className="w-full bg-black/40 border border-emerald-800/60 rounded-md px-3 py-2 text-white" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-emerald-200/80 mb-1">Bericht</label>
                <textarea rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="w-full bg-black/40 border border-emerald-800/60 rounded-md px-3 py-2 text-white" />
              </div>
              <label className="flex items-center gap-2 text-emerald-200/80 text-sm sm:col-span-2">
                <input type="checkbox" checked={form.newsletter_opt_in} onChange={e=>setForm({...form,newsletter_opt_in:e.target.checked})} />
                Ja, stuur mij af en toe nieuws en aanbiedingen
              </label>
            </div>
            {status && (
              <p className={`mt-4 text-sm ${status.type==='success' ? 'text-green-300' : 'text-red-300'}`}>{status.message}</p>
            )}
            <button disabled={loading} className="mt-6 w-full bg-red-800 hover:bg-red-700 disabled:opacity-60 text-white font-semibold py-3 rounded-md">
              {loading ? 'Verzenden...' : 'Versturen'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CTAForm
