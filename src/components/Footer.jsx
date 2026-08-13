import styles from './Footer.module.css'
import { business } from '../config/business'
import { contactActions, directionsHref } from '../utils/links'

export default function Footer() {
  const { name, footer, addressLines, city, hours } = business
  const actions = contactActions()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <a className={styles.brand} href="#top">
              {name}
              <span className={styles.dot} aria-hidden="true" />
            </a>
            {footer?.note && <p className={styles.note}>{footer.note}</p>}
          </div>

          <div>
            <p className={styles.colTitle}>Find us</p>
            <div className={styles.list}>
              <a href={directionsHref()} target="_blank" rel="noopener noreferrer">
                {addressLines?.join(', ') || city}
              </a>
              {actions.map((action) => (
                <a
                  key={action.key}
                  href={action.href}
                  {...(action.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {action.value}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className={styles.colTitle}>Hours</p>
            <div className={styles.list}>
              {hours.map((row) => (
                <span key={row.day} className={styles.row}>
                  <span>{row.day.slice(0, 3)}</span>
                  <span>{row.time}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {year} {name}
          </span>
          <span>
            {addressLines?.[0]}, {city}
          </span>
        </div>
      </div>
    </footer>
  )
}
