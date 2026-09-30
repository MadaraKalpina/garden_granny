// Big screen heading: bold first line, light italic second line.
//   size   – font size in px (the designs use 30 to 48)
//   padded – adds the usual space around it; turn off when it sits inside a row
export default function Heading({ first, second, size = 40, padded = true }) {
  return (
    <h1 className={padded ? 'heading heading-padded' : 'heading'} style={{ fontSize: size }}>
      {first}
      <br />
      <span className="heading-second">{second}</span>
    </h1>
  )
}
