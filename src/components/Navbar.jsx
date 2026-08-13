import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import Button from './ui/Button'
import { business } from '../config/business'
import { phoneHref } from '../utils/links'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu when the viewport grows or Escape is pressed.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth > 900 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const navClass = [styles.nav, scrolled ? styles.scrolled : '']
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <header className={navClass}>
        <div className={`container ${styles.inner}`}>
          <a className={styles.brand} href="#top">
            {business.name}
            <span className={styles.dot} aria-hidden="true" />
          </a>

          <nav className={styles.links} aria-label="Main">
            {business.nav.map((item) => (
              <a key={item.href} className={styles.link} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.action}>
            <Button href={business.cta.nav.href}>{business.cta.nav.label}</Button>
          </div>

          <button
            type="button"
            className={[styles.burger, open ? styles.open : '']
              .filter(Boolean)
              .join(' ')}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.burgerBox} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {open && (
        <>
          <button
            className={styles.scrim}
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setOpen(false)}
          />
          <div className={styles.panel} id="mobile-menu">
            {business.nav.map((item) => (
              <a
                key={item.href}
                className={styles.panelLink}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className={styles.panelCta}>
              <Button
                href={business.cta.nav.href}
                full
                onClick={() => setOpen(false)}
              >
                {business.cta.nav.label}
              </Button>
            </div>
            {business.phone && (
              <p className={styles.panelMeta}>
                Or call <a href={phoneHref()}>{business.phone}</a>
              </p>
            )}
          </div>
        </>
      )}
    </>
  )
}
