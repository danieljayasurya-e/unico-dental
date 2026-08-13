import { useEffect, useRef, useState } from 'react'

/**
 * Adds a gentle fade-up the first time an element scrolls into view.
 * Usage:  const [ref, cls] = useReveal();  <div ref={ref} className={cls}>
 */
export function useReveal(delay = 0) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [
    ref,
    `reveal${visible ? ' is-visible' : ''}`,
    { '--reveal-delay': `${delay}ms` },
  ]
}

export default useReveal
