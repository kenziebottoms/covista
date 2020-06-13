import React, { useState } from 'react'

export const CovidContext = React.createContext({
  data: [],
  setData: () => {},
  activeState: {},
  setActiveState: () => {},
})

export const CovidProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [activeState, setActiveState] = useState({})

  return (
    <CovidContext.Provider
      value={{ data, setData, activeState, setActiveState }}
    >
      {children}
    </CovidContext.Provider>
  )
}
