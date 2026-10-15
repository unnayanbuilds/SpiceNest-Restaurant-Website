import { useEffect, useState } from 'react'

export default function MobileReserveBar() {
  const [reservationVisible, setReservationVisible] = useState(false)

  useEffect(() => {
    const reservationSection = document.querySelector('#reservations')
    if (!reservationSection) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      setReservationVisible(entry.isIntersecting)
    }, { threshold: 0.15 })

    observer.observe(reservationSection)
    return () => observer.disconnect()
  }, [])

  return (
    <aside className={`mobile-reserve-bar${reservationVisible ? ' is-hidden' : ''}`} aria-label="Reservation shortcut">
      <span>Planning a visit? <small>Demo enquiry</small></span>
      <a href="#reservations">Reserve a table <span aria-hidden="true">↗</span></a>
    </aside>
  )
}
