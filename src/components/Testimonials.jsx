import styles from './Testimonials.module.css'
import SectionHeading from './ui/SectionHeading'
import { business } from '../config/business'
import { useReveal } from '../utils/useReveal'

function Quote({ item, index }) {
  const [ref, revealClass, revealStyle] = useReveal(index * 90)
  return (
    <figure ref={ref} className={`${styles.card} ${revealClass}`} style={revealStyle}>
      <span className={styles.mark} aria-hidden="true">
        &ldquo;
      </span>
      <blockquote className={styles.quote}>{item.quote}</blockquote>
      {item.name && <figcaption className={styles.name}>{item.name}</figcaption>}
    </figure>
  )
}

/** Renders nothing unless real reviews are listed in business.js. */
export default function Testimonials() {
  const items = business.testimonials || []
  if (items.length === 0) return null

  return (
    <section className="section" id="reviews">
      <div className="container">
        <SectionHeading
          eyebrow="In their words"
          heading="What patients say"
          layout="stack"
        />
        <div className={styles.grid}>
          {items.map((item, i) => (
            <Quote key={item.quote.slice(0, 24)} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
