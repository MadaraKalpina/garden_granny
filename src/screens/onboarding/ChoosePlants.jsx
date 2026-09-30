import { useNavigate, useOutletContext } from 'react-router-dom'
import Screen from '../../components/Screen.jsx'
import Heading from '../../components/Heading.jsx'
import Icon from '../../components/Icon.jsx'
import PlantIcon from '../../components/PlantIcon.jsx'
import { plants } from '../../data/plants.js'
import './onboarding.css'

export default function ChoosePlants() {
  const { choices, setChoices } = useOutletContext()
  const navigate = useNavigate()
  const count = choices.plantIds.length

  // Tap once to pick, again to unpick. The order always follows the list
  // above, no matter which plant was tapped first.
  function toggle(plantId) {
    const picked = choices.plantIds.includes(plantId)
    const plantIds = plants
      .map((plant) => plant.id)
      .filter((id) => (id === plantId ? !picked : choices.plantIds.includes(id)))
    setChoices({ ...choices, plantIds })
  }

  return (
    <Screen background="var(--cream)" title="Step 2 of 4" back="/onboarding/city">
      <div className="setup-intro">
        <Heading first="What are" second="you growing?" padded={false} />
        <p>Pick as many as you like. You can add more later.</p>
      </div>

      <div className="plant-grid">
        {plants.map((plant) => {
          const picked = choices.plantIds.includes(plant.id)
          return (
            <button
              key={plant.id}
              type="button"
              className="plant-tile"
              aria-pressed={picked}
              style={picked ? { background: plant.color } : undefined}
              onClick={() => toggle(plant.id)}
            >
              {picked && (
                <span className="check-disc plant-tile-check">
                  <Icon name="check" size={15} color="#ffffff" strokeWidth={2.6} />
                </span>
              )}
              <PlantIcon name={plant.id} size={46} />
              <span>{plant.name}</span>
            </button>
          )
        })}
      </div>

      <div className="screen-end">
        <button
          type="button"
          className="big-button"
          disabled={count === 0}
          onClick={() => navigate('/onboarding/plant/1')}
        >
          {count === 0 ? 'Pick a plant to continue' : `Continue with ${count} ${count === 1 ? 'plant' : 'plants'}`}
          {count > 0 && <Icon name="arrow" strokeWidth={2} />}
        </button>
      </div>
    </Screen>
  )
}
