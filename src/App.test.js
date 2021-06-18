import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NY Times Most Popular Articles link', () => {
  render(<App />);
  const linkElement = screen.getByText(/NY Times Most Popular Articles/i);
  expect(linkElement).toBeInTheDocument();
});
