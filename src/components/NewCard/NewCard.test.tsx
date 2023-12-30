import { describe, it, expect } from 'vitest';

import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import '../../firebase/config.js';
import { Provider } from '../../provider/Context';
import NewCard from './NewCard';

describe('<NewCard />', () => {
  const front = 'Front';
  const back = 'Back';

  it('should render correctly', () => {
    const { container } = render(
      <Provider>
        <NewCard />
      </Provider>
    );

    const banner = container.querySelector('.banner');
    const frontTitle = screen.getByLabelText(front);
    const frontArea = screen.getByRole('textbox', { name: front });
    const backTitle = screen.getByLabelText(back);
    const backArea = screen.getByRole('textbox', { name: back });
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    expect(banner).toBeInTheDocument();
    expect(frontTitle).toBeInTheDocument();
    expect(frontArea).toBeInTheDocument();
    expect(backTitle).toBeInTheDocument();
    expect(backArea).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
