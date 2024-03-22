import { createTheme, PaletteOptions, SimplePaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  // eslint-disable-next-line no-unused-vars
  interface SimplePaletteColorOptions {
    error?: string;
    warning?: string;
    success?: string;
    info?: string;
  }

  // eslint-disable-next-line no-unused-vars
  interface PaletteColor {
    error?: string;
    warning?: string;
    success?: string;
    info?: string;
  }
}

interface DefaultPaletteOptions extends PaletteOptions {
  primary?: SimplePaletteColorOptions;
  secondary?: SimplePaletteColorOptions;
}

const Default = (): DefaultPaletteOptions => {
  return {
    primary: {
      main: '#383e43',
      error: '#f44336',
      warning: '##ffcf40',
      success: '#00ff2a',
      info: '#096C7C',
    },
    secondary: {
      main: '#E5AF6C',
      error: '#f44336',
      warning: '##ffcf40',
      success: '#00ff2a',
      info: '#096C7C',
    },
  };
};

const defaultColors = Default();
const palette: PaletteOptions = {
  // mode: 'dark',
  mode: 'light',
  ...defaultColors,
};

// Note: example how to customize default theme values
// Default theme
const theme = createTheme({
  palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1200,
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontFamily: 'Poppins',
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: 'Poppins',
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: '1px solid #00abf0;',
        },

        root: {
          color: '#1D1D1B',
          '&::placeholder': {
            color: '#878787',
            opacity: 1,
            fontFamily: 'Poppins',
          },
          '& .MuiInputBase-inputSizeSmall': {
            padding: '12.5px 16px'
          },
          '& .MuiInputBase-sizeSmall': {
            padding: '12.5px 16px'
          },
          fontFamily: 'Poppins',
          '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #939393'
            },
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #939393',
              boxShadow: '0px 0px 0px 3px rgb(45 75 125 / 10%)'
              // boxShadow: '0px 0px 0px 3px rgba(0, 75, 127, 0.1)'
            },
          },
          '&.Mui-error': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #C62840',
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                boxShadow: '0px 0px 0px 2px rgba(198, 40, 64, 0.1)'
              },
            },
          },
          '&.Mui-disabled': {
            backgroundColor: '#f5f5f5',
            '& > input': {
              cursor: 'text',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #E0E0E0',
            },
          },

        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          fontWeight: 600,
          fontFamily: 'Poppins',
        },
      },
    },
  },
});

export default theme;
