import { useState } from 'react'
import styles from './Contact.module.css'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'
import { business } from '../config/business'
import { contactActions } from '../utils/links'
import { useReveal } from '../utils/useReveal'

export default function Contact() {
  const { contact, hours, addressLines, services } = business
  const [sent, setSent] = useState(false)
  const actions = contactActions()

  const [detailsRef, detailsClass, detailsStyle] = useReveal()
  const [formRef, formClass, formStyle] = useReveal(120)

  // Frontend only — nothing is transmitted anywhere.
  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="section section--neutral" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow={contact.eyebrow}
          heading={contact.heading}
          intro={contact.intro}
        />

        <div className={styles.wrap}>
          {/* ---------- practical details ---------- */}
          <div
            ref={detailsRef}
            className={`${styles.details} ${detailsClass}`}
            style={detailsStyle}
          >
            {addressLines?.length > 0 && (
              <div className={styles.block}>
                <span className={styles.label}>The clinic</span>
                <p className={styles.address}>
                  {addressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
              </div>
            )}

            {hours?.length > 0 && (
              <div className={styles.block}>
                <span className={styles.label}>Opening hours</span>
                <div className={styles.hours}>
                  {hours.map((row) => (
                    <div
                      key={row.day}
                      className={[styles.hourRow, row.closed ? styles.closed : '']
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <span className={styles.day}>{row.day}</span>
                      <span className={styles.time}>{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.actions}>
              <span className={styles.label}>Reach us</span>
              <div className={styles.actionRow}>
                {actions.map((action, i) => (
                  <Button
                    key={action.key}
                    href={action.href}
                    variant={i === 0 ? 'primary' : 'secondary'}
                    external={action.external}
                    className={i === 0 ? styles.primaryAction : ''}
                  >
                    {action.key === 'phone' ? `Call ${action.value}` : action.label}
                  </Button>
                ))}
                <Button href="MAPS" variant="secondary" withArrow>
                  Directions
                </Button>
              </div>
            </div>
          </div>

          {/* ---------- appointment request form ---------- */}
          <form
            ref={formRef}
            className={`${styles.form} ${formClass}`}
            style={formStyle}
            onSubmit={handleSubmit}
          >
            <div className={styles.formHead}>
              <h3 className={styles.formTitle}>Request a time</h3>
              {contact.formNote && (
                <p className={styles.formNote}>{contact.formNote}</p>
              )}
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" autoComplete="name" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" required />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="service">What do you need?</label>
              <select id="service" name="service" defaultValue={services.items[0]?.title}>
                {services.items.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
                <option value="Something else">Something else</option>
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Anything we should know?</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Days and times that suit you, or what is bothering you."
              />
            </div>

            <Button type="submit" full withArrow>
              Send request
            </Button>

            {sent && (
              <div className={styles.success} role="status">
                <p>{contact.successNote}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
