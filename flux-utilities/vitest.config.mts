/// <reference types="vitest" />

import { mergeConfig } from 'vite';
import { defineProject } from 'vitest/config';
import rootConfig from '../vitest.config.mjs';
import path from 'node:path';

const projectConfig = defineProject({
  test: {
    name: 'flux-utilities',
    dir: 'flux-utilities',
    alias: {
      'flux-primeng-components': path.resolve(
        __dirname,
        '../flux-primeng-components/src/public-api.ts',
      ),
    },
  },
});

export default mergeConfig(rootConfig, projectConfig);
