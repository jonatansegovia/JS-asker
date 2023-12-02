import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

import './firebase/config.js';

import App from './App';

describe('<App/>', () => {
  it('should render correctly', () => {
    render(<App />);
  });
});
