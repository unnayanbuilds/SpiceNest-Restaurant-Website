import { useEffect, useRef, useState } from 'react'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our story', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const toggleRef = useRef(null)

  useEffect(() => {
    const sections = [...navigation.map((item) => item.href), '#reservations']
      .map((selector) => document.querySelector(selector))
      .filter(Boolean)

    const observer = new IntersectionObserver((entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting)
      if (!visibleEntries.length) return

      const viewportMiddle = window.innerHeight / 2
      const currentSection = visibleEntries.reduce((closest, entry) => {
        const distance = Math.abs(entry.boundingClientRect.top + entry.boundingClientRect.height / 2 - viewportMiddle)
        return distance < closest.distance ? { id: entry.target.id, distance } : closest
      }, { id: visibleEntries[0].target.id, distance: Number.POSITIVE_INFINITY })

      setActiveSection(currentSection.id)
    }, { rootMargin: '-35% 0px -50% 0px', threshold: 0 })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  function closeMenu() {
    setIsOpen(false)
  }

  function handleNavigationKeyDown(event) {
    if (event.key === 'Escape' && isOpen) {
      closeMenu()
      toggleRef.current?.focus()
    }
  }

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="SpiceNest home">
        <span className="brand-mark" aria-hidden="true">✳</span>
        <span className="brand-copy">
          <span className="brand-name">SpiceNest</span>
          <span className="brand-tagline">Flavours find a home</span>
        </span>
      </a>
      <button
        ref={toggleRef}
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span aria-hidden="true" /><span aria-hidden="true" />
      </button>
      <nav
        className={`primary-navigation${isOpen ? ' is-open' : ''}`}
        id="primary-navigation"
        aria-label="Main navigation"
        onKeyDown={handleNavigationKeyDown}
      >
        {navigation.map((item) => (
          <a
            className={activeSection === item.href.slice(1) ? 'is-current' : undefined}
            key={item.href}
            href={item.href}
            aria-current={activeSection === item.href.slice(1) ? 'location' : undefined}
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
        <a
          className={`nav-cta${activeSection === 'reservations' ? ' is-current' : ''}`}
          href="#reservations"
          aria-current={activeSection === 'reservations' ? 'location' : undefined}
          onClick={closeMenu}
        >
          Reserve a table <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  )
}
