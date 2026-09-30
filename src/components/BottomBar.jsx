import { NavLink } from 'react-router-dom'
import Icon from './Icon.jsx'
import './BottomBar.css'

const tabs = [
  { to: '/garden', label: 'My garden', icon: 'leaf' },
  { to: '/', label: 'Today', icon: 'home' },
  { to: '/weather', label: 'Weather', icon: 'sun' },
]

export default function BottomBar() {
  return (
    <nav className="bottom-bar" aria-label="Main">
      <div className="bottom-bar-pill">
        {tabs.map((tab) => (
          <NavLink key={tab.to} to={tab.to} end className="bottom-bar-tab">
            <Icon name={tab.icon} size={22} />
            <span>{tab.label}</span>
            <span className="bottom-bar-dot" />
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
