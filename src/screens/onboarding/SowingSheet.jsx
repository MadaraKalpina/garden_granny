import { useState } from 'react'
import Heading from '../../components/Heading.jsx'
import Icon from '../../components/Icon.jsx'
import { sowingMethods } from '../../data/gardenOptions.js'
import { demoSowingHints } from '../../data/demoGarden.js'

// The pop-up for seeds still in the packet: straight in the ground, or
// started indoors first. It has to be answered before moving on.
export default function SowingSheet({ plant, place, startWith, onConfirm, onClose }) {
  const [method, setMethod] = useState(startWith || 'direct')

  // The designs say "in the plot". That only fits a garden plot, so balcony
  // plants get the same sentence without it.
  const inPlot = place === 'plot' ? ' in the plot' : ''
  const details = {
    direct: `Granny counts down to sowing day${inPlot}`,
    indoor: `Sow in pots now, plant out${inPlot} later`,
  }
  const hint = demoSowingHints[plant.id]?.[method]

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div
        className="sheet is-left"
        role="dialog"
        aria-modal="true"
        aria-label={`How will you sow your ${plant.sentenceName}?`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sheet-top">
          <span className="sheet-top-side" />
          <div className="sheet-handle" />
          <button type="button" className="round-button sheet-close" aria-label="Close" onClick={onClose}>
            <Icon name="close" size={18} />
          </button>
        </div>

        <Heading first="How will you" second={`sow your ${plant.sentenceName}?`} size={30} padded={false} />

        <div className="sow-options" role="group" aria-label="Sowing method">
          {sowingMethods.map((option) => (
            <button
              key={option.id}
              type="button"
              className="sow-option"
              aria-pressed={method === option.id}
              onClick={() => setMethod(option.id)}
            >
              <span className="sow-option-disc">
                <Icon name={option.icon} size={24} color="#151515" />
              </span>
              <span className="sow-option-text">
                <strong>{option.label}</strong>
                <span>{details[option.id]}</span>
              </span>
              <span className="sow-option-radio" />
            </button>
          ))}
        </div>

        {hint && <p className="sow-hint">{hint}</p>}

        <button type="button" className="big-button" onClick={() => onConfirm(method)}>
          Confirm
          <Icon name="arrow" strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}
