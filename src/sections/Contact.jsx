const hours = [
  { days: 'Monday – Friday', times: '11:00 AM – 11:00 PM' },
  { days: 'Saturday – Sunday', times: '10:00 AM – 12:00 AM' },
]

export default function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-heading">
        <p className="eyebrow"><span /> We’d love to welcome you</p>
        <h2 id="contact-title">Come find <em>your table.</em></h2>
        <p>All details below are fictional placeholders for this portfolio concept.</p>
      </div>
      <div className="contact-grid">
        <article className="contact-card contact-address">
          <span className="contact-icon" aria-hidden="true">⌖</span>
          <h3>Visit us</h3>
          <address>123 Food Street<br />Connaught Place<br />New Delhi — 110001</address>
          <span className="contact-sample">Fictional demo address</span>
        </article>
        <article className="contact-card">
          <span className="contact-icon" aria-hidden="true">◷</span>
          <h3>Opening hours</h3>
          <dl className="hours-list">
            {hours.map((item) => (
              <div key={item.days}><dt>{item.days}</dt><dd>{item.times}</dd></div>
            ))}
          </dl>
          <span className="contact-sample">Sample hours</span>
        </article>
        <article className="contact-card">
          <span className="contact-icon" aria-hidden="true">✆</span>
          <h3>Get in touch</h3>
          <p className="contact-detail">+91 98765 43210</p>
          <p className="contact-detail"><a href="mailto:hello@spicenest.example">hello@spicenest.example</a></p>
          <a
            className="contact-whatsapp"
            href="https://wa.me/?text=Hello%2C%20I%27d%20like%20to%20ask%20about%20SpiceNest."
            target="_blank"
            rel="noreferrer"
          >
            Open WhatsApp <span aria-hidden="true">↗</span>
          </a>
          <span className="contact-sample">Phone and WhatsApp are placeholders</span>
        </article>
      </div>
    </section>
  )
}
