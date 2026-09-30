// Small line icons, drawn the same way as in the designs.
const shapes = {
  bell: (
    <>
      <path d="M6 16 V11 A6 6 0 0 1 18 11 V16 L20 18 H4 Z" />
      <path d="M10 21 H14" />
    </>
  ),
  cloud: <path d="M7 18 H17 A4 4 0 0 0 17 10 A6 6 0 0 0 5.5 11.5 A3.5 3.5 0 0 0 7 18 Z" />,
  rain: (
    <>
      <path d="M7 14 H17 A4 4 0 0 0 17 6 A6 6 0 0 0 5.5 7.5 A3.5 3.5 0 0 0 7 14 Z" />
      <path d="M8 17 L7 20 M12 17 L11 20 M16 17 L15 20" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2 V4 M12 20 V22 M2 12 H4 M20 12 H22 M4.9 4.9 L6.3 6.3 M17.7 17.7 L19.1 19.1 M4.9 19.1 L6.3 17.7 M17.7 6.3 L19.1 4.9" />
    </>
  ),
  frost: <path d="M12 2 V22 M3.3 7 L20.7 17 M3.3 17 L20.7 7 M9 4 L12 6 L15 4 M9 20 L12 18 L15 20" />,
  drop: <path d="M12 3 C8 9 6 12 6 15 A6 6 0 0 0 18 15 C18 12 16 9 12 3 Z" />,
  pot: (
    <>
      <path d="M5 10 H19 L17 20 H7 Z" />
      <path d="M12 10 V4 M12 7 C9 7 8 5 8 4 M12 6 C15 6 16 4 16 3" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19 C5 10 11 5 20 4 C20 13 15 19 5 19 Z" />
      <path d="M5 19 L13 11" />
    </>
  ),
  home: (
    <>
      <path d="M4 11 L12 4 L20 11 V20 H4 Z" />
      <path d="M10 20 V14 H14 V20" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21 C12 21 5 14 5 9 A7 7 0 0 1 19 9 C19 14 12 21 12 21 Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  chevron: <path d="M9 5 L16 12 L9 19" />,
  chevronDown: <path d="M6 9 L12 15 L18 9" />,
  back: <path d="M15 5 L8 12 L15 19" />,
  arrow: <path d="M5 12 H19 M13 6 L19 12 L13 18" />,
  check: <path d="M5 12 L10 17 L19 7" />,
  note: (
    <>
      <path d="M6 3 H15 L19 7 V21 H6 Z" />
      <path d="M9 11 H16 M9 15 H14" />
    </>
  ),
  plus: <path d="M12 5 V19 M5 12 H19" />,
}

export default function Icon({ name, size = 20, color = 'currentColor', strokeWidth = 1.9 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {shapes[name]}
    </svg>
  )
}
