import { Link } from 'react-router-dom'
import Screen from '../components/Screen.jsx'
import Heading from '../components/Heading.jsx'
import Icon from '../components/Icon.jsx'
import { demoToday, demoTasks } from '../data/demoGarden.js'
import './Today.css'

// Which icon and disc colour each kind of task gets.
const taskLooks = {
  water: { icon: 'drop', color: 'var(--blue)' },
  transplant: { icon: 'pot', color: 'var(--peach)' },
}

export default function Today() {
  const taskCount = demoTasks.length

  return (
    <Screen
      background="var(--yellow)"
      title="Today"
      hasBar
      action={
        // TODO: no design yet for what the bell opens.
        <button type="button" className="round-button" aria-label="Notifications">
          <Icon name="bell" />
        </button>
      }
    >
      <Heading first={demoToday.weekday} second={`${demoToday.date} in ${demoToday.city}`} />

      <Link to="/weather" className="today-weather">
        <div className="today-chips">
          <span className="chip chip-dark">
            <Icon name={demoToday.now.icon} size={18} />
            {demoToday.now.label}
          </span>
          <span className="chip">
            <Icon name={demoToday.tomorrow.icon} size={18} />
            {demoToday.tomorrow.label}
          </span>
        </div>
        <p className="today-note">{demoToday.wateringNote}</p>
      </Link>

      <section className="tasks">
        <div className="tasks-head">
          <h2>To do today</h2>
          <span>
            {taskCount} {taskCount === 1 ? 'task' : 'tasks'}
          </span>
        </div>
        {demoTasks.map((task) => {
          const look = taskLooks[task.type]
          return (
            <div key={task.id} className="task">
              <div className="task-disc" style={{ background: look.color }}>
                <Icon name={look.icon} />
              </div>
              <div className="task-text">
                <div className="task-title">{task.title}</div>
                <div className="task-detail">{task.detail}</div>
              </div>
              {/* Done does nothing yet. Real tasks come in step 6. */}
              <button type="button" className="pill-button">
                Done
              </button>
            </div>
          )
        })}
      </section>
    </Screen>
  )
}
