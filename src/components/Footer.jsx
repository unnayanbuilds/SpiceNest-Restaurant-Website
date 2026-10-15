const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our story', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reservations', href: '#reservations' },
  { label: 'Contact', href: '#contact' },
]

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <a className="footer-brand" href="#home">SpiceNest<span>✳</span></a>
          <p>Flavours find a home.<br />Good food, warm company, moments worth sharing.</p>
        </div>
        <nav className="footer-navigation" aria-label="Footer navigation">
          {footerLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="footer-social">
          <span>Follow along <small>Demo destinations</small></span>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook ↗</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {currentYear} SpiceNest · Fictional portfolio concept</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}
