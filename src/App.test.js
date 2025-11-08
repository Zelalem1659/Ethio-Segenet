import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './components/Home';

test('renders site title from Home', () => {
  render(<Home />);
  const title = screen.getByText(/Ethio 360/i);
  expect(title).toBeInTheDocument();
});
