import { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import Screen from '../../components/Screen.jsx'
import Heading from '../../components/Heading.jsx'
import Icon from '../../components/Icon.jsx'
import { cities } from '../../data/cities.js'
import './onboarding.css'

// Lower-case and without accents, so typing "plzen" finds "Plzeň".
function plain(text) {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
}

export default function ChooseCity() {
  const { choices, setChoices } = useOutletContext()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const searching = search.trim() !== ''
  const shown = cities.filter((city) => plain(city.name).includes(plain(search.trim())))

  return (
    <Screen background="var(--yellow)" title="Step 1 of 4" back="/welcome">
      <div className="setup-intro">
        <Heading first="Where do" second="you garden?" padded={false} />
        <p>Your city’s weather sets watering and frost warnings.</p>
      </div>

      <div className="city-search">
        <label htmlFor="city">Search Czech cities</label>
        <div className="city-search-box">
          <Icon name="search" color="rgba(21, 21, 21, 0.72)" />
          <input
            id="city"
            type="text"
            placeholder="e.g. Brno"
            autoComplete="off"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>

      <div className="city-list">
        <div className="city-list-title">{searching ? 'Matching cities' : 'Popular cities'}</div>
        {shown.map((city) => {
          const picked = city.id === choices.cityId
          return (
            <button
              key={city.id}
              type="button"
              className="city-row"
              aria-pressed={picked}
              onClick={() => setChoices({ ...choices, cityId: city.id })}
            >
              {city.name}
              {picked ? (
                <span className="check-disc">
                  <Icon name="check" size={15} color="#ffffff" strokeWidth={2.6} />
                </span>
              ) : (
                <Icon name="chevron" size={18} color="rgba(21, 21, 21, 0.72)" />
              )}
            </button>
          )
        })}
        {shown.length === 0 && <p className="city-none">No match. Granny only knows these Czech cities for now.</p>}
      </div>

      <div className="screen-end">
        <button
          type="button"
          className="big-button"
          disabled={!choices.cityId}
          onClick={() => navigate('/onboarding/plants')}
        >
          Continue
          <Icon name="arrow" strokeWidth={2} />
        </button>
      </div>
    </Screen>
  )
}
