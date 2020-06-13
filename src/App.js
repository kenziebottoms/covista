import React, { useState, useEffect } from 'react'

import './style.scss'

import { getStates } from './CovidAPI'

import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {
  const [activeState, setActiveState] = useState(0)
  const [data, setData] = useState({})

  useEffect(() => {
    getStates().then((data) => setData({ states: data }))
  }, [])

  return (
    <div className="App">
      <Sidebar activeState={activeState} />
      <Content activeState={activeState} data={data} />
    </div>
  )
}

export default App
