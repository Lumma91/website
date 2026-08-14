import { useMemo } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './sections/Intro'
import Design from './sections/Design'
import HowYouWork from './sections/HowYouWork'
import Profile from './sections/Profile'
import Talents from './sections/Talents'
import Relationships from './sections/Relationships'
import Energy from './sections/Energy'
import Pause from './sections/Pause'
import Essence from './sections/Essence'
import FinalLetter from './sections/FinalLetter'

import { sections } from './data/humanDesign'
import { useScrollState } from './hooks/useScrollState'

export default function App() {
  const ids = useMemo(() => sections.map((section) => section.id), [])
  const { activeId, progress, scrolled } = useScrollState(ids)

  return (
    <>
      <a className="skip-link" href="#inicio">
        Ir al contenido
      </a>

      <Header activeId={activeId} progress={progress} scrolled={scrolled} />

      <main id="main">
        <Intro />
        <Design />
        <HowYouWork />
        <Profile />
        <Talents />
        <Relationships />
        <Energy />
        <Pause />
        <Essence />
        <FinalLetter />
      </main>

      <Footer />
    </>
  )
}
