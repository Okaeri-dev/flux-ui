/// <reference types="vitest" />

import { mergeConfig } from 'vite';
import { defineProject } from 'vitest/config';
import rootConfig from '../vitest.config.mjs';

const projectConfig = defineProject({
  test: {
    name: 'flux-primeng-components',
    dir: 'flux-primeng-components',
    include: ['./**/*.spec.ts'],
  },
});

export default mergeConfig(rootConfig, projectConfig);
