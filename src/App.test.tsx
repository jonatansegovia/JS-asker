import { describe, it } from 'vitest';
import { render, waitFor, screen } from '@testing-library/react';

import './firebase/config.js';

import App from './App';

describe('<App/>', () => {
  it('should render correctly', async () => {
    render(<App />);

    await waitFor(
      async () => {
        const card = await screen.findByTestId('inner-text');

        expect(card).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });
});
