import { useRef, useState } from 'react'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our story', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef(null)

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
          <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
        ))}
        <a className="nav-cta" href="#reservations" onClick={closeMenu}>
          Reserve a table <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  )
}
