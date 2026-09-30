// MADE-UP DATA for building the screens. It copies the example garden in
// docs/gg_Main flows.html (Praha, Wednesday 14 May). None of it is real plant
// advice or real weather. Later steps replace it with the knowledge base,
// the saved garden and Open-Meteo.

export const demoToday = {
  weekday: 'Wednesday',
  date: '14 May',
  city: 'Praha',
  now: { icon: 'cloud', label: '14 °C Cloudy' },
  tomorrow: { icon: 'rain', label: 'Rain tomorrow · 6 mm' },
  wateringNote: 'No watering for the tomatoes and radishes tomorrow. The rain will do it.',
}

export const demoTasks = [
  {
    id: 'water-basil',
    type: 'water',
    title: 'Water the basil',
    detail: 'Covered balcony, so no rain reaches it',
  },
  {
    id: 'repot-tomatoes',
    type: 'transplant',
    title: 'Move tomatoes to bigger pots',
    detail: 'Roots poking out? Time for a 10 L pot.',
  },
]

export const demoPlants = [
  {
    id: 'tomatoes',
    name: 'Tomatoes',
    place: 'Open balcony',
    stage: 'seedling',
    stageLabel: 'Seedling',
    next: 'Flowering in about 3 weeks',
  },
  {
    id: 'basil',
    name: 'Basil',
    place: 'Covered balcony',
    stage: 'seedling',
    stageLabel: 'Seedling',
    next: 'Water today',
  },
  {
    id: 'radish',
    name: 'Radish',
    place: 'Garden plot',
    stage: 'sprout',
    stageLabel: 'Sprout',
    next: 'Seedling in about 1 week',
  },
  {
    id: 'pumpkin',
    name: 'Pumpkin',
    place: 'Garden plot',
    stage: 'packet',
    stageLabel: 'In the packet',
    next: 'Sow in 5 days',
  },
]

export const demoWeek = [
  { day: 'We', icon: 'cloud', temp: 14, rainMm: 0, isToday: true },
  { day: 'Th', icon: 'rain', temp: 12, rainMm: 6 },
  { day: 'Fr', icon: 'rain', temp: 15, rainMm: 2 },
  { day: 'Sa', icon: 'sun', temp: 18, rainMm: 0 },
  { day: 'Su', icon: 'sun', temp: 17, rainMm: 0 },
  { day: 'Mo', icon: 'frost', temp: -1, rainMm: 0, isFrost: true },
  { day: 'Tu', icon: 'sun', temp: 16, rainMm: 0 },
]

export const demoFrost = {
  title: 'Frost Sunday night',
  detail: 'See what to do before dark',
}

export const demoWateringChanges = [
  {
    plantId: 'basil',
    name: 'Basil',
    place: 'Covered balcony',
    text: 'Rain won’t reach it. Water Thursday and Saturday as usual.',
  },
  {
    plantId: 'tomatoes',
    name: 'Tomatoes',
    place: 'Open balcony',
    text: 'Skip Thursday. Rain does the job. Next watering Saturday.',
  },
  {
    plantId: 'radish',
    name: 'Radish',
    place: 'Garden plot',
    text: 'Skip Thursday and Friday. Water again Sunday if the soil is dry 2 cm down.',
  },
]
