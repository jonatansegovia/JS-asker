import { describe, it } from 'vitest';

import { render, screen } from '@testing-library/react';

import { EDIT_PENCIL, SAVE } from '../../utils/variables/general';

import Icon from './Icon';

describe('<Icon />', () => {
  const testHandleClick = vi.fn();
  const defaultClass = 'material-symbols-outlined save';

  it('should render correctly', () => {
    render(<Icon handleClick={testHandleClick} />);

    const saveIcon = screen.getByText(SAVE);

    screen.debug();

    expect(saveIcon).toBeInTheDocument();
    expect(saveIcon.className).toBe(defaultClass);
  });
});
