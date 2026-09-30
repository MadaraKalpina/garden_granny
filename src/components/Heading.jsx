// Big screen heading: bold first line, light italic second line.
export default function Heading({ first, second }) {
  return (
    <h1 className="heading">
      {first}
      <br />
      <span className="heading-second">{second}</span>
    </h1>
  )
}
