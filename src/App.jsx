import { useState } from 'react'
import MainHeader from './componenets/MainHeader'
import './scss/main.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainHeader />
  )
}

export default App
