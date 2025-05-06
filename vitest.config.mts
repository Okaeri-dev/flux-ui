/// <reference types="vitest" />

import angular from '@analogjs/vite-plugin-angular';
import tsconfigPaths from 'vite-tsconfig-paths';
import os from 'node:os';
import { join } from 'node:path';
import { defineConfig } from 'vitest/config';

const cpus = os.cpus().length;
export default defineConfig({
  plugins: [angular(), tsconfigPaths()],
  root: __dirname,
  test: {
    reporters: ['default'],
    environment: 'happy-dom',
    hookTimeout: 60_000,
    testTimeout: 15_000,
    isolate: true,
    globals: true,
    pool: "threads",
    poolOptions: { minThreads: cpus, maxThreads: cpus },
    include: ['**/*.spec.ts'],
    coverage: { enabled: true, reporter: 'lcov' },
    setupFiles: [join(__dirname, 'tests', 'vitest', 'init-test-environment.ts')],
    server: { deps: { inline: ['ng-mocks'] } },
  },
  define: { 'import.meta.vitest': true },
  cacheDir: join(__dirname, 'node_modules/.vite'),
  server: { fs: { strict: false } },
  build: { minify: false, sourcemap: false },
});
