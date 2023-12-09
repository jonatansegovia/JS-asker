import { describe, it, expect, vi } from 'vitest';
import { render, waitFor, screen } from '@testing-library/react';

import NewItem from './NewItem';

describe('first', () => {
  it('should ', () => {
    const { container } = render(
      <NewItem handleChange={vi.fn()} name="test-name" text="TEST FRONT" />
    );

    const label = container.querySelector('label[for="test-name"]');

    expect(label).toBeInTheDocument();
  });
});
