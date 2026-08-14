import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import './styles/globals.css'
import './components/Header.css'
import './components/SectionHead.css'
import './components/Photo.css'
import './components/Figures.css'
import './components/BodyGraph.css'
import './components/CenterDetail.css'
import './components/DesignSnapshot.css'
import './components/TechnicalDetails.css'
import './components/OpenCenters.css'
import './components/Footer.css'
import './sections/Intro.css'
import './sections/Map.css'
import './sections/HowYouWork.css'
import './sections/Decide.css'
import './sections/Profile.css'
import './sections/Talents.css'
import './sections/Relationships.css'
import './sections/Energy.css'
import './sections/Pause.css'
import './sections/Essence.css'
import './sections/FinalLetter.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
