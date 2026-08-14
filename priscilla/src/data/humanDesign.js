/**
 * Datos del diseño de Priscilla.
 * El SVG del BodyGraph consume `centers` y `channels`; el copy vive aquí
 * para que el gráfico quede desacoplado del contenido.
 */

export const profile = {
  name: 'Priscilla Oliva Leal',
  labelEn: 'Projector · 3/5 · Splenic Authority',
  labelEs: 'Proyectora · Perfil 3/5 · Autoridad Esplénica',
  birthDate: '28 de diciembre de 1991',
  birthPlace: 'La Habana, Cuba',
  birthTime: '≈ 10:00 a. m.',
  note: 'Esta lectura está realizada con una hora de nacimiento aproximada, alrededor de las 10:00 a. m. Por ello, se centra principalmente en los aspectos más estables y relevantes del diseño.',
}

/** Centros del BodyGraph. `defined: true` = centro definido. */
export const centers = {
  head: {
    defined: false,
    name: 'Cabeza',
    title: 'De dónde vienen las preguntas',
    text: 'Puedes absorber inquietudes que ni siquiera son tuyas. No todas las preguntas que aparecen en tu cabeza necesitan una respuesta tuya.',
  },
  ajna: {
    defined: true,
    name: 'Ajna',
    title: 'Tu forma de organizar ideas',
    text: 'Tienes una manera relativamente consistente de construir perspectivas, ordenar información y encontrar lógica donde parece que no la hay.',
  },
  throat: {
    defined: true,
    name: 'Garganta',
    title: 'Tu manera de expresarte',
    text: 'Cuando tienes claridad, puedes convertir aquello que ves en palabras comprensibles. Tu voz suele funcionar mejor cuando ya existe reconocimiento.',
  },
  g: {
    defined: false,
    name: 'Centro G',
    title: 'Tu identidad puede ser flexible',
    text: 'Tu sentido de identidad y de dirección puede cambiar según el entorno y las personas. No es inestabilidad: es una forma más abierta de habitarte.',
  },
  ego: {
    defined: false,
    name: 'Ego / Corazón',
    title: 'No tienes nada que demostrar',
    text: 'Tu diseño sugiere que tu valor no depende de sostener promesas ni de probar cuánto puedes. Prometer menos suele cuidarte más.',
  },
  spleen: {
    defined: true,
    name: 'Bazo',
    title: 'Tu radar interno',
    text: 'Este es el centro desde el que funciona tu autoridad. Tu intuición suele aparecer rápido, silenciosa y en el momento presente.',
  },
  sacral: {
    defined: false,
    name: 'Sacral',
    title: 'No tienes una batería infinita',
    text: 'Puedes acceder a mucha energía prestada del entorno, pero no es tuya de forma sostenida. El descanso no es un premio: es parte del diseño.',
  },
  solarPlexus: {
    defined: false,
    name: 'Plexo Solar',
    title: 'Sensible al clima emocional',
    text: 'Puedes amplificar el estado emocional de quienes te rodean. A veces lo que sientes empezó en otra persona y solo está pasando por ti.',
  },
  root: {
    defined: true,
    name: 'Raíz',
    title: 'Tu relación con la presión',
    text: 'Puedes responder bien ante desafíos, pero que puedas manejar presión no significa que tengas que vivir permanentemente bajo ella.',
  },
}

/** Los dos canales definidos del diseño de Priscilla. */
export const channels = [
  {
    id: '18-58',
    gates: [18, 58],
    from: 'spleen',
    to: 'root',
    defined: true,
    title: 'Judgment',
    titleEs: 'El talento para mejorar',
    shortDescription: 'Ver cómo algo puede mejorar',
    text: 'Capacidad de identificar oportunidades de corrección y mejora. Detectas con facilidad dónde hay margen para que algo funcione mejor.',
  },
  {
    id: '17-62',
    gates: [17, 62],
    from: 'ajna',
    to: 'throat',
    defined: true,
    title: 'Acceptance',
    titleEs: 'Convertir patrones en claridad',
    shortDescription: 'Convertir patrones en claridad',
    text: 'Capacidad para organizar patrones, estructurar información y expresarla con claridad. Encuentras el orden y después las palabras.',
  },
]

/** Overview rápido bajo el gráfico. */
export const snapshot = [
  { label: 'Tipo', value: 'Proyectora' },
  { label: 'Estrategia', value: 'Esperar la invitación' },
  { label: 'Autoridad', value: 'Esplénica' },
  { label: 'Perfil', value: '3/5' },
  { label: 'Firma', value: 'Éxito' },
  { label: 'No-Ser', value: 'Amargura' },
]

