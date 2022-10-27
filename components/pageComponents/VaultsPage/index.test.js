import { render, screen } from '@testing-library/react';
import VaultsPageComponent from '.';

test('Vaults page', async () => {
  render(<VaultsPageComponent />);
  expect(screen.getByText('Ethereum Network')).toBeInTheDocument();
});
