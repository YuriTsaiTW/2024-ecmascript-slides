import { SpectacleThemeOverrides } from 'spectacle';

const theme: SpectacleThemeOverrides = {
  size: {
    width: 1366,
    height: 768,
    maxCodePaneHeight: 200,
  },
  colors: {
    primary: '#ebe5da',
    secondary: '#E84A5F',
    tertiary: '#2A363B',
    quaternary: '#FFCEAB',
    quinary: '#99B998',
  },
  fonts: {
    header: '"Roboto Mono", "Helvetica Neue", Helvetica, Arial, sans-serif',
    text: '"Roboto Mono ","Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: '"Consolas", "Menlo", monospace',
  },
  fontSizes: {
    h1: '72px',
    h2: '56px',
    h3: '36px',
    text: '20px',
    monospace: '18px',
  },
  space: [16, 24, 32],
};

export default theme;
