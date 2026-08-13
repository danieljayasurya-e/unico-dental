import { useEffect } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Footer from './components/Footer'
import { business, theme } from './config/business'

export default function App() {
  // Colours set in business.js drive the CSS variables used everywhere.
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--primary', theme.primary)
    root.style.setProperty('--primary-dark', theme.primaryDark)
    root.style.setProperty('--accent', theme.accent)
    root.style.setProperty('--ink', theme.ink)
    root.style.setProperty('--bg', theme.bg)
    root.style.setProperty('--neutral', theme.neutral)
    document.title = `${business.name} - ${business.type} in ${business.city}`
  }, [])

  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
