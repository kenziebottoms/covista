import React from 'react'
import { render } from '@testing-library/react'

import App from './App'
import Content from './Content'

import { getCurrentInfo } from './CovidAPI'
import { CovidContext } from './CovidContext'

test('renders child components', () => {
  const { container } = render(<App />)

  expect(container.querySelector('#sidebar')).toBeInTheDocument()
  expect(container.querySelector('#content')).toBeInTheDocument()
})

test('renders general table', async () => {
  let data = await getCurrentInfo()
  const { getByText } = render(
    <CovidContext.Provider value={{ data }}>
      <Content />
    </CovidContext.Provider>,
  )

  expect(getByText('Positive Tests')).toBeInTheDocument()
})
