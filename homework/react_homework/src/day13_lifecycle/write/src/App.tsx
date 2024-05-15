import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './components/Post/index.tsx'
import Counter from './components/Counter/index.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Post/>
      <Counter/>
    </>
  )
}

export default App
