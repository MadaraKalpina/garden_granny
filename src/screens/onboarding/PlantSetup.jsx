import { useState } from 'react'
import { Navigate, useNavigate, useOutletContext, useParams } from 'react-router-dom'
import Screen from '../../components/Screen.jsx'
import Heading from '../../components/Heading.jsx'
import Icon from '../../components/Icon.jsx'
import PlantIcon from '../../components/PlantIcon.jsx'
import SowingSheet from './SowingSheet.jsx'
import { plants } from '../../data/plants.js'
import { stages, places } from '../../data/gardenOptions.js'
import './onboarding.css'

// One of these screens per picked plant: /onboarding/plant/1, /2, and so on.
export default function PlantSetup() {
  const { choices } = useOutletContext()
  const position = Number(useParams().number)
  const plantId = choices.plantIds[position - 1]

  // No such plant (for example after a page reload wiped the choices): go back and pick.
  if (!plantId) return <Navigate to="/onboarding/plants" replace />

  // The key makes React start this form fresh for each plant.
  return <PlantSetupForm key={plantId} plantId={plantId} position={position} />
}

function PlantSetupForm({ plantId, position }) {
  const { choices, setChoices } = useOutletContext()
  const navigate = useNavigate()
  const plant = plants.find((p) => p.id === plantId)
  const total = choices.plantIds.length
  const nextPlant = plants.find((p) => p.id === choices.plantIds[position])

  // Start from earlier answers if the gardener came back to this plant.
  const saved = choices.answers[plantId] || {}
  const [stage, setStage] = useState(saved.stage || null)
  const [place, setPlace] = useState(saved.place || null)
  const [sheetOpen, setSheetOpen] = useState(false)

  function saveAndContinue(sowing) {
    setChoices({
      ...choices,
      answers: { ...choices.answers, [plantId]: { stage, place, sowing } },
    })
    navigate(nextPlant ? `/onboarding/plant/${position + 1}` : '/onboarding/reminders')
  }

  function handleNext() {
    // Seeds still in the packet: ask how they will be sown before moving on.
    if (stage === 'packet') {
      setSheetOpen(true)
    } else {
      saveAndContinue(null)
    }
  }

  return (
    <Screen
      background="var(--yellow)"
      title="Step 3 of 4"
      back={position === 1 ? '/onboarding/plants' : `/onboarding/plant/${position - 1}`}
    >
      <div className="setup-intro">
        <span className="chip">
          <PlantIcon name={plant.id} size={22} />
          Plant {position} of {total} · {plant.name}
        </span>
        <Heading first="Tell us about" second={`your ${plant.sentenceName}`} size={36} padded={false} />
      </div>

      <div className="setup-question">
        <h2>1. How far along are they?</h2>
        <div className="option-grid" role="group" aria-label="Current stage">
          {stages.map((option) => (
            <button
              key={option.id}
              type="button"
              className="option-tile"
              aria-pressed={stage === option.id}
              onClick={() => setStage(option.id)}
            >
              <span className="option-disc" style={{ background: option.color }}>
                <PlantIcon name={option.id} size={34} />
              </span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="setup-question">
        <h2>2. Where do they grow?</h2>
        <div className="option-grid" role="group" aria-label="Where it grows">
          {places.map((option) => (
            <button
              key={option.id}
              type="button"
              className="option-tile is-place"
              aria-pressed={place === option.id}
              onClick={() => setPlace(option.id)}
            >
              <span className="option-disc">
                <Icon name={option.icon} size={22} color="#151515" />
              </span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="screen-end">
        <button type="button" className="big-button" disabled={!stage || !place} onClick={handleNext}>
          {nextPlant ? `Next plant: ${nextPlant.name}` : 'Finish plants'}
          <Icon name="arrow" strokeWidth={2} />
        </button>
      </div>

      {sheetOpen && (
        <SowingSheet
          plant={plant}
          place={place}
          startWith={saved.sowing}
          onConfirm={saveAndContinue}
          onClose={() => setSheetOpen(false)}
        />
      )}
    </Screen>
  )
}
