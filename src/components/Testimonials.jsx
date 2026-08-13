import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './Testimonials.module.css'
import SectionHeading from './ui/SectionHeading'
import { business } from '../config/business'
import { directionsHref } from '../utils/links'
import { useReveal } from '../utils/useReveal'

const AUTOPLAY_MS = 5500

function Attribution({ name, when }) {
  return (
    <figcaption className={styles.by}>
      <span className={styles.byRule} aria-hidden="true" />
      <span className={styles.name}>{name}</span>
      {when && <span className={styles.when}>{when}</span>}
    </figcaption>
  )
}

function Chevron({ back = false }) {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d={back ? 'M13 8H4M7.5 4l-4 4 4 4' : 'M3 8h9M8.5 4l4 4-4 4'}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Renders nothing unless real reviews are listed in business.js. */
export default function Testimonials() {
  const reviews = business.testimonials || {}
  const items = reviews.items || []
  const featured = reviews.featured

  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [featuredRef, featuredClass, featuredStyle] = useReveal()

  // Which slide is in view. IntersectionObserver rather than a scroll
  // listener, so this costs nothing while the user scrolls the page.
  useEffect(() => {
    const track = trackRef.current
    if (!track || items.length === 0) return

    const slides = Array.from(track.children)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(slides.indexOf(entry.target))
          }
        })
      },
      { root: track, threshold: 0.75 }
    )

    slides.forEach((slide) => observer.observe(slide))
    return () => observer.disconnect()
  }, [items.length])

  const goTo = useCallback((index) => {
    const track = trackRef.current
    const slide = track?.children[index]
    if (slide) track.scrollTo({ left: slide.offsetLeft })
  }, [])

  const step = useCallback(
    (delta) => {
      const next = (active + delta + items.length) % items.length
      goTo(next)
    },
    [active, goTo, items.length]
  )

  // Gentle auto-advance. Stops on hover, focus, touch, or a hidden tab,
  // and never runs for visitors who asked for reduced motion.
  useEffect(() => {
    if (paused || items.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const id = setInterval(() => {
      if (!document.hidden) step(1)
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, step, items.length])

  if (!featured?.quote && items.length === 0) return null

  return (
    <section className={`section ${styles.dark}`} id="reviews">
      <div className="container">
        <SectionHeading
          eyebrow={reviews.eyebrow}
          heading={reviews.heading}
          intro={reviews.note}
          tone="dark"
        />

        {featured?.quote && (
          <figure
            ref={featuredRef}
            className={`${styles.featured} ${featuredClass}`}
            style={featuredStyle}
          >
            <span className={styles.mark} aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className={styles.featuredQuote}>{featured.quote}</blockquote>
            <Attribution name={featured.name} when={featured.when} />
          </figure>
        )}

        {items.length > 0 && (
          <div
            className={styles.slider}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
          >
            <div
              className={styles.track}
              ref={trackRef}
              tabIndex={0}
              role="group"
              aria-roledescription="carousel"
              aria-label={`${business.name} reviews`}
            >
              {items.map((item) => (
                <figure className={styles.slide} key={item.name + item.quote.slice(0, 12)}>
                  <div className={styles.card}>
                    <span className={styles.cardMark} aria-hidden="true">
                      &ldquo;
                    </span>
                    <blockquote className={styles.quote}>{item.quote}</blockquote>
                    <Attribution name={item.name} when={item.when} />
                  </div>
                </figure>
              ))}
            </div>

            <div className={styles.controls}>
              <div className={styles.dots}>
                {items.map((item, i) => (
                  <button
                    key={item.name + i}
                    type="button"
                    className={[styles.dot, i === active ? styles.dotActive : '']
                      .filter(Boolean)
                      .join(' ')}
                    aria-label={`Show review ${i + 1} of ${items.length}`}
                    aria-current={i === active}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>

              <div className={styles.arrows}>
                <button
                  type="button"
                  className={styles.arrow}
                  aria-label="Previous review"
                  onClick={() => step(-1)}
                >
                  <Chevron back />
                </button>
                <button
                  type="button"
                  className={styles.arrow}
                  aria-label="Next review"
                  onClick={() => step(1)}
                >
                  <Chevron />
                </button>
              </div>
            </div>
          </div>
        )}

        <div className={styles.foot}>
          <span>{business.name} on Google</span>
          {reviews.linkLabel && (
            <a
              className={styles.sourceLink}
              href={directionsHref()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {reviews.linkLabel}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8h9M8.5 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
