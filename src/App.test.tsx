import { describe, it } from 'vitest';
import { render, waitFor, screen } from '@testing-library/react';

import './firebase/config.js';

import App from './App';

describe('<App/>', () => {
  let container;

  beforeEach(() => {
    container = render(<App />).container;
  });

  it('should render correctly', async () => {
    await waitFor(
      async () => {
        const editBtn = await screen.findByText('credit_card_gear');
        const themeBtn = await screen.findByText('clear_night');
        const card = await screen.findByTestId('inner-text');

        expect(editBtn).toBeInTheDocument();
        expect(themeBtn).toBeInTheDocument();
        expect(card).toBeInTheDocument();
      },
      { timeout: 2500 }
    );
  });
});
