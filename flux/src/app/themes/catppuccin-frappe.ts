import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const CatppuccinFrappePreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        surface: {
          0: '#f2d5cf',
          50: '#eebebe',
          100: '#f4b8e4',
          200: '#ca9ee6',
          300: '#e78284',
          400: '#ea999c',
          500: '#ef9f76',
          600: '#e5c890',
          700: '#a6d189',
          800: '#81c8be',
          900: '#99d1db',
          950: '#85c1dc',
        },
        accent: { 0: '#8caaee', 1: '#babbf1', 2: '#c6d0f5' },
        text: { primary: '#c6d0f5', secondary: '#b5bfe2', tertiary: '#a5adce' },
        border: { light: '#949cbb', dark: '#838ba7' },
      },
      dark: {
        surface: {
          0: '#303446',
          50: '#292c3c',
          100: '#232634',
          200: '#414559',
          300: '#51576d',
          400: '#626880',
          500: '#737994',
          600: '#838ba7',
          700: '#949cbb',
          800: '#a5adce',
          900: '#b5bfe2',
          950: '#c6d0f5',
        },
        accent: { 0: '#8caaee', 1: '#babbf1', 2: '#c6d0f5' },
        text: { primary: '#c6d0f5', secondary: '#b5bfe2', tertiary: '#a5adce' },
        border: { light: '#949cbb', dark: '#838ba7' },
      },
    },
  },
});

export default CatppuccinFrappePreset;
