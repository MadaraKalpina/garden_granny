import { Link } from 'react-router-dom'
import Screen from '../components/Screen.jsx'
import Heading from '../components/Heading.jsx'
import Icon from '../components/Icon.jsx'
import PlantIcon from '../components/PlantIcon.jsx'
import { demoToday, demoWeek, demoFrost, demoWateringChanges } from '../data/demoGarden.js'
import './Weather.css'

// Plant discs take turns with these colours, as in the design.
const discColors = ['var(--sage)', 'var(--peach)', 'var(--pink)']

// A real minus sign (−) reads better than a hyphen next to a number.
function formatTemp(temp) {
  return `${temp < 0 ? '−' : ''}${Math.abs(temp)}°`
}

function dayClass(day) {
  if (day.isToday) return 'week-day-name is-today'
  if (day.isFrost) return 'week-day-name is-frost'
  return 'week-day-name'
}

export default function Weather() {
  return (
    <Screen
      background="var(--blue)"
      title="Weather"
      hasBar
      action={
        // TODO: no design yet for changing the city after onboarding.
        <button type="button" className="round-button" aria-label="Change city">
          <Icon name="pin" />
        </button>
      }
    >
      <Heading first="This week" second={`in ${demoToday.city}`} />

      <div className="week">
        {demoWeek.map((day) => (
          <div key={day.day} className="week-day">
            <div className={dayClass(day)}>{day.day}</div>
            <Icon name={day.icon} strokeWidth={1.8} />
            <span className="week-temp">{formatTemp(day.temp)}</span>
            <span className="week-rain">{day.rainMm} mm</span>
          </div>
        ))}
      </div>

      <Link to="/frost" className="frost-pill">
        <div className="frost-pill-disc">
          <Icon name="frost" size={22} color="#151515" />
        </div>
        <div className="frost-pill-text">
          <span className="frost-pill-title">{demoFrost.title}</span>
          <span className="frost-pill-detail">{demoFrost.detail}</span>
        </div>
        <Icon name="chevron" strokeWidth={2} />
      </Link>

      <section className="watering">
        <h2>How watering changes</h2>
        {demoWateringChanges.map((change, i) => (
          <div key={change.plantId} className="watering-card">
            <div className="watering-disc" style={{ background: discColors[i % discColors.length] }}>
              <PlantIcon name={change.plantId} size={30} />
            </div>
            <div className="watering-text">
              <div className="watering-name">
                <span>{change.name}</span>
                <span className="place muted">{change.place}</span>
              </div>
              <p>{change.text}</p>
            </div>
          </div>
        ))}
      </section>
    </Screen>
  )
}
