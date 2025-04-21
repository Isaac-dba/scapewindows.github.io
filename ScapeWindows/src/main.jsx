import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Navbar from './header'
import FooterSW from './footer'
import BodySW from './body'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <BodySW />
    <FooterSW />
  </StrictMode>,
)
