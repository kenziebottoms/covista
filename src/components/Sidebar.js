import React, { useContext } from 'react'

import { CovidContext } from '../CovidContext'

import { getStateInfo } from '../CovidAPI'

export default function Sidebar() {
  const { data, activeState, setActiveState } = useContext(CovidContext)

  const activateState = (abbr) => {
    if (activeState && activeState.state === abbr) {
      setActiveState(null)
    } else {
      getStateInfo(abbr.toLowerCase()).then((data) => setActiveState(data))
    }
  }

  return (
    <div id="sidebar">
      {data &&
        data.map((state) => (
          <div
            className={
              activeState && state.state === activeState.state ? 'active' : ''
            }
            onClick={() => activateState(state.state)}
            key={state.state}
          >
            {state.state}
          </div>
        ))}
    </div>
  )
}