/** Accordion "Ver detalles de mi diseño". */
export const technicalDetails = [
  {
    label: 'Tipo',
    value: 'Proyectora',
    note: 'Uno de los cinco tipos de Human Design. Diseño orientado a guiar, ver y comprender sistemas y personas, más que a ejecutar de forma sostenida.',
  },
  {
    label: 'Estrategia',
    value: 'Esperar la invitación',
    note: 'La forma de interactuar con el mundo que tu diseño sugiere: permitir que exista reconocimiento antes de ofrecer tu mirada.',
  },
  {
    label: 'Autoridad',
    value: 'Esplénica',
    note: 'El lugar interno desde donde tomas decisiones. En tu caso, una señal corporal e intuitiva, rápida y del momento presente.',
  },
  {
    label: 'Perfil',
    value: '3/5 · Mártir / Hereje',
    note: 'La forma en que aprendes y en que otros tienden a percibirte. Línea 3: aprender experimentando. Línea 5: convertir esa experiencia en soluciones prácticas.',
  },
  {
    label: 'Definición',
    value: 'Split Definition',
    note: 'Tus centros definidos forman dos grupos separados: Ajna–Garganta por un lado, Bazo–Raíz por otro. Ciertas personas pueden generar un puente temporal entre ambos.',
  },
  {
    label: 'Firma',
    value: 'Éxito',
    note: 'La sensación que suele aparecer cuando vives alineada con tu diseño.',
  },
  {
    label: 'Tema del No-Ser',
    value: 'Amargura',
    note: 'La señal de que quizá estás forzando, insistiendo o dando tu mirada donde todavía no hay reconocimiento.',
  },
  {
    label: 'Cruz de Encarnación',
    value: 'Right Angle Cross of Service · 52/58 | 17/18',
    note: 'Dentro de Human Design, una descripción del terreno general del diseño: observar, concentrarse, evaluar y mejorar.',
  },
  {
    label: 'Canales definidos',
    value: '18–58 Judgment · 17–62 Acceptance',
    note: 'Las dos conexiones estables entre centros. Sostienen buena parte de tus talentos: detectar mejoras y traducirlas en claridad.',
  },
  {
    label: 'Centros definidos',
    value: 'Ajna · Garganta · Bazo · Raíz',
    note: 'Áreas relativamente consistentes de tu energía.',
  },
  {
    label: 'Centros indefinidos',
    value: 'Cabeza · Centro G · Ego · Plexo Solar · Sacral',
    note: 'Áreas más receptivas al entorno: donde absorbes, amplificas y también donde puedes volverte muy sabia.',
  },
]

/** Sección 07 · centros definidos, en formato tarjeta compacta. */
export const definedCenters = ['ajna', 'throat', 'spleen', 'root']

/** Sección 07 · centros indefinidos, en formato accordion. */
export const openCenters = [
  {
    id: 'head',
    name: 'Cabeza',
    concept: 'No necesitas resolver todas las preguntas.',
    text: 'Puedes recoger inquietudes que vienen del entorno y sentir presión por encontrarles respuesta.',
    question: '“¿Esta pregunta es realmente mía?”',
  },
  {
    id: 'solarPlexus',
    name: 'Plexo Solar',
    concept: 'No toda emoción intensa empezó en ti.',
    text: 'Puedes ser especialmente sensible al clima emocional de otras personas y amplificarlo sin darte cuenta.',
    question: '“¿Esto que estoy sintiendo empezó en mí?”',
  },
  {
    id: 'sacral',
    name: 'Sacral',
    concept: 'No tienes una batería infinita.',
    text: 'Puedes acceder a mucha energía prestada, sobre todo rodeada de gente, y pasarte de largo sin notarlo.',
    question: '“¿Sigo aquí porque quiero o porque me arrastró el ritmo?”',
  },
  {
    id: 'ego',
    name: 'Ego / Corazón',
    concept: 'No tienes nada que demostrar.',
    text: 'Puede aparecer el impulso de probar tu valor con esfuerzo o con promesas grandes.',
    question: '“¿Estoy prometiendo esto desde mis ganas o desde la necesidad de probar algo?”',
  },
  {
    id: 'g',
    name: 'Centro G',
    concept: 'Tu identidad puede ser flexible.',
    text: 'Tu sentido de dirección puede cambiar según el lugar y las personas. Con quién y dónde estás importa mucho.',
    question: '“¿En qué lugares y con quién me siento más yo?”',
  },
]

/** Secciones para navegación + indicador de progreso. */
export const sections = [
  { id: 'inicio', nav: 'Inicio', index: '01' },
  { id: 'diseno', nav: 'Tu diseño', index: '02' },
  { id: 'como-funcionas', nav: 'Cómo funcionas', index: '03' },
  { id: 'como-aprendes', nav: 'Cómo aprendes', index: '04' },
  { id: 'talentos', nav: 'Talentos', index: '05' },
  { id: 'vinculos', nav: 'Vínculos', index: '06' },
  { id: 'energia', nav: 'Tu energía', index: '07' },
  { id: 'esencia', nav: 'Tu esencia', index: '08' },
  { id: 'para-ti', nav: 'Para ti', index: '—' },
]
