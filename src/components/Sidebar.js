import React, { useContext } from 'react'

import { CovidContext } from '../CovidContext'

export default function Sidebar() {
  const { data } = useContext(CovidContext)
  return (
    <div id="sidebar">
      {data && data.map((state) => <div key={state.state}>{state.state}</div>)}
    </div>
  )
}
