import React, { useContext, useEffect } from 'react'

import './style.scss'

import { getCurrentInfo } from './CovidAPI'

import Sidebar from './components/Sidebar'
import Content from './components/Content'

import { CovidContext } from './CovidContext'

function App() {
  const { setData } = useContext(CovidContext)

  useEffect(() => {
    getCurrentInfo().then((data) => setData(data))
  }, [])

  return (
    <div className="App">
      <Sidebar />
      <Content />
    </div>
  )
}

export default App
