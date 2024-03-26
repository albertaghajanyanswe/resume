import { createTheme, PaletteOptions, SimplePaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  // eslint-disable-next-line
  interface SimplePaletteColorOptions {
    error?: string;
    warning?: string;
    success?: string;
    info?: string;
    red1: string;
    red2: string;
    red3: string;
    green1: string;
    green2: string;
    green3: string;
    orange1: string;
    orange2: string;
    orange3: string;
  }

  // eslint-disable-next-line no-unused-vars
  interface PaletteColor {
    error?: string;
    warning?: string;
    success?: string;
    info?: string;
    red1: string;
    red2: string;
    red3: string;
    green1: string;
    green2: string;
    green3: string;
    orange1: string;
    orange2: string;
    orange3: string;
  }
}

interface DefaultPaletteOptions extends PaletteOptions {
  primary?: SimplePaletteColorOptions;
  secondary?: SimplePaletteColorOptions;
  testColor?: string;
}

const Default = (): DefaultPaletteOptions => {
  return {
    primary: {
      main: '#004B7F',
      error: '#f44336',
      warning: '#E99800',
      success: '#21a900',
      info: '#096C7C',
      red1: '#FEF1F3',
      green1: '#EEFEF9',
      orange1: '#FFFAF3',
      red2: '#F7D9DE',
      green2: '#B3E7D7',
      orange2: '#FCECD9',
      red3: '#D04C60',
      green3: '#009E6E',
      orange3: '#DA9C50',
    },
    secondary: {
      main: '#004B7F',
      error: '#f44336',
      warning: '#E99800',
      success: '#21a900',
      info: '#096C7C',
      red1: '#FEF1F3',
      green1: '#EEFEF9',
      orange1: '#FFFAF3',
      red2: '#F7D9DE',
      green2: '#B3E7D7',
      orange2: '#FCECD9',
      red3: '#D04C60',
      green3: '#009E6E',
      orange3: '#DA9C50',
    },
  };
};

const defaultColors = Default();
const palette: PaletteOptions = {
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
          fontSize: '14px',
          background: 'var(--main-color)',
          color: 'var(--second-bg-color)',
          padding: 8,
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
        input: {
          color: 'white',
          // color: 'var(--text-color',
          '&::placeholder': {
            color: '#5aa1bd',
            opacity: 1,
            fontFamily: 'Poppins',
            fontSize: '16px'
          },
        },

        root: {
          fontFamily: 'Poppins',
          color: 'white',
          fontSize: '16px',
          // border: '2px solid #00abf0',
          // boxShadow: '0px 0px 0px 2px rgba(54, 96, 124, 0.6)',
          // boxShadow: '0px 0px 0px 2px rgba(27, 61, 255, 0.6)',

          '& .MuiInputBase-inputSizeSmall': {
            padding: '12.5px 16px'
          },
          '& .MuiInputBase-sizeSmall': {
            padding: '12.5px 16px'
          },
          '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #00abf0'
            },
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: '2px solid #00abf0',
              boxShadow: '0px 0px 0px 2px rgba(54, 96, 124, 0.6)',
              // boxShadow: '0px 0px 0px 2px rgba(27, 61, 255, 0.6)',

            },
          },
          '&.Mui-error': {
            input: {
              '&::placeholder': {
                color: '#C62840',
              },
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: '2px solid #C62840',
              // boxShadow: '0px 0px 12px 2px rgba(229, 22, 22, 0.6)',
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                boxShadow: '0px 0px 12px 2px rgba(229, 22, 22, 0.6)',
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
