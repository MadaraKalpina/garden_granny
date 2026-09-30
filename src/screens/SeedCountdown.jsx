import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Screen from '../components/Screen.jsx'
import Heading from '../components/Heading.jsx'
import PlantIcon from '../components/PlantIcon.jsx'
import Scallop from '../components/Scallop.jsx'
import { demoPlants, demoSeedPlans } from '../data/demoGarden.js'
import './SeedCountdown.css'

// Info cards take turns with these colours, as in the design.
const cardColors = ['var(--yellow)', 'var(--sage)']

export default function SeedCountdown() {
  const { plantId } = useParams()
  // 'direct' = straight in the ground, 'indoor' = start indoors first.
  // The choice isn't saved yet, so it resets when you leave the screen.
  const [method, setMethod] = useState('direct')

  const plant = demoPlants.find((p) => p.id === plantId)
  const plans = demoSeedPlans[plantId]
  if (!plant || !plans) return <Navigate to="/garden" replace />

  const plan = plans[method]

  return (
    <Screen background="var(--cream)" title="Plant details" back="/garden">
      <div className="plant-head">
        <div className="plant-head-text">
          <Heading first={plant.name} second={plant.subtitle} size={38} padded={false} />
          <span className="chip">{plant.place}</span>
        </div>
        <div className="plant-head-disc" style={{ background: 'var(--yellow)' }}>
          <PlantIcon name={plant.id} size={60} />
        </div>
      </div>

      <div className="sow-method">
        <h2>{plans.question}</h2>
        <div className="segmented" role="group" aria-label="Sowing method">
          <button type="button" aria-pressed={method === 'direct'} onClick={() => setMethod('direct')}>
            In the ground
          </button>
          <button type="button" aria-pressed={method === 'indoor'} onClick={() => setMethod('indoor')}>
            Indoors first
          </button>
        </div>
      </div>

      <div className="countdown">
        <Scallop size={230} color={method === 'direct' ? 'var(--blue)' : 'var(--pink)'} lobes={14} depth={0.14}>
          <span className={plan.big.length > 2 ? 'countdown-big is-word' : 'countdown-big'}>{plan.big}</span>
          <span className="countdown-line">{plan.line}</span>
          <span className="countdown-date">{plan.date}</span>
        </Scallop>
      </div>

      {method === 'direct' &&
        plan.cards.map((card, i) => (
          <div key={card.title} className="info-card" style={{ background: cardColors[i % cardColors.length] }}>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </div>
        ))}

      {method === 'indoor' && (
        <>
          <div className="sow-steps">
            {plan.steps.map((step, i) => (
              <div key={step.title} className="sow-step">
                <div className="sow-step-rail">
                  <div className="sow-step-number">{i + 1}</div>
                  {i < plan.steps.length - 1 && <div className="sow-step-line" />}
                </div>
                <div className="sow-step-body">
                  <div className="sow-step-title">
                    <span>{step.title}</span>
                    <span className="place muted">{step.when}</span>
                  </div>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="info-card" style={{ background: 'var(--sage)' }}>
            <h2>{plan.why.title}</h2>
            <p>{plan.why.text}</p>
          </div>
        </>
      )}

      <div className="screen-end">
        {/* Goes to Today, as in the design. Really marking them as sown comes in step 5. */}
        <Link to="/" className="text-button">
          I already sowed them
        </Link>
      </div>
    </Screen>
  )
}
