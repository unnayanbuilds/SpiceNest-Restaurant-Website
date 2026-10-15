import biryaniImage from '../assets/images/gallery-biryani-v2.jpg'
import paneerImage from '../assets/images/gallery-paneer-v2.jpg'
import dessertImage from '../assets/images/gallery-dessert-v2.jpg'
import roomImage from '../assets/images/restaurant-room-v2.jpg'
import butterChickenImage from '../assets/images/hero-food-v2.jpg'

const photos = [
  { src: biryaniImage, alt: 'Chicken biryani with basmati rice, herbs and spices', caption: 'Aromatic, made to share', shape: 'gallery-wide' },
  { src: paneerImage, alt: 'Char-grilled paneer tikka with peppers and lemon', caption: 'A little char, a lot of flavour', shape: '' },
  { src: roomImage, alt: 'Warm dining room with rust-coloured booths and pendant lights', caption: 'A cosy corner for good conversations', shape: '' },
  { src: dessertImage, alt: 'Gulab jamun served in a dark bowl with pistachio', caption: 'Something sweet to finish', shape: '' },
  { src: butterChickenImage, alt: 'Butter chicken topped with cream and fresh herbs', caption: 'Comfort in every spoonful', shape: 'gallery-tall' },
]

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery" aria-labelledby="gallery-title">
      <div className="gallery-heading">
        <p className="eyebrow"><span /> A taste of SpiceNest</p>
        <h2 id="gallery-title">Gather around.<br /><em>Take it all in.</em></h2>
        <p>Food, familiar faces, and the little details that make a meal feel like home.</p>
      </div>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <figure className={`gallery-card ${photo.shape}`} key={photo.caption}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <figcaption><span>0{index + 1}</span>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
      <p className="gallery-note">Images are generated concept photography for this portfolio project.</p>
    </section>
  )
}
