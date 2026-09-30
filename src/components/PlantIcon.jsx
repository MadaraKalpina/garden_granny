// Little coloured drawings of plants and growth stages, copied from the designs.
const line = {
  stroke: '#151515',
  strokeWidth: 1.8,
  strokeLinejoin: 'round',
  strokeLinecap: 'round',
}

const drawings = {
  // Plants
  tomatoes: (
    <>
      <circle cx="24" cy="28" r="14" fill="#F06A4A" {...line} />
      <path d="M16 15 L24 20 L32 15 L29 22 H19 Z" fill="#6DB36F" {...line} />
    </>
  ),
  basil: (
    <>
      <path d="M24 42 C12 38 9 22 19 10 C26 18 28 32 24 42 Z" fill="#6DB36F" {...line} />
      <path d="M24 42 C35 36 39 24 34 12 C26 17 22 30 24 42 Z" fill="#A6D9A0" {...line} />
    </>
  ),
  radish: (
    <>
      <path d="M24 20 C17 14 15 8 19 3 C24 7 25 14 24 20 Z" fill="#6DB36F" {...line} />
      <path d="M24 20 C31 14 33 8 29 3 C24 7 23 14 24 20 Z" fill="#A6D9A0" {...line} />
      <circle cx="24" cy="30" r="10" fill="#E86FA6" {...line} />
      <path d="M24 40 V46" fill="none" {...line} />
    </>
  ),
  pumpkin: (
    <>
      <path d="M24 18 Q24 11 29 9" fill="none" stroke="#7A5230" strokeWidth="2.6" strokeLinecap="round" />
      <ellipse cx="24" cy="30" rx="17" ry="12" fill="#F79B45" {...line} />
      <path d="M24 18 V42 M15 20 Q10 30 15 40 M33 20 Q38 30 33 40" fill="none" {...line} />
    </>
  ),
  lettuce: (
    <>
      <path d="M8 30 Q8 13 24 11 Q40 13 40 30 Q37 39 24 39 Q11 39 8 30 Z" fill="#B9E08F" {...line} />
      <path d="M24 15 V35 M16 23 L24 29 M32 23 L24 29" fill="none" {...line} />
    </>
  ),
  strawberries: (
    <>
      <path d="M24 43 C11 35 9 24 14 18 C18 14 30 14 34 18 C39 24 37 35 24 43 Z" fill="#EE5A5A" {...line} />
      <path d="M15 17 L24 10 L33 17 L24 20 Z" fill="#6DB36F" {...line} />
      <circle cx="19" cy="26" r="1.3" fill="#F7D96B" />
      <circle cx="28" cy="25" r="1.3" fill="#F7D96B" />
      <circle cx="24" cy="32" r="1.3" fill="#F7D96B" />
    </>
  ),
  cucumber: (
    <>
      <rect x="6" y="17" width="36" height="15" rx="7.5" fill="#6DB36F" {...line} />
      <circle cx="15" cy="23" r="1.3" fill="#151515" />
      <circle cx="24" cy="26" r="1.3" fill="#151515" />
      <circle cx="33" cy="23" r="1.3" fill="#151515" />
    </>
  ),
  carrots: (
    <>
      <path d="M24 18 L19 5 M24 18 L24 3 M24 18 L29 5" fill="none" stroke="#4E9A5B" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M17 18 H31 L25 43 Q24 45 23 43 Z" fill="#F59A3E" {...line} />
    </>
  ),
  chard: (
    <>
      <path d="M24 42 C9 34 9 14 24 5 C39 14 39 34 24 42 Z" fill="#7CC47F" {...line} />
      <path d="M24 46 V12" fill="none" stroke="#D6415A" strokeWidth="2.6" strokeLinecap="round" />
    </>
  ),
  sage: (
    <>
      <ellipse cx="18" cy="24" rx="7" ry="14" transform="rotate(-18 18 24)" fill="#AFC6A5" {...line} />
      <ellipse cx="30" cy="24" rx="7" ry="14" transform="rotate(18 30 24)" fill="#CADCC1" {...line} />
    </>
  ),

  // Stages
  sown: (
    <>
      <path d="M6 40 Q24 32 42 40 V44 H6 Z" fill="#C9955B" {...line} />
      <ellipse cx="24" cy="24" rx="7" ry="10" fill="#E0B070" {...line} />
      <path d="M24 16 Q21 24 24 32" fill="none" {...line} />
    </>
  ),
  packet: (
    <>
      <rect x="10" y="6" width="28" height="36" rx="4" fill="#ffffff" {...line} />
      <path d="M10 14 H38" fill="none" {...line} />
      <ellipse cx="20" cy="28" rx="3" ry="4.5" fill="#E0B070" {...line} />
      <ellipse cx="29" cy="25" rx="3" ry="4.5" fill="#E0B070" {...line} />
      <ellipse cx="27" cy="34" rx="3" ry="4.5" fill="#E0B070" {...line} />
    </>
  ),
  sprout: (
    <>
      <path d="M6 40 Q24 32 42 40 V44 H6 Z" fill="#C9955B" {...line} />
      <path d="M24 38 V24" fill="none" {...line} />
      <ellipse cx="18" cy="22" rx="6.5" ry="4.5" fill="#A6D9A0" {...line} />
      <ellipse cx="30" cy="22" rx="6.5" ry="4.5" fill="#A6D9A0" {...line} />
    </>
  ),
  seedling: (
    <>
      <path d="M6 40 Q24 32 42 40 V44 H6 Z" fill="#C9955B" {...line} />
      <path d="M24 38 V10" fill="none" {...line} />
      <path d="M24 28 C16 30 11 25 12 20 C18 19 23 22 24 28 Z" fill="#6DB36F" {...line} />
      <path d="M24 22 C32 24 37 19 36 14 C30 13 25 16 24 22 Z" fill="#A6D9A0" {...line} />
      <path d="M24 12 C20 11 18 8 19 5 C22 5 24 8 24 12 Z" fill="#6DB36F" {...line} />
    </>
  ),
  flowering: (
    <>
      <path d="M6 40 Q24 32 42 40 V44 H6 Z" fill="#C9955B" {...line} />
      <path d="M24 38 V16" fill="none" {...line} />
      <path d="M24 30 C16 32 11 27 12 22 C18 21 23 24 24 30 Z" fill="#6DB36F" {...line} />
      <circle cx="24" cy="7" r="4" fill="#FFD166" {...line} />
      <circle cx="31" cy="12" r="4" fill="#FFD166" {...line} />
      <circle cx="17" cy="12" r="4" fill="#FFD166" {...line} />
      <circle cx="20" cy="19" r="4" fill="#FFD166" {...line} />
      <circle cx="28" cy="19" r="4" fill="#FFD166" {...line} />
      <circle cx="24" cy="13" r="3.5" fill="#F3A9CF" {...line} />
    </>
  ),
  fruiting: (
    <>
      <path d="M6 40 Q24 32 42 40 V44 H6 Z" fill="#C9955B" {...line} />
      <path d="M24 38 V8" fill="none" {...line} />
      <path d="M24 20 C32 22 37 17 36 12 C30 11 25 14 24 20 Z" fill="#6DB36F" {...line} />
      <circle cx="17" cy="27" r="6" fill="#F06A4A" {...line} />
      <circle cx="29" cy="30" r="5" fill="#A6D9A0" {...line} />
    </>
  ),
}

export default function PlantIcon({ name, size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      {drawings[name]}
    </svg>
  )
}
