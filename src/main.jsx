import { StrictMode } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Signup from "./signup.jsx"
import Home from "./Home.jsx"
import Login from "./Login.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
     </Routes>
    </HashRouter>
  </StrictMode>
)
