/* eslint-disable @typescript-eslint/no-unused-expressions */
import '@analogjs/vitest-angular/setup-zone';
import '@angular/compiler';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { afterEach, beforeEach, vi } from 'vitest';

const ResizeObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}));

class MutationObserverMock {
  constructor() {
    vi.fn;
  }
  disconnect() {
    vi.fn;
  }
  observe() {
    vi.fn;
  }
}

vi.stubGlobal('ResizeObserver', ResizeObserverMock);
vi.stubGlobal('MutationObserver', MutationObserverMock);

beforeEach(() => {
  getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

afterEach(() => {
  getTestBed().resetTestEnvironment();
});
