import { useMemo, useState } from 'react'
import DishFinder from '../components/DishFinder.jsx'
import { dietaryFilters, menuCategories, menuItems } from '../data/menuItems.js'

const inr = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeDiet, setActiveDiet] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState('featured')

  const visibleItems = useMemo(() => menuItems.filter((item) => {
    const categoryMatches = activeCategory === 'All' || item.category === activeCategory
    const dietMatches = activeDiet === 'all' || item.diet === activeDiet
    const searchText = `${item.name} ${item.description} ${item.category}`.toLowerCase()
    const searchMatches = searchText.includes(searchQuery.trim().toLowerCase())
    return categoryMatches && dietMatches && searchMatches
  }).sort((first, second) => {
    if (sortOrder === 'price-low') return first.price - second.price
    if (sortOrder === 'price-high') return second.price - first.price
    return 0
  }), [activeCategory, activeDiet, searchQuery, sortOrder])

  function applyFinderPreference(preference) {
    setActiveCategory(preference.category)
    setActiveDiet(preference.diet)
    setSearchQuery('')
    setSortOrder('featured')
    document.getElementById('menu-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="menu-section" id="menu" aria-labelledby="menu-title">
      <div className="menu-heading">
        <p className="eyebrow"><span /> A menu made for sharing</p>
        <div className="menu-heading-row">
          <div>
            <h2 id="menu-title">Find your <em>favourite.</em></h2>
            <p>Comforting classics and familiar flavours for the whole table.</p>
          </div>
          <span className="menu-sample-note">Sample menu · INR</span>
        </div>
      </div>

      <DishFinder onApplyFilter={applyFinderPreference} />

      <div className="menu-controls">
        <div className="menu-search-sort">
          <label className="menu-search">
            <span className="sr-only">Search dishes</span>
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search dishes or ingredients"
            />
          </label>
          <label className="menu-sort">
            <span>Sort</span>
            <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
              <option value="featured">Featured</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
            </select>
          </label>
        </div>
        <div className="category-filters" role="group" aria-label="Filter menu by category">
          {menuCategories.map((category) => (
            <button
              className={`filter-button${activeCategory === category ? ' is-active' : ''}`}
              type="button"
              key={category}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="diet-filters" role="group" aria-label="Filter menu by dietary preference">
          <span className="diet-label">Show</span>
          {dietaryFilters.map((filter) => (
            <button
              className={`diet-button${activeDiet === filter.value ? ' is-active' : ''}`}
              type="button"
              key={filter.value}
              aria-pressed={activeDiet === filter.value}
              onClick={() => setActiveDiet(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visibleItems.length} {visibleItems.length === 1 ? 'dish' : 'dishes'}.
      </p>

      {visibleItems.length > 0 ? (
        <div className="menu-grid" id="menu-list">
          {visibleItems.map((item) => (
            <article className="menu-card" key={item.id}>
              <div className="menu-card-topline">
                <span className="diet-chip">
                  <span className={`diet-marker ${item.diet}`} aria-hidden="true">
                  <span aria-hidden="true" />
                  </span>
                  {item.diet === 'vegetarian' ? 'Veg' : 'Non-veg'}
                </span>
                <span className="menu-card-category">{item.category}</span>
                <span className="menu-card-price">{inr.format(item.price)}</span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      ) : (
        <div className="menu-empty">
          <p>No dishes match this search and filter combination.</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('')
              setActiveCategory('All')
              setActiveDiet('all')
              setSortOrder('featured')
            }}
          >
            Reset menu
          </button>
        </div>
      )}

      <p className="menu-disclaimer">All dishes and prices are fictional examples for this portfolio project.</p>
    </section>
  )
}
