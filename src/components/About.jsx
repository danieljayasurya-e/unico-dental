import styles from './About.module.css'
import Button from './ui/Button'
import { business } from '../config/business'
import { useReveal } from '../utils/useReveal'

export default function About() {
  const { about, addressLines } = business
  const [figureRef, figureClass, figureStyle] = useReveal()
  const [bodyRef, bodyClass, bodyStyle] = useReveal(120)

  return (
    <section className="section section--neutral" id="about">
      <div className="container">
        <div className={styles.wrap}>
          <figure
            ref={figureRef}
            className={`${styles.figure} ${figureClass}`}
            style={figureStyle}
          >
            <div className={styles.media}>
              <img src={about.image} alt={about.imageAlt} loading="lazy" />
            </div>
          </figure>

          <div
            ref={bodyRef}
            className={`${styles.body} ${bodyClass}`}
            style={bodyStyle}
          >
            {about.eyebrow && (
              <div className={styles.eyebrowRow}>
                <span className={styles.mark} aria-hidden="true" />
                <span className="eyebrow">{about.eyebrow}</span>
              </div>
            )}

            <h2 className={styles.title}>{about.heading}</h2>

            {about.paragraphs.map((text) => (
              <p key={text.slice(0, 24)} className={styles.para}>
                {text}
              </p>
            ))}

            {addressLines?.length > 0 && (
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Find us</span>
                <span className={styles.detailValue}>
                  {addressLines.map((line) => (
                    <span key={line} style={{ display: 'block' }}>
                      {line}
                    </span>
                  ))}
                </span>
              </div>
            )}

            <div className={styles.actions}>
              <Button href="MAPS" variant="secondary" withArrow>
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
