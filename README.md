# SpiceNest — Restaurant Website

**Flavours Find A Home** is a responsive restaurant website concept built with React, Vite, and CSS. SpiceNest and the business details in this portfolio project are fictional.

## Screenshots

Add current screenshots before publishing the repository. Save them in `docs/screenshots/` and update this section with links, for example:

- Desktop: `docs/screenshots/home-desktop.png`
- Mobile: `docs/screenshots/home-mobile.png`

To capture them, open the site locally, use your browser's screenshot tool, and save one full desktop view and one phone-width view at those paths.

## Features

- Responsive home, menu, story, gallery, reservations, contact, and footer sections
- Searchable, price-sortable menu with category and vegetarian/non-vegetarian filters
- Gallery lightbox with previous/next controls and keyboard navigation
- Sticky navigation that highlights the section currently in view
- Reservation enquiry form with browser validation and a demo confirmation message
- Semantic HTML, keyboard focus styles, a skip link, and mobile navigation controls
- Compressed restaurant and food photography stored with the project
- Fictional sample address, contact information, opening hours, menu, and prices

## Technology

- React 19
- Vite 8
- CSS
- Oxlint

## Run locally

Install Node.js (Vite 8 requires Node.js 20.19+ or 22.12+), then run:

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal. To create a production build, run:

```bash
npm run build
```

The generated production files are written to `dist/`.

## Project structure

```text
src/
  assets/images/       Restaurant and food photos
  components/          Shared navigation and footer
  data/menuItems.js    Menu content used by the menu section
  sections/            Home, menu, story, gallery, reservations, contact
  App.jsx              Page composition
  App.css              Component and section styling
  index.css            Global styles and design tokens
```

## Reservation form limitations

The reservation form is a front-end demonstration. It validates the fields in the browser and displays a sample confirmation, but it does not send, store, or confirm a real booking. A real restaurant would need a secure backend or a reservation service before accepting bookings through this form.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Keep the Vite defaults: build command `npm run build` and output directory `dist`.
4. Deploy. Vercel will build the project and provide a preview URL.

No environment variables or backend service are needed for this demo.

## Portfolio description

Designed and built SpiceNest, a responsive restaurant website concept using React and Vite. The project includes an interactive, filterable menu, accessible navigation, a photo gallery, and a validated reservation enquiry form presented as a front-end demo.
