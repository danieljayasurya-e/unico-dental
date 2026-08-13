import styles from './Services.module.css'
import SectionHeading from './ui/SectionHeading'
import ServiceCard from './ui/ServiceCard'
import Button from './ui/Button'
import { business } from '../config/business'
import { phoneHref } from '../utils/links'

export default function Services() {
  const { services, phone } = business
  const items = services.items || []
  if (items.length === 0) return null

  // With only one or two services a thin grid looks stretched - go wide instead.
  const feature = items.length <= 2

  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow={services.eyebrow}
          heading={services.heading}
          intro={services.intro}
        />

        <div
          className={[styles.grid, feature ? styles.feature : '']
            .filter(Boolean)
            .join(' ')}
        >
          {items.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              feature={feature}
              delay={i * 90}
            />
          ))}
        </div>

        {phone && (
          <div className={styles.footNote}>
            <p>Not sure which one you need?</p>
            <Button href={phoneHref()} variant="quiet">
              Call {phone}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
