import { useState } from 'react'
import styles from './Faq.module.css'
import SectionHeading from './ui/SectionHeading'
import { business } from '../config/business'
import { useReveal } from '../utils/useReveal'

export default function Faq() {
  const { faq } = business
  const items = faq?.items || []
  const [openIndex, setOpenIndex] = useState(0)
  const [ref, revealClass, revealStyle] = useReveal(80)

  if (items.length === 0) return null

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className={styles.wrap}>
          <SectionHeading
            eyebrow={faq.eyebrow}
            heading={faq.heading}
            layout="stack"
          />

          <div ref={ref} className={`${styles.list} ${revealClass}`} style={revealStyle}>
            {items.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={item.q}
                  className={[styles.item, isOpen ? styles.open : '']
                    .filter(Boolean)
                    .join(' ')}
                >
                  <h3>
                    <button
                      type="button"
                      className={styles.trigger}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-trigger-${i}`}
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    >
                      {item.q}
                      <span className={styles.icon} aria-hidden="true" />
                    </button>
                  </h3>
                  <div
                    className={[styles.panel, isOpen ? styles.panelOpen : '']
                      .filter(Boolean)
                      .join(' ')}
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                  >
                    <div className={styles.panelInner}>
                      <p className={styles.answer}>{item.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
