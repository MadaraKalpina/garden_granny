// The fixed choices a gardener picks from during setup.

// Growth stages, in order. `color` is the disc behind the little drawing.
export const stages = [
  { id: 'packet', label: 'In the packet', color: 'var(--lilac)' },
  { id: 'sown', label: 'Sown', color: 'var(--blue)' },
  { id: 'sprout', label: 'Sprout', color: 'var(--sage)' },
  { id: 'seedling', label: 'Seedling', color: 'var(--sage)' },
  { id: 'flowering', label: 'Flowering', color: 'var(--yellow)' },
  { id: 'fruiting', label: 'Fruiting', color: 'var(--peach)' },
]

// Where a plant grows. This decides how rain and frost are handled later.
export const places = [
  { id: 'covered', label: 'Covered balcony', icon: 'roof' },
  { id: 'open', label: 'Open balcony', icon: 'sun' },
  { id: 'plot', label: 'Garden plot', icon: 'spade' },
]

// How seeds still in the packet will be sown.
export const sowingMethods = [
  { id: 'direct', label: 'Straight in the ground', icon: 'spade' },
  { id: 'indoor', label: 'Start indoors first', icon: 'home' },
]
