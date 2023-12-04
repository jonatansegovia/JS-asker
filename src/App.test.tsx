import { describe, it } from 'vitest';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import './firebase/config.js';
import { Provider } from './provider/Context.js';
import {
  DARK_THEME,
  EDIT_GEAR,
  LEFT_ARROW,
  MOON,
  SUN,
} from './utils/variables/general.js';
import App from './App';

describe('<App/>', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(
      <Provider>
        <App />
      </Provider>
    ).container;
  });

  it('should render correctly', async () => {
    await waitFor(
      async () => {
        const editBtn = await screen.findByText(EDIT_GEAR);
        const themeBtn = await screen.findByText(MOON);
        const card = await screen.findByTestId('inner-text');

        expect(editBtn).toBeInTheDocument();
        expect(themeBtn).toBeInTheDocument();
        expect(card).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  it('should toggle create mode on create button click', async () => {
    await waitFor(
      async () => {
        const editBtn = await screen.findByText(EDIT_GEAR);

        await userEvent.click(editBtn);

        const backBtn = await screen.findByText(LEFT_ARROW);
        const containerNewItems = container.querySelector(
          '.container-newitems'
        );

        expect(backBtn).toBeInTheDocument();
        expect(containerNewItems).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  it('should have correct theme when clicking', async () => {
    let themeBtn = await screen.findByText(MOON);
    const mainDarkElement = document.getElementById('main');

    expect(mainDarkElement).toHaveClass(DARK_THEME);
    expect(themeBtn).toBeInTheDocument();

    await userEvent.click(themeBtn);

    themeBtn = await screen.findByText(SUN);

    expect(mainDarkElement).not.toHaveClass(DARK_THEME);
    expect(themeBtn).toBeInTheDocument();
  });
});
