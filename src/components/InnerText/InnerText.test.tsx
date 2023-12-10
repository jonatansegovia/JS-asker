import { DocumentData } from 'firebase/firestore';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import InnerText from './InnerText';

const testingSetEditMode = vi.fn();
const testingFront: DocumentData = { answer: 'testing front' };

describe('<InnerText />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <InnerText
        edit={false}
        data={testingFront}
        setEditMode={testingSetEditMode}
        showAnswer={false}
      />
    );

    const frontCard = screen.getByTestId('inner-text');
    const icon = container.querySelector('[class="material-symbols-outlined"]');

    expect(frontCard).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});
