import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Gallery from './sections/Gallery.jsx'
import Home from './sections/Home.jsx'
import Menu from './sections/Menu.jsx'
import Reservations from './sections/Reservations.jsx'
import './App.css'

function App() {
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
    </div>
  )
}

export default App
