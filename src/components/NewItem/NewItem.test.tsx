import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import NewItem from './NewItem';
import userEvent from '@testing-library/user-event';

const testHandleClick = vi.fn();
const testingLabel = 'TEST FRONT';
const testingName = 'test-name';

describe('first', () => {
  it('should render correctly', () => {
    const { container } = render(
      <NewItem
        handleChange={testHandleClick}
        name={testingName}
        text={testingLabel}
      />
    );

    const label = container.querySelector('label[for="test-name"]');
    const card = container.querySelector('.test-name');

    expect(label).toBeInTheDocument();
    expect(label?.innerHTML).toBe(testingLabel);
    expect(label).toHaveAttribute('for', 'test-name');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('test-name');
    expect(card).toHaveAttribute('contenteditable', 'true');
  });

  it('should we clickable', async () => {
    const { container } = render(
      <NewItem
        handleChange={testHandleClick}
        name={testingName}
        text={testingLabel}
      />
    );

    const someText = 'some text';

    const card = container.querySelector('.test-name') as Element;

    await userEvent.click(card);
    await userEvent.type(card, someText);
    screen.debug();
    expect(testHandleClick).toHaveBeenCalledTimes(someText.length);
  });
});
