import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';

test('Footer unit', async () => {
  render(<Footer />);
  expect(await screen.getByText('Privacy policy')).toBeInTheDocument();
  expect(screen.getByText('User agreement')).toBeInTheDocument();
  expect(screen.getByText('Terms of use')).toBeInTheDocument();
});
