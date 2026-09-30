import { Link } from 'react-router-dom'
import Screen from '../../components/Screen.jsx'
import Heading from '../../components/Heading.jsx'
import Icon from '../../components/Icon.jsx'
import PlantIcon from '../../components/PlantIcon.jsx'
import Scallop from '../../components/Scallop.jsx'
import './Welcome.css'

export default function Welcome() {
  return (
    <Screen background="var(--cream)" header={false}>
      <div className="welcome-brand">
        <span className="welcome-brand-disc">
          <Icon name="leaf" size={16} color="#ffffff" strokeWidth={2} />
        </span>
        Garden Granny
      </div>

      <div className="welcome-heading">
        <Heading first="Grow it" second="right on time." size="min(54px, 13.8vw)" padded={false} />
      </div>

      {/* Four overlapping shapes. Sizes are set in Welcome.css so they shrink on small phones. */}
      <div className="welcome-art" aria-hidden="true">
        <div className="welcome-shape is-sow">
          <div className="welcome-shape-content">
            <PlantIcon name="packet" />
            <span>sow</span>
          </div>
        </div>
        <div className="welcome-shape is-sprout">
          <Scallop size={170} color="var(--sage)" tilt={-12} fluid>
            <div className="welcome-shape-content">
              <PlantIcon name="sprout" />
              <span>sprout</span>
            </div>
          </Scallop>
        </div>
        <div className="welcome-shape is-bloom">
          <div className="welcome-shape-content">
            <PlantIcon name="flowering" />
            <span>bloom</span>
          </div>
        </div>
        <div className="welcome-shape is-harvest">
          <div className="welcome-shape-content">
            <PlantIcon name="fruiting" />
            <span>harvest</span>
          </div>
        </div>
      </div>

      <div className="welcome-end">
        <div className="welcome-end-row">
          <p>Tells you what to do in your garden, and when.</p>
          <Link to="/onboarding/city" className="big-button welcome-start">
            Start
            <Icon name="arrow" strokeWidth={2} />
          </Link>
        </div>
        <p className="welcome-note">No account needed. Your garden stays on this phone.</p>
      </div>
    </Screen>
  )
}
