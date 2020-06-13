import React from 'react'

export default function Content({ data: { states } }) {
  return (
    <div id="content">
      {states &&
        states.map((state) => (
          <div key={state.fips} id="{state.fips}">
            {state.name}
          </div>
        ))}
    </div>
  )
}
