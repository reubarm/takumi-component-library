import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  // Typography
  fontBase: '"Nunito Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Takumi',
  brandUrl: '/',
  brandImage: 'https://takumi-component-library.vercel.app/logo-final.svg',
  brandTarget: '_self',

  //
  colorPrimary: '#3A10E5',
  colorSecondary: '#585C6D',

  // UI
  appBg: '#233044',
  appContentBg: '#000000',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,

  // Text colors
  textColor: '#ffffff',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#ffffff',
  inputTextColor: '#000000',
  inputBorderRadius: 2,
});