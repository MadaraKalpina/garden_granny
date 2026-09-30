import { HashRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import BottomBar from './components/BottomBar.jsx'
import Today from './screens/Today.jsx'
import MyGarden from './screens/MyGarden.jsx'
import Weather from './screens/Weather.jsx'
import PlantPage from './screens/PlantPage.jsx'
import SeedCountdown from './screens/SeedCountdown.jsx'
import FrostWarning from './screens/FrostWarning.jsx'

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
  return (
    <HashRouter>
      <Routes>
        <Route element={<WithBottomBar />}>
          <Route path="/" element={<Today />} />
          <Route path="/garden" element={<MyGarden />} />
          <Route path="/weather" element={<Weather />} />
        </Route>
        {/* These have a back button instead of the bottom bar, as in the designs. */}
        <Route path="/plant/:plantId" element={<PlantPage />} />
        <Route path="/seeds/:plantId" element={<SeedCountdown />} />
        <Route path="/frost" element={<FrostWarning />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}
