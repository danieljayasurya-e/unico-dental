import styles from './SectionHeading.module.css'
import { useReveal } from '../../utils/useReveal'

/**
 * Eyebrow + H2 (+ optional intro paragraph).
 * layout: 'split' (heading left, intro right) | 'stack' | 'center'
 */
export default function SectionHeading({
  eyebrow,
  heading,
  intro,
  layout = 'split',
  id,
}) {
  const [ref, revealClass, revealStyle] = useReveal()

  const classes = [styles.head, styles[layout]].filter(Boolean).join(' ')

  return (
    <header
      ref={ref}
      className={`${classes} ${revealClass}`}
      style={revealStyle}
    >
      {eyebrow && (
        <div className={styles.eyebrowRow}>
          <span className={styles.mark} aria-hidden="true" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}
      <h2 className={styles.title} id={id}>
        {heading}
      </h2>
      {intro && <p className={styles.intro}>{intro}</p>}
    </header>
  )
}
