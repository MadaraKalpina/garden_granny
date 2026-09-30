import { useState } from 'react'
import { HashRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import BottomBar from './components/BottomBar.jsx'
import Today from './screens/Today.jsx'
import MyGarden from './screens/MyGarden.jsx'
import Weather from './screens/Weather.jsx'
import PlantPage from './screens/PlantPage.jsx'
import SeedCountdown from './screens/SeedCountdown.jsx'
import FrostWarning from './screens/FrostWarning.jsx'
import Welcome from './screens/onboarding/Welcome.jsx'
import Onboarding from './screens/onboarding/Onboarding.jsx'
import ChooseCity from './screens/onboarding/ChooseCity.jsx'
import ChoosePlants from './screens/onboarding/ChoosePlants.jsx'
import PlantSetup from './screens/onboarding/PlantSetup.jsx'
import AllowReminders from './screens/onboarding/AllowReminders.jsx'

// The three main screens share the bottom bar. <Outlet /> is where the
// chosen one appears.
function WithBottomBar() {
  return (
    <>
      <Outlet />
      <BottomBar />
    </>
  )
}

// HashRouter puts the screen name after a # in the address (…/#/weather).
// GitHub Pages can't handle normal addresses on reload; this way it can.
export default function App() {
  // Has setup been finished since the app was opened? Nothing is saved yet,
  // so every fresh open starts at the welcome screen. Step 4 replaces this
  // with "is there a saved garden on this phone?".
  const [setupDone, setSetupDone] = useState(false)

  return (
    <HashRouter>
      <Routes>
        <Route element={<WithBottomBar />}>
          <Route path="/" element={setupDone ? <Today /> : <Navigate to="/welcome" replace />} />
          <Route path="/garden" element={<MyGarden />} />
          <Route path="/weather" element={<Weather />} />
        </Route>

        {/* These have a back button instead of the bottom bar, as in the designs. */}
        <Route path="/plant/:plantId" element={<PlantPage />} />
        <Route path="/seeds/:plantId" element={<SeedCountdown />} />
        <Route path="/frost" element={<FrostWarning />} />

        {/* First-time setup. The steps inside /onboarding share their answers. */}
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/onboarding" element={<Onboarding onFinish={() => setSetupDone(true)} />}>
          <Route path="city" element={<ChooseCity />} />
          <Route path="plants" element={<ChoosePlants />} />
          <Route path="plant/:number" element={<PlantSetup />} />
          <Route path="reminders" element={<AllowReminders />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}
