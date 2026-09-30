import { useState } from 'react'
import { Outlet } from 'react-router-dom'

// Holds the answers while someone walks through the setup steps, and hands
// them to whichever step is on screen (each step reads them with
// useOutletContext). Nothing is saved to the phone yet; that is step 4.
//
// choices looks like:
//   cityId   – 'praha'
//   plantIds – ['tomatoes', 'pumpkin']
//   answers  – { tomatoes: { stage: 'seedling', place: 'open', sowing: null } }
export default function Onboarding({ onFinish }) {
  const [choices, setChoices] = useState({ cityId: null, plantIds: [], answers: {} })

  return <Outlet context={{ choices, setChoices, onFinish }} />
}
