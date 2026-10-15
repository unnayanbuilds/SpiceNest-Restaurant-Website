import heroFoodImage from '../assets/images/hero-food-v2.jpg'

export default function Home() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span /> A fictional restaurant concept</p>
        <h1 id="hero-title">Authentic flavours,<br /><em>memorable moments.</em></h1>
        <p className="hero-description">
          Discover comforting Indian favourites, prepared with aromatic spices
          and served with the feeling of being right at home.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#menu">
            Explore the menu <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-quiet" href="#reservations">Plan your visit</a>
        </div>
        <div className="hero-note">
          <span className="hero-note-line" aria-hidden="true" />
          <span>Flavours find a home</span>
        </div>
      </div>
      <div className="hero-visual">
        <img
          className="hero-food"
          src={heroFoodImage}
          alt="Butter chicken in a dark serving bowl with naan and fresh herbs"
          fetchPriority="high"
        />
        <div className="hero-image-shade" />
        <div className="hero-image-caption">
          <span className="caption-kicker">From our imagined kitchen</span>
          <span className="caption-title">Made to bring<br />everyone closer.</span>
        </div>
        <div className="hero-stamp" aria-hidden="true">
          <span>SPICE</span><span>·</span><span>SHARE</span><span>·</span><span>STAY</span>
        </div>
      </div>
      <a className="scroll-cue" href="#about">
        <span className="scroll-cue-line" aria-hidden="true" /> Scroll to discover
      </a>
    </section>
  )
}
