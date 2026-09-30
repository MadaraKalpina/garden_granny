import { useNavigate, useOutletContext } from 'react-router-dom'
import Screen from '../../components/Screen.jsx'
import Heading from '../../components/Heading.jsx'
import Icon from '../../components/Icon.jsx'
import PlantIcon from '../../components/PlantIcon.jsx'
import Scallop from '../../components/Scallop.jsx'
import { demoReminderExamples } from '../../data/demoGarden.js'
import './onboarding.css'

export default function AllowReminders() {
  const { choices, onFinish } = useOutletContext()
  const navigate = useNavigate()
  const lastPlant = choices.plantIds.length

  // Both buttons just finish setup for now. Asking the phone for permission
  // comes with real notifications in step 10.
  function finish() {
    onFinish()
    navigate('/')
  }

  return (
    <Screen
      background="var(--blue)"
      title="Step 4 of 4"
      back={lastPlant > 0 ? `/onboarding/plant/${lastPlant}` : '/onboarding/plants'}
    >
      <div className="reminders-head">
        <Heading first="Can Granny" second="nudge you?" padded={false} />
        <Scallop size={96} color="var(--yellow)" tilt={12}>
          <Icon name="bell" size={38} color="#151515" strokeWidth={1.8} />
        </Scallop>
      </div>
      <p className="reminders-intro">
        One notification when a task is due: water, sow, transplant or feed. Nothing more.
      </p>

      <div className="reminders-list">
        {demoReminderExamples.map((example) => (
          <div key={example.title} className="reminder">
            <div className="reminder-disc" style={{ background: example.frost ? 'var(--ink)' : example.color }}>
              {example.frost ? (
                <Icon name="frost" size={22} color="#ffffff" />
              ) : (
                <PlantIcon name={example.plantId} size={28} />
              )}
            </div>
            <div className="reminder-text">
              <strong>{example.title}</strong>
              <span>{example.text}</span>
            </div>
          </div>
        ))}
        <p className="reminders-note">Frost warnings always come through, even if you mute other reminders.</p>
      </div>

      <div className="screen-end">
        <button type="button" className="big-button" onClick={finish}>
          Allow notifications
        </button>
        <button type="button" className="text-button" onClick={finish}>
          Not now
        </button>
      </div>
    </Screen>
  )
}
