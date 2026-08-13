import { useEffect, useRef, useState } from 'react'
import styles from './Loader.module.css'
import { business } from '../config/business'

const MIN_VISIBLE = 900 // long enough to read the wordmark
const MAX_WAIT = 2200 // never hold a slow connection hostage
const LIFT_MS = 900 // must match the transition in the stylesheet

/**
 * The opening curtain. Shows once per browser session, skips entirely
 * for reduced-motion visitors, and always gets out of the way.
 */
/** Read once, before the first paint, so the page never flashes. */
function shouldSkipIntro() {
  if (typeof window === 'undefined') return true
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true
  try {
    return Boolean(sessionStorage.getItem('unico-intro-seen'))
  } catch {
    return false // private browsing can block storage; just play the intro
  }
}

export default function Loader() {
  const [phase, setPhase] = useState(() => (shouldSkipIntro() ? 'done' : 'loading'))
  const finished = useRef(false)
  const skipped = useRef(phase === 'done')

  // Mount-only: the timers below outlive the phase changes they cause.
  useEffect(() => {
    if (skipped.current) return

    // StrictMode runs effects twice in dev; let the second pass re-arm.
    finished.current = false
    document.body.style.overflow = 'hidden'

    const started = performance.now()
    let liftTimer
    let doneTimer

    const finish = () => {
      if (finished.current) return
      finished.current = true

      const remaining = Math.max(0, MIN_VISIBLE - (performance.now() - started))
      liftTimer = setTimeout(() => {
        setPhase('lifting')
        doneTimer = setTimeout(() => {
          setPhase('done')
          try {
            sessionStorage.setItem('unico-intro-seen', '1')
          } catch {
            /* storage blocked; the intro simply plays again next time */
          }
          document.body.style.overflow = ''
        }, LIFT_MS)
      }, remaining)
    }

    // Whichever comes first: the page finishing, or the cap.
    if (document.readyState === 'complete') finish()
    else window.addEventListener('load', finish, { once: true })
    const cap = setTimeout(finish, MAX_WAIT)

    return () => {
      clearTimeout(liftTimer)
      clearTimeout(doneTimer)
      clearTimeout(cap)
      window.removeEventListener('load', finish)
      document.body.style.overflow = ''
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div
      className={[styles.loader, phase === 'lifting' ? styles.lifting : '']
        .filter(Boolean)
        .join(' ')}
      aria-hidden="true"
    >
      <div className={styles.inner}>
        <span className={styles.wordmark}>
          {business.name}
          <span className={styles.dot} />
        </span>
        <span className={styles.rail} />
      </div>
    </div>
  )
}
