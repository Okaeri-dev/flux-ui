/// <reference types="vitest" />

import { mergeConfig } from 'vite';
import { defineProject } from 'vitest/config';
import rootConfig from '../vitest.config.mjs';

const projectConfig = defineProject({
  test: {
    name: 'flux-utilities',
    dir: 'flux-utilities',
  },
});

export default mergeConfig(rootConfig, projectConfig);
