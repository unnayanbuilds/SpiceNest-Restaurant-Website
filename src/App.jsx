import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import MobileReserveBar from './components/MobileReserveBar.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Gallery from './sections/Gallery.jsx'
import Home from './sections/Home.jsx'
import Menu from './sections/Menu.jsx'
import Reservations from './sections/Reservations.jsx'
import './App.css'

function App() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const sections = document.querySelectorAll('main section')
    sections.forEach((section) => section.classList.add('reveal-on-scroll'))

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12 })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <div className="concept-banner">
        Portfolio concept <span aria-hidden="true">·</span> Sample restaurant details
      </div>
      <a className="skip-link" href="#home">Skip to content</a>
      <Navbar />
      <main>
        <Home />
        <About />
        <Menu />
        <Gallery />
        <Reservations />
        <Contact />
      </main>
      <Footer />
      <MobileReserveBar />
    </div>
  )
}

export default App
