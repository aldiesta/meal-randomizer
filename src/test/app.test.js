import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

// eslint-disable-next-line no-undef
describe('App Component', () => {
  test('renders the TopBar and MainBody components', () => {
    render(<App />)
    
    // Assuming TopBar has some text or element you can select
    const topBarElement = screen.getByTestId('top-bar')
    expect(topBarElement).toBeInTheDocument()

    // Assuming MainBody has some text or element you can select
    const mainBodyElement = screen.getByTestId('main-body')
    expect(mainBodyElement).toBeInTheDocument()
  })
})