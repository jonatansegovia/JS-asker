/// <reference types="vitest"/>

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test/setup.ts'],
    coverage: {
      provider: 'istanbul',
      reportsDirectory: './tests/unit/coverage',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}', '!src/types.ts'],
      all: true,
      enabled: true,
    },
  },
});
