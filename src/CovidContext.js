import React, { useState } from 'react'

export const CovidContext = React.createContext({
  data: null,
  setData: () => {},
  activeState: null,
  setActiveState: () => {},
})

export const CovidProvider = ({ children }) => {
  const [data, setData] = useState(null)
  const [activeState, setActiveState] = useState(null)

  return (
    <CovidContext.Provider
      value={{ data, setData, activeState, setActiveState }}
    >
      {children}
    </CovidContext.Provider>
  )
}
