import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders navbar', () => {
  render(<Navbar />);
  const about = screen.getByText(/About Us/i);
  expect(about).toBeInTheDocument();
});