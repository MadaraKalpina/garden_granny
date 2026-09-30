import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

// The frame every screen shares: one solid background, a small title at the
// top, an optional back button on the left and round button on the right.
//   back   – where the back button goes (leave out for no back button)
//   dark   – white text on a dark background (frost warning)
//   hasBar – leave room at the bottom for the floating bottom bar
//   header – set to false for a screen with no top row at all (welcome)
export default function Screen({
  background,
  title,
  back,
  action,
  dark = false,
  hasBar = false,
  header = true,
  children,
}) {
  // Paint the whole page too, so there are no odd-coloured edges on wide
  // displays or when the phone over-scrolls.
  useEffect(() => {
    document.body.style.background = background
  }, [background])

  // Each screen starts at the top, not where the last one was scrolled to.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const className = ['screen', dark && 'screen-dark', hasBar && 'has-bar'].filter(Boolean).join(' ')

  return (
    <div className={className} style={{ background }}>
      {header && (
        <header className="screen-top">
          <span className="screen-top-side">
            {back && (
              <Link to={back} className="round-button" aria-label="Back">
                <Icon name="back" />
              </Link>
            )}
          </span>
          <span className="screen-top-title">{title}</span>
          <span className="screen-top-side">{action}</span>
        </header>
      )}
      {children}
    </div>
  )
}
