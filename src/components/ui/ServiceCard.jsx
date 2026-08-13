import styles from './ServiceCard.module.css'
import { useReveal } from '../../utils/useReveal'

export default function ServiceCard({ service, index, feature = false, delay = 0 }) {
  const [ref, revealClass, revealStyle] = useReveal(delay)

  const classes = [styles.card, feature ? styles.feature : '', revealClass]
    .filter(Boolean)
    .join(' ')

  return (
    <article ref={ref} className={classes} style={revealStyle}>
      <div className={styles.media}>
        <img src={service.image} alt={service.alt || service.title} loading="lazy" />
        <span className={styles.index} aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{service.title}</h3>
        {service.description && <p className={styles.text}>{service.description}</p>}
      </div>
    </article>
  )
}
