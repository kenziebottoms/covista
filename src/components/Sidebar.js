import React, { useContext } from 'react'

import { CovidContext } from '../CovidContext'

import { getStateInfo } from '../CovidAPI'

export default function Sidebar() {
  const { data, setActiveState } = useContext(CovidContext)

  const activateState = (fips) =>
    getStateInfo(fips.toLowerCase()).then((data) => setActiveState(data))

  return (
    <div id="sidebar">
      {data &&
        data.map((state) => (
          <div onClick={() => activateState(state.state)} key={state.state}>
            {state.state}
          </div>
        ))}
    </div>
  )
}
