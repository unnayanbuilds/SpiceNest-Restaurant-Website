import { useState } from 'react'

function getLocalDateValue(date = new Date()) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const timeOptions = [
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '1:00 PM', '1:30 PM', '6:00 PM', '6:30 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
]

export default function Reservations() {
  const [feedback, setFeedback] = useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    setFeedback({
      type: 'success',
      message: 'Thanks for your request! This is a demo form, so no reservation has been made.',
    })
    event.currentTarget.reset()
  }

  function handleInvalid() {
    setFeedback({
      type: 'error',
      message: 'Please check the required fields and enter a valid phone number.',
    })
  }

  return (
    <section className="reservations-section" id="reservations" aria-labelledby="reservations-title">
      <div className="reservation-intro">
        <p className="eyebrow eyebrow-light"><span /> Save a place at the table</p>
        <h2 id="reservations-title">Let’s make<br /><em>time to gather.</em></h2>
        <p>
          Share your preferred date and time. In a real restaurant site, this form
          would connect to a booking service; this portfolio demo does not send or
          store your request.
        </p>
        <div className="reservation-aside">
          <span className="reservation-aside-mark" aria-hidden="true">✳</span>
          <span>Good food is better<br />when shared.</span>
        </div>
      </div>

      <form className="reservation-form" onSubmit={handleSubmit} onInvalidCapture={handleInvalid} onChange={() => setFeedback(null)}>
        <p className="form-intro">Table enquiry <span>All fields marked * are required</span></p>
        <div className="form-grid">
          <div className="form-field form-field-full">
            <label htmlFor="reservation-name">Full name <span aria-hidden="true">*</span></label>
            <input id="reservation-name" name="name" type="text" autoComplete="name" minLength="2" required />
          </div>
          <div className="form-field form-field-full">
            <label htmlFor="reservation-phone">Phone number <span aria-hidden="true">*</span></label>
            <input
              id="reservation-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              pattern="[0-9+() -]{10,18}"
              title="Enter 10–18 digits, spaces, or phone punctuation."
              placeholder="e.g. +91 98765 43210"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="reservation-date">Preferred date <span aria-hidden="true">*</span></label>
            <input id="reservation-date" name="date" type="date" min={getLocalDateValue()} required />
          </div>
          <div className="form-field">
            <label htmlFor="reservation-time">Preferred time <span aria-hidden="true">*</span></label>
            <select id="reservation-time" name="time" defaultValue="" required>
              <option value="" disabled>Select a time</option>
              {timeOptions.map((time) => <option key={time} value={time}>{time}</option>)}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="reservation-guests">Number of guests <span aria-hidden="true">*</span></label>
            <select id="reservation-guests" name="guests" defaultValue="2" required>
              {Array.from({ length: 12 }, (_, index) => index + 1).map((count) => (
                <option key={count} value={count}>{count} {count === 1 ? 'guest' : 'guests'}</option>
              ))}
            </select>
          </div>
          <div className="form-field form-field-full">
            <label htmlFor="reservation-requests">Special requests <span className="optional-label">Optional</span></label>
            <textarea id="reservation-requests" name="requests" rows="3" placeholder="Anything you’d like us to know?" />
          </div>
        </div>
        {feedback && (
          <p className={`form-feedback ${feedback.type}`} role={feedback.type === 'error' ? 'alert' : 'status'}>
            {feedback.message}
          </p>
        )}
        <button className="button button-primary form-submit" type="submit">
          Send table enquiry <span aria-hidden="true">↗</span>
        </button>
        <p className="form-disclaimer">Demo only · Your details are not sent or stored.</p>
      </form>
    </section>
  )
}
