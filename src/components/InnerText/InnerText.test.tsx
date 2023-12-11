import { DocumentData } from 'firebase/firestore';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import InnerText from './InnerText';
import userEvent from '@testing-library/user-event';

const testingSetEditMode = vi.fn();
const testingData: DocumentData = {
  answer: 'testing front',
  question: 'testing question',
};

describe('<InnerText />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <InnerText
        edit={false}
        data={testingData}
        setEditMode={testingSetEditMode}
        showAnswer={false}
      />
    );

    const frontCard = screen.getByTestId('inner-text');
    const icon = container.querySelector('[class="material-symbols-outlined"]');

    expect(frontCard).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('should render question', () => {
    render(
      <InnerText
        edit={false}
        data={testingData}
        setEditMode={testingSetEditMode}
        showAnswer={false}
      />
    );

    const frontCard = screen.getByTestId('inner-text');

    expect(frontCard.innerHTML).toBe(testingData.question);
  });

  it('should render answer', () => {
    render(
      <InnerText
        edit={false}
        data={testingData}
        setEditMode={testingSetEditMode}
        showAnswer={true}
      />
    );

    const frontCard = screen.getByTestId('inner-text');

    expect(frontCard.innerHTML).toBe(testingData.answer);
  });

  it('should call fn when click on icon', async () => {
    const { container } = render(
      <InnerText
        edit={false}
        data={testingData}
        setEditMode={testingSetEditMode}
        showAnswer={true}
      />
    );

    const icon = container.querySelector(
      '[class="material-symbols-outlined"]'
    ) as Element;

    await userEvent.click(icon);

    expect(testingSetEditMode).toHaveBeenCalledOnce();
  });
});
