import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../NavBar';

test('Header unit', async () => {
  const text = 'Label';
  render(<NavBar />);
  expect(await screen.findByText('Vaults')).toBeInTheDocument();
  expect(screen.getByText('Game')).toBeInTheDocument();
  expect(screen.getByText('Governance')).toBeInTheDocument();
});
