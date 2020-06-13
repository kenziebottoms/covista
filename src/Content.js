import React, { useContext } from 'react'

import { CovidContext } from './CovidContext'

import { getStateInfo } from './CovidAPI'

export default function Content() {
  const { data, activeState, setActiveState } = useContext(CovidContext)

  const activateState = (abbr) =>
    getStateInfo(abbr.toLowerCase()).then((data) => setActiveState(data))

  const detailView = ({ state, dataQualityGrade, hospitalizedCurrently }) => (
    <table className="activeState">
      <tbody>
        <tr>
          <th colSpan="2">{state}</th>
        </tr>
        <tr>
          <td>Data Quality</td>
          <td>{dataQualityGrade}</td>
        </tr>
        <tr>
          <td>Current Hospitalizations</td>
          <td>{hospitalizedCurrently}</td>
        </tr>
      </tbody>
    </table>
  )

  const masterView = (data) => (
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
        {data.map(
          ({
            state,
            positiveCasesViral,
            death,
            positive,
            negative,
            totalTestsViral,
          }) => (
            <tr key={state} id={state} onClick={() => activateState(state)}>
              <td>{state}</td>
              <td>{positiveCasesViral}</td>
              <td>{death}</td>
              <td>{positive}</td>
              <td>{negative}</td>
              <td>{totalTestsViral}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  )

  return (
    <div id="content">
      {activeState ? detailView(activeState) : data && masterView(data)}
    </div>
  )
}
