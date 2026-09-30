import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Screen from '../components/Screen.jsx'
import Heading from '../components/Heading.jsx'
import Icon from '../components/Icon.jsx'
import PlantIcon from '../components/PlantIcon.jsx'
import Scallop from '../components/Scallop.jsx'
import ConfirmMilestone from './ConfirmMilestone.jsx'
import { demoPlants, demoPlantDetails } from '../data/demoGarden.js'
import './PlantPage.css'

export default function PlantPage() {
  const { plantId } = useParams()
  const [confirmOpen, setConfirmOpen] = useState(false)

  const plant = demoPlants.find((p) => p.id === plantId)
  if (!plant) return <Navigate to="/garden" replace />
  const details = demoPlantDetails[plantId]

  return (
    <Screen
      background="var(--pink)"
      title="Plant details"
      back="/garden"
      action={
        // Adding notes comes in step 4, when things get saved.
        <button type="button" className="round-button" aria-label="Add note">
          <Icon name="plus" />
        </button>
      }
    >
      <div className="plant-head">
        <div className="plant-head-text">
          <Heading first={plant.name} second={plant.subtitle} size={38} padded={false} />
          <span className="chip">{plant.place}</span>
        </div>
        <div className="plant-head-disc">
          <PlantIcon name={plant.id} size={64} />
        </div>
      </div>

      {details ? (
        <>
          <div className="now-next">
            <div className="now-next-col">
              <span className="now-next-label">Now</span>
              <div className="now-next-row">
                <Scallop size={52} color="var(--magenta)" lobes={10} depth={0.3}>
                  <PlantIcon name={details.now.stage} size={30} />
                </Scallop>
                <div className="now-next-text">
                  <strong>{details.now.label}</strong>
                  <span>{details.now.when}</span>
                </div>
              </div>
            </div>
            <div className="now-next-col">
              <span className="now-next-label">Next</span>
              <div className="now-next-row">
                <div className="now-next-disc">
                  <PlantIcon name={details.next.stage} size={30} />
                </div>
                <div className="now-next-text">
                  <strong>{details.next.label}</strong>
                  <span>{details.next.when}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="expect-card">
            <p>
              <strong>Expect</strong> {details.expect}
            </p>
            <p>
              <strong>If</strong> {details.ifNot}
            </p>
            <p className="expect-look-for">{details.lookFor}</p>
            <button type="button" className="big-button" onClick={() => setConfirmOpen(true)}>
              It happened!
              <Icon name="arrow" strokeWidth={2} />
            </button>
          </div>

          <section className="timeline">
            <h2>Timeline</h2>
            {details.timeline.map((entry, i) => (
              <TimelineEntry key={entry.stage} entry={entry} isLast={i === details.timeline.length - 1} />
            ))}
          </section>
        </>
      ) : (
        <div className="expect-card">
          <p>
            <strong>Coming later.</strong> What to expect for {plant.name.toLowerCase()} arrives with the plant
            knowledge base.
          </p>
        </div>
      )}

      <div className="plant-died">
        {/* Does nothing yet. Removing a plant and the goodbye animation come in step 4. */}
        <button type="button" className="plant-died-button">
          <Icon name="leaf" size={18} />
          My plant died
        </button>
        <p>It happens to every gardener. Life moves on.</p>
      </div>

      {confirmOpen && (
        <ConfirmMilestone
          stage={details.next.stage}
          confirm={details.confirm}
          // Both answers just close the sheet for now. Moving to the next stage comes in step 5.
          onYes={() => setConfirmOpen(false)}
          onNo={() => setConfirmOpen(false)}
        />
      )}
    </Screen>
  )
}

function TimelineEntry({ entry, isLast }) {
  const [notesOpen, setNotesOpen] = useState(false)
  const noteCount = entry.notes.length
  const notesId = `${entry.stage}-notes`

  return (
    <div className="timeline-entry">
      <div className="timeline-rail">
        {entry.status === 'done' && (
          <div className="timeline-dot is-done">
            <Icon name="check" color="#ffffff" strokeWidth={2.4} />
          </div>
        )}
        {entry.status === 'now' && (
          <Scallop size={52} color="var(--magenta)" lobes={10} depth={0.3}>
            <PlantIcon name={entry.stage} size={30} />
          </Scallop>
        )}
        {entry.status === 'later' && (
          <div className="timeline-dot is-later">
            <PlantIcon name={entry.stage} size={28} />
          </div>
        )}
        {!isLast && <div className={entry.status === 'done' ? 'timeline-line is-done' : 'timeline-line'} />}
      </div>

      <div className={entry.status === 'later' ? 'timeline-body is-later' : 'timeline-body'}>
        <div className="timeline-title">
          <span>{entry.label}</span>
          {entry.status === 'now' && <span className="timeline-now">Now</span>}
        </div>
        <span className="timeline-when">{entry.when}</span>

        {noteCount > 0 && (
          <>
            <button
              type="button"
              className="notes-toggle"
              aria-expanded={notesOpen}
              aria-controls={notesId}
              onClick={() => setNotesOpen(!notesOpen)}
            >
              <Icon name="note" size={18} />
              <span>{notesOpen ? 'Hide notes' : `${noteCount} ${noteCount === 1 ? 'note' : 'notes'}`}</span>
              <span className={notesOpen ? 'notes-chevron is-open' : 'notes-chevron'}>
                <Icon name="chevronDown" size={16} strokeWidth={2.4} />
              </span>
            </button>
            {notesOpen && (
              <div id={notesId} className="notes">
                {entry.notes.map((note) => (
                  <div key={note.date} className="note">
                    <span className="note-date">{note.date}</span>
                    <p>{note.text}</p>
                  </div>
                ))}
                {/* Does nothing yet. Adding notes comes in step 4. */}
                <button type="button" className="note-add">
                  <Icon name="plus" size={18} />
                  Add note
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
