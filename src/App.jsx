import { useState } from 'react'
import MainHeader from './componenets/MainHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainHeader />
  )
}

export default App
