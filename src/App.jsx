import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import WhyUs from './components/WhyUs'
import CTAForm from './components/CTAForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-emerald-950 text-white" id="top">
      <Navbar />
      <Hero />
      <Products />
      <WhyUs />
      <CTAForm />
      <Footer />
    </div>
  )
}

export default App
