/*
 * =====================================================================
 *  UNICO DENTAL — SITE CONTENT
 * =====================================================================
 *  This is the only file you need to edit.
 *  Every word, colour, service and photo on the website comes from here.
 *
 *  Rules of thumb:
 *   - Text inside "quotes" is what visitors read. Change it freely.
 *   - Leave a field as an empty string ("") and the website will simply
 *     hide that piece — nothing will look broken.
 *   - Photo links come from unsplash.com. Replace them with your own
 *     photos later by dropping images into /public and using "/my-photo.jpg".
 * =====================================================================
 */

export const business = {
  /* ---------------------------------------------------------------
   *  1. THE BASICS
   * ------------------------------------------------------------- */
  name: 'Unico Dental',
  shortName: 'Unico',
  type: 'Dental Clinic',
  tagline: 'Unico Dental — your trusted local dental clinic',
  city: 'Dallas',
  address: '2475 S Cockrell Hill Rd #400, Dallas, TX 75211, USA',
  addressLines: ['2475 S Cockrell Hill Rd #400', 'Dallas, TX 75211'],

  /* ---------------------------------------------------------------
   *  2. HOW PEOPLE REACH YOU
   *  Leave any of these empty ("") to hide that button everywhere.
   * ------------------------------------------------------------- */
  phone: '(972) 982-2477',
  phoneLink: 'tel:+19729822477',
  whatsapp: '', // e.g. '19729822477' — shows a WhatsApp button when filled
  email: '', // e.g. 'hello@unicodental.com' — shows an email button when filled
  mapsLink:
    'https://maps.google.com/?cid=15010912806885017172&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA',

  /* ---------------------------------------------------------------
   *  3. OPENING HOURS
   *  "closed: true" greys the day out and writes "Closed".
   * ------------------------------------------------------------- */
  hours: [
    { day: 'Monday', time: '10:00 AM – 6:00 PM' },
    { day: 'Tuesday', time: '10:00 AM – 6:00 PM' },
    { day: 'Wednesday', time: 'Closed', closed: true },
    { day: 'Thursday', time: '10:00 AM – 6:00 PM' },
    { day: 'Friday', time: '10:00 AM – 6:00 PM' },
    { day: 'Saturday', time: '9:00 AM – 3:00 PM' },
    { day: 'Sunday', time: 'Closed', closed: true },
  ],
  // The short version shown in the hero and footer.
  hoursSummary: 'Mon–Tue & Thu–Fri 10–6 · Sat 9–3',

  /* ---------------------------------------------------------------
   *  4. BUTTONS
   * ------------------------------------------------------------- */
  cta: {
    primary: { label: 'Book Appointment', href: '#contact' },
    secondary: { label: 'Get Directions', href: 'MAPS' }, // "MAPS" = your Google Maps link
    nav: { label: 'Book Appointment', href: '#contact' },
  },

  /* ---------------------------------------------------------------
   *  5. NAVIGATION
   * ------------------------------------------------------------- */
  nav: [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Visit', href: '#contact' },
    { label: 'Questions', href: '#faq' },
  ],

  /* ---------------------------------------------------------------
   *  6. HERO — the first thing visitors see
   * ------------------------------------------------------------- */
  hero: {
    eyebrow: 'Dallas · Dental Clinic',
    heading: 'Careful dentistry,\nclose to home.',
    subheading:
      'Cleanings, checkups and cosmetic work for families in Dallas — unhurried appointments on Cockrell Hill Road.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Treatment room at a dental clinic',
  },

  /* ---------------------------------------------------------------
   *  7. SERVICES
   *  Add or remove items — the layout adjusts on its own.
   * ------------------------------------------------------------- */
  services: {
    eyebrow: 'What we do',
    heading: 'Three things, done properly',
    intro:
      'Most visits fall into one of these. If you are unsure what you need, call and we will talk it through first.',
    items: [
      {
        title: 'Teeth Cleaning',
        description:
          'A thorough clean and polish, at a pace that suits you.',
        image:
          'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1600&q=80',
        alt: 'Dental hygienist cleaning a patient’s teeth',
      },
      {
        title: 'Checkups',
        description:
          'A full look at teeth and gums, with anything we find explained plainly.',
        image:
          'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80',
        alt: 'Dental chair and equipment ready for a checkup',
      },
      {
        title: 'Cosmetic Dentistry',
        description:
          'Work on the look of your smile, planned with you before we begin.',
        image:
          'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1600&q=80',
        alt: 'Patient smiling after cosmetic dental treatment',
      },
    ],
  },

  /* ---------------------------------------------------------------
   *  8. ABOUT
   * ------------------------------------------------------------- */
  about: {
    eyebrow: 'About the clinic',
    heading: 'A neighbourhood clinic on Cockrell Hill Road',
    paragraphs: [
      'Unico Dental is a single clinic in Dallas, not a chain. We keep to cleanings, checkups and cosmetic dentistry so that the everyday work is done well.',
      'Appointments run Monday through Friday, with Saturday mornings for anyone who cannot take time off during the week. Wednesdays we are closed.',
    ],
    image:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Dentist talking with a patient in the treatment room',
  },

  /* ---------------------------------------------------------------
   *  9. WHY PEOPLE CHOOSE US
   * ------------------------------------------------------------- */
  why: {
    eyebrow: 'Why locals come here',
    heading: 'Straightforward from the first call',
    items: [
      {
        title: 'Saturday appointments',
        text: 'Open 9 to 3 on Saturdays, so a visit does not have to cost you a working day.',
      },
      {
        title: 'One clinic, one place',
        text: 'Everything happens at 2475 S Cockrell Hill Road — the same room, the same faces.',
      },
      {
        title: 'Routine and cosmetic care',
        text: 'Cleanings, checkups and cosmetic work under one roof, with no referral needed between them.',
      },
      {
        title: 'A real phone number',
        text: 'Call (972) 982-2477 during opening hours and speak to the clinic directly.',
      },
    ],
  },

  /* ---------------------------------------------------------------
   *  10. TESTIMONIALS
   *  Paste real patient reviews here to switch the section on.
   *  Format: { quote: '...', name: '...' }
   *  Leave the list empty and the section stays hidden.
   * ------------------------------------------------------------- */
  testimonials: [],

  /* ---------------------------------------------------------------
   *  11. CONTACT
   * ------------------------------------------------------------- */
  contact: {
    eyebrow: 'Visit us',
    heading: 'Book a time that suits you',
    intro:
      'Call during opening hours, or send the form below and we will get back to you about a time.',
    formNote:
      'This form sends nothing yet. For a confirmed appointment, please call the clinic.',
    successNote:
      'Thanks — your details are ready to send. To confirm a time today, call (972) 982-2477.',
  },

  /* ---------------------------------------------------------------
   *  12. FAQ — remove any question you do not want
   * ------------------------------------------------------------- */
  faq: {
    eyebrow: 'Before you come in',
    heading: 'Questions we hear often',
    items: [
      {
        q: 'When are you open?',
        a: 'Monday, Tuesday, Thursday and Friday from 10:00 AM to 6:00 PM, and Saturday from 9:00 AM to 3:00 PM. We are closed Wednesday and Sunday.',
      },
      {
        q: 'How do I book an appointment?',
        a: 'Call (972) 982-2477 during opening hours, or send the contact form and we will follow up about a time.',
      },
      {
        q: 'Where exactly are you?',
        a: '2475 S Cockrell Hill Rd #400, Dallas, TX 75211. The directions button opens the clinic on Google Maps.',
      },
      {
        q: 'What do you treat?',
        a: 'Teeth cleaning, checkups and cosmetic dentistry. If you are not sure which one you need, call and describe it — we will tell you honestly.',
      },
    ],
  },

  /* ---------------------------------------------------------------
   *  13. FOOTER
   * ------------------------------------------------------------- */
  footer: {
    note: 'A dental clinic in Dallas, Texas.',
  },
}

/* -----------------------------------------------------------------
 *  COLOURS — change these six values to restyle the whole site.
 * --------------------------------------------------------------- */
export const theme = {
  primary: '#0F5F58', // deep teal — buttons, links
  primaryDark: '#0A423D', // pressed / hover state
  accent: '#8FC9BC', // mint — eyebrows and small marks
  ink: '#0D1B1A', // near-black text
  bg: '#FBFAF7', // page background
  neutral: '#EDF1EF', // alternating section background
}

export default business
