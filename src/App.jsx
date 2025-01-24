import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Template/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <div>
        <h1>Project:- React-Git</h1>
      </div>
    </>
  )
}

export default App
