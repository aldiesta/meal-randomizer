// eslint-disable no-undef */
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

// eslint-disable-next-line no-undef
describe.only('App Component', () => {
  test('renders the TopBar and MainBody components', () => {
  render(<App />)
    
    const topBarElement = screen.getByTestId('top-bar')
    expect(topBarElement).toBeInTheDocument()

    const mainBodyElement = screen.getByTestId('main-body')
    expect(mainBodyElement).toBeInTheDocument()
  })
})

// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import TopBar from '../components/TopBar/TopBar';

// test('renders TopBar component', () => {
//   render(<TopBar />);
//   const topBarElement = screen.getByTestId('top-bar');
//   expect(topBarElement).toBeInTheDocument();
// });