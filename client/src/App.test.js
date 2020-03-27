import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders input label', () => {
  const { getByText } = render(<App />);
  const inputElement = getByText(/Enter your index/i);
  expect(inputElement).toBeInTheDocument();
});
