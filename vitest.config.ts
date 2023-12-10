/// <reference types="vitest"/>

import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test/setup.ts'],
    dangerouslyIgnoreUnhandledErrors: true,
    testTransformMode: { ssr: ['src/**/*.{ts,tsx}'] },
    //coverage: {
    //  provider: 'istanbul',
    //  reportsDirectory: './tests/unit/coverage',
    //  reporter: ['text', 'json', 'html'],
    //  include: ['src/**/*.{ts,tsx}', '!src/types.ts'],
    //  all: true,
    //  enabled: true,
    // },
  },
});
