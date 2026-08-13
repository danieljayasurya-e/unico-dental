import styles from './WhyChooseUs.module.css'
import SectionHeading from './ui/SectionHeading'
import { business } from '../config/business'
import { useReveal } from '../utils/useReveal'

function Point({ item, index }) {
  const [ref, revealClass, revealStyle] = useReveal(index * 80)
  return (
    <div ref={ref} className={`${styles.item} ${revealClass}`} style={revealStyle}>
      <span className={styles.num} aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.text}>{item.text}</p>
    </div>
  )
}

export default function WhyChooseUs() {
  const { why } = business
  const items = why?.items || []
  if (items.length === 0) return null

  return (
    <section className="section" id="why">
      <div className="container">
        <SectionHeading eyebrow={why.eyebrow} heading={why.heading} layout="stack" />
        <div className={styles.grid}>
          {items.map((item, i) => (
            <Point key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
