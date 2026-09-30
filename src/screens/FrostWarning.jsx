import { Link } from 'react-router-dom'
import Screen from '../components/Screen.jsx'
import Heading from '../components/Heading.jsx'
import Icon from '../components/Icon.jsx'
import PlantIcon from '../components/PlantIcon.jsx'
import Scallop from '../components/Scallop.jsx'
import { demoFrostWarning } from '../data/demoGarden.js'
import './FrostWarning.css'

// Plant cards take turns with these colours, as in the design.
const cardColors = ['var(--peach)', 'var(--sage)', 'var(--pink)']

export default function FrostWarning() {
  const frost = demoFrostWarning

  return (
    <Screen background="var(--ink)" title="Frost warning" back="/weather" dark>
      <div className="frost-head">
        <div className="frost-head-text">
          <Heading first={frost.first} second={frost.second} size={48} padded={false} />
          <p>{frost.detail}</p>
        </div>
        <Scallop size={110} color="var(--blue)" tilt={-10}>
          <Icon name="frost" size={44} color="#151515" strokeWidth={1.8} />
        </Scallop>
      </div>
      <p className="frost-intro">{frost.intro}</p>

      <section className="frost-actions">
        <h2>Before dark</h2>
        {frost.actions.map((action, i) => (
          <div key={action.plantId} className="frost-card" style={{ background: cardColors[i % cardColors.length] }}>
            <div className="frost-card-disc">
              <PlantIcon name={action.plantId} size={30} />
            </div>
            <div className="frost-card-text">
              <div className="frost-card-name">
                <span>{action.name}</span>
                <span className="place">{action.place}</span>
              </div>
              <p>{action.text}</p>
            </div>
          </div>
        ))}
        <p className="frost-note">{frost.note}</p>
      </section>

      <div className="screen-end">
        <Link to="/" className="big-button is-light">
          Got it
        </Link>
      </div>
    </Screen>
  )
}
