import { useEffect } from 'react'

// The frame every screen shares: one solid pastel background, a small title
// at the top, and an optional round button on the right.
export default function Screen({ background, title, action, children }) {
  // Paint the whole page too, so there are no odd-coloured edges on wide
  // displays or when the phone over-scrolls.
  useEffect(() => {
    document.body.style.background = background
  }, [background])

  return (
    <div className="screen" style={{ background }}>
      <header className="screen-top">
        <span className="screen-top-side" />
        <span className="screen-top-title">{title}</span>
        <span className="screen-top-side">{action}</span>
      </header>
      {children}
    </div>
  )
}
