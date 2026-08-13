import { business } from '../config/business'

/**
 * Turns the shorthand used in business.js into a real link.
 * "MAPS" → the Google Maps link (or a maps search for the address).
 */
export function resolveHref(href) {
  if (href === 'MAPS') return directionsHref()
  return href
}

export function directionsHref() {
  if (business.mapsLink) return business.mapsLink
  return `https://maps.google.com/?q=${encodeURIComponent(business.address)}`
}

export function whatsappHref() {
  if (!business.whatsapp) return ''
  return `https://wa.me/${business.whatsapp.replace(/\D/g, '')}`
}

export function phoneHref() {
  if (!business.phone) return ''
  return business.phoneLink || `tel:${business.phone.replace(/[^\d+]/g, '')}`
}

export function emailHref() {
  return business.email ? `mailto:${business.email}` : ''
}

/** The contact actions that actually exist for this business. */
export function contactActions() {
  const actions = []
  if (business.phone) {
    actions.push({
      key: 'phone',
      label: 'Call the clinic',
      value: business.phone,
      href: phoneHref(),
    })
  }
  if (business.whatsapp) {
    actions.push({
      key: 'whatsapp',
      label: 'WhatsApp',
      value: business.whatsapp,
      href: whatsappHref(),
      external: true,
    })
  }
  if (business.email) {
    actions.push({
      key: 'email',
      label: 'Email',
      value: business.email,
      href: emailHref(),
    })
  }
  return actions
}
