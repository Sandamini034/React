import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Signup from "./signup.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Signup/>
  </StrictMode>
)
