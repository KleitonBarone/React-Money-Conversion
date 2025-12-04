import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders currency converter title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Currency Converter/i);
  expect(titleElement).toBeInTheDocument();
});
