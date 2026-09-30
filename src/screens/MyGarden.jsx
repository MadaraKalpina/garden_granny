import Screen from '../components/Screen.jsx'
import Heading from '../components/Heading.jsx'
import Icon from '../components/Icon.jsx'
import PlantIcon from '../components/PlantIcon.jsx'
import { demoPlants } from '../data/demoGarden.js'
import './MyGarden.css'

// Cards take turns with these colours and tilts, as in the design.
const cardColors = ['var(--pink)', 'var(--blue)', 'var(--white)', 'var(--yellow)']
const cardTilts = [-1, 1, -0.5, 1]

export default function MyGarden() {
  const count = demoPlants.length

  return (
    <Screen background="var(--sage)" title="My garden">
      <Heading first="My garden" second={`${count} ${count === 1 ? 'plant' : 'plants'} growing`} />

      <div className="garden-list">
        {/* Cards become tappable in step 2, when the plant page exists. */}
        {demoPlants.map((plant, i) => (
          <div
            key={plant.id}
            className="garden-card"
            style={{
              background: cardColors[i % cardColors.length],
              transform: `rotate(${cardTilts[i % cardTilts.length]}deg)`,
            }}
          >
            <div className="garden-card-disc">
              <PlantIcon name={plant.id} />
            </div>
            <div className="garden-card-text">
              <div className="garden-card-name">
                <span>{plant.name}</span>
                <span className="place">{plant.place}</span>
              </div>
              <div className="garden-card-stage">
                <PlantIcon name={plant.stage} size={22} />
                <span>{plant.stageLabel}</span>
              </div>
              <span className="garden-card-next">{plant.next}</span>
            </div>
            <Icon name="chevron" />
          </div>
        ))}

        {/* Add a plant does nothing yet. It comes with onboarding (steps 3 and 4). */}
        <button type="button" className="garden-add">
          <span className="garden-add-disc">
            <Icon name="plus" size={18} color="#ffffff" strokeWidth={2.2} />
          </span>
          Add a plant
        </button>
      </div>
    </Screen>
  )
}
