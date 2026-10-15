import { useState } from 'react'
import { menuItems } from '../data/menuItems.js'

const preferences = [
  {
    id: 'vegetarian',
    label: 'Vegetarian favourites',
    description: 'A few meat-free favourites from the menu.',
    matches: (item) => item.diet === 'vegetarian',
    category: 'All',
    diet: 'vegetarian',
  },
  {
    id: 'main-course',
    label: 'A satisfying main',
    description: 'Comforting dishes for the centre of the table.',
    matches: (item) => item.category === 'Main Course',
    category: 'Main Course',
    diet: 'all',
  },
  {
    id: 'dessert',
    label: 'Something sweet',
    description: 'A sweet finish from the sample menu.',
    matches: (item) => item.category === 'Desserts',
    category: 'Desserts',
    diet: 'all',
  },
]

const inr = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

export default function DishFinder({ onApplyFilter }) {
  const [selectedPreference, setSelectedPreference] = useState(null)
  const selectedOption = preferences.find((preference) => preference.id === selectedPreference)
  const suggestions = selectedOption
    ? menuItems.filter(selectedOption.matches).slice(0, 3)
    : []

  return (
    <div className="dish-finder">
      <div className="dish-finder-intro">
        <p className="eyebrow"><span /> A little help choosing</p>
        <h3>What sounds good?</h3>
        <p>Pick a mood and we’ll find a few ideas from the sample menu.</p>
      </div>
      <div className="dish-finder-options" role="group" aria-label="Choose a menu preference">
        {preferences.map((preference) => (
          <button
            className={`dish-choice${selectedPreference === preference.id ? ' is-selected' : ''}`}
            type="button"
            key={preference.id}
            aria-pressed={selectedPreference === preference.id}
            onClick={() => setSelectedPreference(preference.id)}
          >
            {preference.label}<span aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      {selectedOption && (
        <div className="dish-finder-results" aria-live="polite">
          <div className="dish-finder-result-heading">
            <p>{selectedOption.description}</p>
            <button type="button" className="dish-finder-browse" onClick={() => onApplyFilter(selectedOption)}>
              Browse these dishes <span aria-hidden="true">↓</span>
            </button>
          </div>
          <div className="dish-suggestion-grid">
            {suggestions.map((item) => (
              <article className="dish-suggestion" key={item.id}>
                <div><span>{item.category}</span><strong>{inr.format(item.price)}</strong></div>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
