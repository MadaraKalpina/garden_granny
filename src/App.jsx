import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import BottomBar from './components/BottomBar.jsx'
import Today from './screens/Today.jsx'
import MyGarden from './screens/MyGarden.jsx'
import Weather from './screens/Weather.jsx'

// HashRouter puts the screen name after a # in the address (…/#/weather).
// GitHub Pages can't handle normal addresses on reload; this way it can.
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Today />} />
        <Route path="/garden" element={<MyGarden />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BottomBar />
    </HashRouter>
  )
}
