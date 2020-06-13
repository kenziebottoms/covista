import React from 'react'

export default function Content({ data: { states } }) {
  return (
    <div id="content">
      {states && (
        <table>
          <thead>
            <th></th>
            <th>Cases</th>
            <th>Deaths</th>
            <th>Positive Tests</th>
            <th>Negative Tests</th>
            <th>Total Tests</th>
          </thead>
          {states.map((state) => (
            <tr key={state.fips} id="{state.fips}">
              <td>{state.state}</td>
              <td>{state.positiveCasesViral}</td>
              <td>{state.death}</td>
              <td>{state.positive}</td>
              <td>{state.negative}</td>
              <td>{state.totalTestsViral}</td>
            </tr>
          ))}
        </table>
      )}
    </div>
  )
}
