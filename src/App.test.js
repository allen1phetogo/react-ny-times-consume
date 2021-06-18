import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Times Archival link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Times Archival/i);
  expect(linkElement).toBeInTheDocument();
});
