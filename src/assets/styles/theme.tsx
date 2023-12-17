import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          '50': '#dfdce7',
          '100': '#cac5d7',
          '200': '#b5aec7',
          '300': '#a097b7',
          '400': '#8b7fa7',
          '500': '#766897',
          '600': '#635880',
          '700': '#514868',
          '800': '#3f3851',
          '900': '#2d283a'
        },
        text: {
          primary: 'var(--joy-palette-primary-600)',
          secondary: 'var(--joy-palette-primary-500)',
          tertiary: 'var(--joy-palette-primary-400)',
          icon: 'var(--joy-palette-primary-300)'
        },
        neutral: {
          '50': '#f7f6f9',
          '100': '#e7e5ec',
          '200': '#d7d4df',
          '300': '#c7c3d2',
          '400': '#877e9f',
          '500': '#978fac',
          '600': '#776d92',
          '700': '#696081',
          '800': '#4d475e',
          '900': '#3f3a4d'
        },
        background: {}
      }
    },
    dark: {
      palette: {
        primary: {
          '50': '#faf0e6',
          '100': '#e1d8cf',
          '200': '#c8c0b8',
          '300': '#afa8a1',
          '400': '#96908a',
          '500': '#7d7873',
          '600': '#64605c',
          '700': '#4b4845',
          '800': '#32302e',
          '900': '#191817'
        },
        neutral: {
          '50': '#c0bccd',
          '100': '#b9b4c7',
          '200': '#a7a2b3',
          '300': '#94909f',
          '400': '#827e8b',
          '500': '#6f6c77',
          '600': '#5d5a64',
          '700': '#4a4850',
          '800': '#38363c',
          '900': '#252428'
        },
        background: {
          body: '#2a2636',
          surface: '#2a2636',
          level2: '#100e14',
          level3: '#15131b',
          tooltip: '#726d7c',
          backdrop: '#5d5969'
        },
        text: {
          primary: 'var(--joy-palette-primary-100)',
          secondary: 'var(--joy-palette-primary-300)',
          tertiary: 'var(--joy-palette-primary-400)',
          icon: 'var(--joy-palette-primary-400)'
        }
      }
    }
  }
});

export default theme;
