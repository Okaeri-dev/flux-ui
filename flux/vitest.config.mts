/// <reference types="vitest" />

import { mergeConfig } from 'vite';
import { defineProject } from 'vitest/config';
import rootConfig from '../vitest.config.mjs';
import path from 'node:path';

const projectConfig = defineProject({
  test: {
    name: 'flux',
    dir: 'flux',
    alias: {
      '@flux-assets': path.resolve(__dirname, 'assets'),
      '@flux-services': path.resolve(__dirname, 'src/app/services'),
      '@flux-components': path.resolve(__dirname, 'src/app/components'),
      '@flux-models': path.resolve(__dirname, 'src/app/models'),
      '@flux-store': path.resolve(__dirname, 'src/app/store'),
      '@flux-resolvers': path.resolve(__dirname, 'src/app/resolvers'),
      '@flux-pipes': path.resolve(__dirname, 'src/app/pipes'),
      '@flux-guards': path.resolve(__dirname, 'src/app/guards'),
      'flux-utilities': path.resolve(__dirname, '../flux-utilities/src/public-api.ts'),
    },
  },
});

export default mergeConfig(rootConfig, projectConfig);
