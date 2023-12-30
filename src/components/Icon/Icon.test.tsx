import { describe, it } from 'vitest';

import { render, screen } from '@testing-library/react';

import { EDIT_PENCIL, SAVE } from '../../utils/variables/general';

import Icon from './Icon';

describe('<Icon />', () => {
  const testHandleClick = vi.fn();
  const defaultClass = 'material-symbols-outlined';

  it('should render correctly', () => {
    render(<Icon handleClick={testHandleClick} />);

    const saveIcon = screen.getByText(SAVE);

    expect(saveIcon).toBeInTheDocument();
    expect(saveIcon.className).toBe(`${defaultClass} ${SAVE}`);
  });

  it('should render correct icon and class when adding one', () => {
    render(<Icon handleClick={testHandleClick} iconName={EDIT_PENCIL} />);

    const pencilIcon = screen.getByText(EDIT_PENCIL);

    expect(pencilIcon).toBeInTheDocument();
    expect(pencilIcon.className).toBe(defaultClass);
  });
});
