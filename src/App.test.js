import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders child components', () => {
  const { container } = render(<App />)

  expect(container.querySelector('#sidebar')).toBeInTheDocument()
  expect(container.querySelector('#content')).toBeInTheDocument()
})
