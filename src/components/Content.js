import React, { useContext } from 'react'

import { CovidContext } from '../CovidContext'

export default function Content() {
  const { data } = useContext(CovidContext)
  return (
    <div id="content">
      {data && (
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>Cases</th>
              <th>Deaths</th>
              <th>Positive Tests</th>
              <th>Negative Tests</th>
              <th>Total Tests</th>
            </tr>
            {data.map((state) => (
              <tr key={state.fips} id="{state.fips}">
                <td>{state.state}</td>
                <td>{state.positiveCasesViral}</td>
                <td>{state.death}</td>
                <td>{state.positive}</td>
                <td>{state.negative}</td>
                <td>{state.totalTestsViral}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
