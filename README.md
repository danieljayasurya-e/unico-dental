# Unico Dental — website

A one-page website built with React + Vite. Plain CSS, no frameworks.

## Running it

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production files land in /dist
```

## Changing the content

Everything you read on the site lives in **`src/config/business.js`** — text, phone
number, opening hours, services, photos and colors. Nothing else needs editing.

A few things worth knowing:

- **Empty means hidden.** Leave `email: ''` or `whatsapp: ''` and those buttons
  disappear from the whole site. Nothing breaks, nothing looks unfinished.
- **Testimonials are off** until you paste real reviews into the `testimonials`
  list. The section only appears once there is something real in it.
- **Photos** are Unsplash links. To use your own, put an image in `/public`
  (say `clinic.jpg`) and write `'/clinic.jpg'` in place of the link.
- **Colors** are the six values in the `theme` block at the bottom of the file.

## What is not wired up

The contact form is front-end only — it does not send anything yet. It shows a
note asking the visitor to call. Connect it to a form service (Formspree, Netlify
Forms or similar) when you are ready.

## Where things are

```
src/
  config/business.js    all content and colors
  styles/global.css     design tokens: type, spacing, color, shadows
  components/           one file per section
  components/ui/        button, section heading, service card
```
