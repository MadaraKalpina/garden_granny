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
    subtitle: 'on the balcony',
    stage: 'seedling',
    stageLabel: 'Seedling',
    next: 'Flowering in about 3 weeks',
  },
  {
    id: 'basil',
    name: 'Basil',
    place: 'Covered balcony',
    subtitle: 'on the balcony',
    stage: 'seedling',
    stageLabel: 'Seedling',
    next: 'Water today',
  },
  {
    id: 'radish',
    name: 'Radish',
    place: 'Garden plot',
    subtitle: 'in the plot',
    stage: 'sprout',
    stageLabel: 'Sprout',
    next: 'Seedling in about 1 week',
  },
  {
    id: 'pumpkin',
    name: 'Pumpkin',
    place: 'Garden plot',
    subtitle: 'still in the packet',
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

// What the plant page shows. The designs only have this for tomatoes, so the
// other plants show a "coming later" card until the knowledge base arrives.
export const demoPlantDetails = {
  tomatoes: {
    now: { stage: 'seedling', label: 'Seedling', when: 'since 12 Apr' },
    next: { stage: 'flowering', label: 'Flowering', when: 'in ~3 weeks' },
    expect: '4–6 proper leaves and a stem about 10–15 cm tall.',
    ifNot: 'the stem is long, thin and pale, it needs more light. Move it to your sunniest spot.',
    lookFor: 'Next, look for small yellow star-shaped flowers along the stem.',
    confirm: {
      first: 'Have your tomatoes',
      second: 'flowered yet?',
      text: 'Small yellow star-shaped flowers, usually in clusters along the stem. One open flower counts.',
      yes: 'Yes, they’re flowering',
      no: 'Not yet',
    },
    timeline: [
      { stage: 'sown', label: 'Sown', when: '20 Mar', status: 'done', notes: [] },
      { stage: 'sprout', label: 'Sprout', when: '28 Mar', status: 'done', notes: [] },
      {
        stage: 'seedling',
        label: 'Seedling',
        when: 'Since 12 Apr',
        status: 'now',
        notes: [
          { date: '10 May', text: 'Moved both pots to the sunny corner. Leaves look greener already.' },
          { date: '28 Apr', text: 'One seedling leaning. Turned the pot around.' },
        ],
      },
      { stage: 'flowering', label: 'Flowering', when: 'Expected 2–8 Jun', status: 'later', notes: [] },
      { stage: 'fruiting', label: 'Fruiting', when: 'Expected early July', status: 'later', notes: [] },
    ],
  },
}

// The two sowing plans on the seed countdown screen.
export const demoSeedPlans = {
  pumpkin: {
    question: 'How will you sow them?',
    direct: {
      big: '5',
      line: 'days to sowing',
      date: 'Monday 19 May',
      cards: [
        {
          title: 'Why wait?',
          text: 'Frost kills pumpkin seedlings. In Praha the last frosts usually end with the Ice Saints in mid-May.',
        },
        {
          title: 'On the day',
          text: 'Push 2–3 seeds 2 cm deep in one spot. Leave about 1 m between spots. Expect sprouts in 7–10 days.',
        },
      ],
    },
    indoor: {
      big: 'Today',
      line: 'sow indoors',
      date: 'Wednesday 14 May',
      steps: [
        {
          title: 'Sow indoors',
          when: 'Today',
          text: 'One seed per 10 cm pot, 2 cm deep. Keep it warm and on a sunny windowsill.',
        },
        {
          title: 'Get them used to outside',
          when: 'From 28 May',
          text: 'Put the pots outside during the day for a week, back in at night.',
        },
        {
          title: 'Plant out in the plot',
          when: 'Around 4 June',
          text: 'Once there are 2–3 proper leaves. Leave about 1 m between plants.',
        },
      ],
      why: {
        title: 'Why start indoors?',
        text: 'About 3 weeks head start, and young plants stay safe from late frosts and snails.',
      },
    },
  },
}

export const demoFrostWarning = {
  first: 'Frost',
  second: 'tonight',
  detail: 'Down to −1 °C around 4:00',
  intro: 'Frost can kill young plants overnight. A few minutes before dark is all it takes.',
  actions: [
    { plantId: 'tomatoes', name: 'Tomatoes', place: 'Open balcony', text: 'Bring the pots inside, or cover them.' },
    { plantId: 'basil', name: 'Basil', place: 'Covered balcony', text: 'Bring the pot inside. Basil hates the cold.' },
    { plantId: 'radish', name: 'Radish', place: 'Garden plot', text: 'Cover the bed with fleece or an old sheet.' },
  ],
  note: 'Pumpkin is still in the packet, so nothing to do there.',
}

// The yellow hint in the "how will you sow?" pop-up. The designs only have
// one for pumpkin; other plants show no hint until the knowledge base arrives.
export const demoSowingHints = {
  pumpkin: {
    direct: 'Pumpkins go in the plot after the last frost. In Praha that’s from about 19 May.',
    indoor: 'Sow indoors from mid-April. Plant out in the plot once frosts are over.',
  },
}

// Example reminders shown on the "Can Granny nudge you?" screen.
export const demoReminderExamples = [
  {
    plantId: 'pumpkin',
    color: 'var(--yellow)',
    title: 'Time to sow the pumpkin',
    text: 'Frosts are over. Seeds go in the plot today',
  },
  {
    plantId: 'tomatoes',
    color: 'var(--peach)',
    title: 'Move tomatoes to bigger pots',
    text: 'Roots are poking out the bottom',
  },
  {
    plantId: 'basil',
    color: 'var(--sage)',
    title: 'Water the basil',
    text: 'Dry week ahead on your covered balcony',
  },
  {
    frost: true,
    title: 'Frost tonight in Praha',
    text: 'Cover the radishes before dark',
  },
]
