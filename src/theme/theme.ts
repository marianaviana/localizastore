import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7dde21',
      light: '#005f29',
      dark: '#004521',
    },
    secondary: {
      main: '#9f2124',
      light: '#c4292b',
      dark: '#861e20',
    },
    background: {
      default: '#1B1B1B',
      paper: '#252525',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1a1a',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
          backgroundImage: 'none',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: 'none !important',
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          width: '100%',
        },
        container: {
          margin: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: '#78de1f',
          borderRadius: '40px',
          padding: '10px 20px',
        }
      }
    },
  }
});