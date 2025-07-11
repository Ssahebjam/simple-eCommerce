import { useState } from 'react'
import MainHeader from './componenets/MainHeader'
import './scss/main.scss'
import HeroSection from './componenets/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainHeader />
      <HeroSection />
    </>
  )
}

export default App
