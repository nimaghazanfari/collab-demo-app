import { render, screen } from '@testing-library/react';
import App from './App';

test('renders add todo title', () => {
  render(<App />);
  const linkElement = screen.getByText(/What needs to be done?/i);
  expect(linkElement).toBeInTheDocument();
});
