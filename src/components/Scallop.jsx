// The wavy-edged blob from the designs, with anything you like in the middle.
//   lobes – how many bumps around the edge
//   depth – how deep the dips between bumps are (0 = a plain circle)
//   tilt  – rotation in degrees
export default function Scallop({ size, color, lobes = 12, depth = 0.18, tilt = 0, children }) {
  const half = size / 2
  const outer = half * 0.98
  const steps = lobes * 16
  const points = []
  for (let i = 0; i < steps; i++) {
    const angle = (i / steps) * Math.PI * 2
    const radius = outer * (1 - depth / 2 + (depth / 2) * Math.cos(angle * lobes))
    const x = half + radius * Math.cos(angle)
    const y = half + radius * Math.sin(angle)
    points.push(`${x.toFixed(1)} ${y.toFixed(1)}`)
  }

  return (
    <div className="scallop" style={{ width: size, height: size, transform: `rotate(${tilt}deg)` }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <path d={`M${points.join(' L')} Z`} fill={color} />
      </svg>
      <div className="scallop-content">{children}</div>
    </div>
  )
}
