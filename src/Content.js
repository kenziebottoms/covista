import React, { useContext } from 'react'

import { CovidContext } from './CovidContext'

import { getStateInfo } from './CovidAPI'

export default function Content() {
  const { data, activeState, setActiveState } = useContext(CovidContext)

  const activateState = (abbr) =>
    getStateInfo(abbr.toLowerCase()).then((data) => setActiveState(data))

  return (
    <div id="content">
      {activeState ? (
        <table className="activeState">
          <tbody>
            <tr>
              <th colSpan="2">{activeState.state}</th>
            </tr>
            <tr>
              <td>Data Quality</td>
              <td>{activeState.dataQualityGrade}</td>
            </tr>
            <tr>
              <td>Current Hospitalizations</td>
              <td>{activeState.hospitalizedCurrently}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        data && (
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
                <tr
                  key={state.state}
                  id={state.state}
                  onClick={() => activateState(state.state)}
                >
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
        )
      )}
    </div>
  )
}
