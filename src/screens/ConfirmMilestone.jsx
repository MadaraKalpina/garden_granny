import Heading from '../components/Heading.jsx'
import PlantIcon from '../components/PlantIcon.jsx'
import Scallop from '../components/Scallop.jsx'

// The sheet that asks "has it really happened?" after tapping "It happened!".
// Tapping the dark area outside the sheet counts as "not yet".
export default function ConfirmMilestone({ stage, confirm, onYes, onNo }) {
  return (
    <div className="sheet-backdrop" onClick={onNo}>
      <div
        className="sheet"
        role="dialog"
        aria-modal="true"
        aria-label={`${confirm.first} ${confirm.second}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sheet-handle" />
        <Scallop size={150} color="var(--yellow)" tilt={-8}>
          <PlantIcon name={stage} size={90} />
        </Scallop>
        <Heading first={confirm.first} second={confirm.second} size={30} padded={false} />
        <p className="sheet-text">{confirm.text}</p>
        <div className="sheet-buttons">
          <button type="button" className="big-button" onClick={onYes}>
            {confirm.yes}
          </button>
          <button type="button" className="text-button" onClick={onNo}>
            {confirm.no}
          </button>
        </div>
      </div>
    </div>
  )
}
