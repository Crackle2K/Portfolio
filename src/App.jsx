import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Boba from './components/Boba.jsx'
import Footer from './components/Footer.jsx'
import ToppingButton from './components/ToppingButton.jsx'

function App() {
  
  return (
    <>
      <h1>Boba Builder</h1>
      <Boba></Boba>
      <ToppingButton></ToppingButton>
      <Footer></Footer>
    </>
  )
}

export default App
