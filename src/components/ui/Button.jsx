import styles from './Button.module.css'
import { resolveHref } from '../../utils/links'

/**
 * One button for the whole site.
 * variant: 'primary' | 'secondary' | 'light' | 'quiet'
 * Renders a link when `href` is given, otherwise a real <button>.
 */
export default function Button({
  children,
  href,
  variant = 'primary',
  full = false,
  external = false,
  withArrow = false,
  className = '',
  ...rest
}) {
  const classes = [
    styles.btn,
    styles[variant],
    full ? styles.full : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {children}
      {withArrow && (
        <svg
          className={styles.arrow}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 8h9M8.5 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  )

  if (href) {
    const url = resolveHref(href)
    const isExternal = external || /^https?:/.test(url)
    return (
      <a
        className={classes}
        href={url}
        {...(isExternal
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button className={classes} type="button" {...rest}>
      {content}
    </button>
  )
}
