import React from 'react'
import { render } from '@testing-library/react'

import App from './App'
import Sidebar from './Sidebar'
import Content from './Content'

import { getCurrentInfo, getStateInfo } from './CovidAPI'
import { CovidContext } from './CovidContext'

test('renders child components', () => {
  const { container } = render(<App />)

  expect(container.querySelector('#sidebar')).toBeInTheDocument()
  expect(container.querySelector('#content')).toBeInTheDocument()
})

test('Sidebar renders list of states', async () => {
  let data = await getCurrentInfo()

  const { getByText } = render(
    <CovidContext.Provider value={{ data }}>
      <Sidebar />
    </CovidContext.Provider>,
  )

  expect(getByText('AK')).toBeInTheDocument()
  expect(getByText('TN')).toBeInTheDocument()
})

test('Content renders general table', async () => {
  let data = await getCurrentInfo()

  const { getByText } = render(
    <CovidContext.Provider value={{ data }}>
      <Content />
    </CovidContext.Provider>,
  )

  expect(getByText('Positive Tests')).toBeInTheDocument()
  expect(getByText('Negative Tests')).toBeInTheDocument()
})

test('Content renders detail view', async () => {
  let activeState = await getStateInfo('tn')

  const { getByText } = render(
    <CovidContext.Provider value={{ activeState }}>
      <Content />
    </CovidContext.Provider>,
  )

  expect(getByText('TN')).toBeInTheDocument()
  expect(getByText('Data Quality')).toBeInTheDocument()
})
