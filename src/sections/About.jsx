import restaurantRoomImage from '../assets/images/restaurant-room-v2.jpg'

const values = [
  { number: '01', title: 'Freshness', text: 'A thoughtful start to every plate.' },
  { number: '02', title: 'Hospitality', text: 'A warm welcome for every guest.' },
  { number: '03', title: 'Togetherness', text: 'Good food, best shared around a table.' },
]

export default function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-photo-wrap">
        <img
          className="about-photo"
          src={restaurantRoomImage}
          alt="Warmly lit dining room with rust-coloured seating and dark wood tables"
          loading="lazy"
        />
        <span className="photo-caption">A place for the moments between meals</span>
      </div>
      <div className="about-copy">
        <p className="eyebrow eyebrow-light"><span /> The SpiceNest feeling</p>
        <h2 id="about-title">A table that feels<br /><em>a little like home.</em></h2>
        <p>
          At SpiceNest, food is more than a meal — it is a feeling of home. We bring
          together comforting Indian flavours and a welcoming atmosphere for
          families, friends and food lovers. From familiar classics to dishes with
          a little extra spice, every plate is imagined to make time around the
          table special.
        </p>
        <a className="text-link" href="#menu">Find your favourite <span aria-hidden="true">→</span></a>
      </div>

      <div className="about-values">
        <div className="about-values-heading">
          <p className="eyebrow"><span /> Around our table</p>
          <h3>Good food.<br /><em>Closer company.</em></h3>
        </div>
        <div className="about-values-list">
          {values.map((value) => (
            <article className="value-item" key={value.number}>
              <span className="value-number">{value.number}</span>
              <div><h4>{value.title}</h4><p>{value.text}</p></div>
              <span className="value-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
