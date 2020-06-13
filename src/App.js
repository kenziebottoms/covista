import React, { useContext, useEffect } from 'react'

import './style.scss'

import { getCurrentInfo } from './CovidAPI'

import Sidebar from './Sidebar'
import Content from './Content'

import { CovidContext } from './CovidContext'

export default function App() {
  const { setData } = useContext(CovidContext)

  useEffect(() => {
    getCurrentInfo().then((data) => setData(data))
  }, [setData])

  return (
    <div className="App">
      <Sidebar />
      <Content />
    </div>
  )
}
