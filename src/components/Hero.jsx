import styles from './Hero.module.css'
import Button from './ui/Button'
import { business } from '../config/business'
import { phoneHref } from '../utils/links'

export default function Hero() {
  const { hero, cta } = business

  return (
    <section className={styles.hero} id="top">
      <div className={styles.media}>
        <img src={hero.image} alt={hero.imageAlt} fetchPriority="high" />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          {hero.eyebrow && (
            <div className={styles.eyebrowRow}>
              <span className={`eyebrow ${styles.eyebrow}`}>{hero.eyebrow}</span>
            </div>
          )}

          <h1 className={styles.title}>{hero.heading}</h1>

          {hero.subheading && <p className={styles.sub}>{hero.subheading}</p>}

          <div className={styles.actions}>
            <Button href={cta.primary.href} withArrow>
              {cta.primary.label}
            </Button>
            {cta.secondary?.label && (
              <Button href={cta.secondary.href} variant="light">
                {cta.secondary.label}
              </Button>
            )}
          </div>
        </div>

        {/* the trust bar runs the full width of the grid, under the headline */}
        <div className={styles.trust}>
          {business.hoursSummary && (
            <span className={styles.trustItem}>
              <span className={styles.bullet} aria-hidden="true" />
              {business.hoursSummary}
            </span>
          )}
          {business.addressLines?.[0] && (
            <span className={styles.trustItem}>
              <span className={styles.bullet} aria-hidden="true" />
              {business.addressLines[0]}, {business.city}
            </span>
          )}
          {business.phone && (
            <span className={`${styles.trustItem} ${styles.trustPhone}`}>
              <a href={phoneHref()}>{business.phone}</a>
            </span>
          )}
        </div>
      </div>
    </section>
  )
}
