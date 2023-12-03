import { describe, it } from 'vitest';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import './firebase/config.js';

import App from './App';

describe('<App/>', () => {
  let container: HTMLElement;

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

  it('should toggle create mode on create button click', async () => {
    await waitFor(
      async () => {
        const editBtn = await screen.findByText('credit_card_gear');

        await userEvent.click(editBtn);

        const backBtn = await screen.findByText('keyboard_backspace');
        const containerNewItems = container.querySelector(
          '.container-newitems'
        );

        expect(backBtn).toBeInTheDocument();
        expect(containerNewItems).toBeInTheDocument();
      },
      { timeout: 2500 }
    );
  });
});
