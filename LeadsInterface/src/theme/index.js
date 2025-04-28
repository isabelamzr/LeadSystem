import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// Color tokens
export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
        grey: {
          100: "#E0E0E0", 
          200: "#C2C2C2",
          300: "#A3A3A3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3D3D3D", 
          800: "#292929", 
          900: "#141414",
        },
        primary: {
          100: "#D0D1D5",
          200: "#A1A4AB",
          300: "#727681",
          400: "#1F2A40", 
          500: "#141B2D", 
          600: "#101624",
          700: "#0C101B",
          800: "#080B12",
          900: "#040509",
        },
        accent: {
          100: "#FFD3BA",
          200: "#FFBA98",
          300: "#FFA175",
          400: "#FF8952", 
          500: "#FF6E14", 
          600: "#E65400",
          700: "#CC4A00",
          800: "#B34000",
          900: "#993600",
        }
      }
    : {
        grey: {
          100: "#333333", 
          200: "#5A5A5A",
          300: "#808080",
          400: "#A6A6A6",
          500: "#CCCCCC",
          600: "#E0E0E0", 
          700: "#EEEEEE", 
          800: "#F5F5F5", 
          900: "#FFFFFF", 
        },
        primary: {
          100: "#141414",
          200: "#292929",
          300: "#3D3D3D",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#A3A3A3",
          800: "#C2C2C2",
          900: "#E0E0E0",
        },
        accent: {
          100: "#993600",
          200: "#B34000",
          300: "#CC4A00",
          400: "#E65400",
          500: "#FF6E14", 
          600: "#FF8952",
          700: "#FFA175",
          800: "#FFBA98",
          900: "#FFD3BA",
        }
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
              main: colors.accent[500], 
            },
            secondary: {
              main: colors.accent[400],
            },
            background: {
              default: colors.primary[400],
              paper: colors.primary[500],
            },
            text: {
              primary: colors.grey[100],
              secondary: colors.grey[200],
            },
            divider: colors.grey[800],
          }
        : {
            primary: {
              main: colors.accent[500], 
            },
            secondary: {
              main: colors.accent[400],
            },
            background: {
              default: colors.grey[800],
              paper: colors.grey[900],
            },
            text: {
              primary: colors.grey[100], 
              secondary: colors.grey[300], 
            },
            divider: colors.grey[600],
          }),
    },
    typography: {
      fontFamily: ["Nunito", "Arial", "sans-serif"].join(","), 
      fontSize: 14,
      h1: {
        fontFamily: ["Nunito", "Arial", "sans-serif"].join(","),
        fontSize: 32,
        fontWeight: 600,
      },
      h2: {
        fontFamily: ["Nunito", "Arial", "sans-serif"].join(","),
        fontSize: 28,
        fontWeight: 600,
      },
      h3: {
        fontFamily: ["Nunito", "Arial", "sans-serif"].join(","),
        fontSize: 24,
        fontWeight: 600,
      },
      h4: {
        fontFamily: ["Nunito", "Arial", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 600,
      },
      h5: {
        fontFamily: ["Nunito", "Arial", "sans-serif"].join(","),
        fontSize: 18,
        fontWeight: 600,
      },
      h6: {
        fontFamily: ["Nunito", "Arial", "sans-serif"].join(","),
        fontSize: 16,
        fontWeight: 600,
      },
      subtitle1: {
        fontFamily: ["Nunito", "Arial", "sans-serif"].join(","),
        fontSize: 16,
        fontWeight: 500,
      },
      body1: {
        fontFamily: ["Nunito", "Arial", "sans-serif"].join(","),
        fontSize: 14,
      },
      body2: {
        fontFamily: ["Nunito", "Arial", "sans-serif"].join(","),
        fontSize: 13,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 2,
            fontWeight: 500,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: '0px 1px 3px rgba(0,0,0,0.1)',
          }
        }
      }
    },
  };
};

// Color mode context
export const ColorModeContext = createContext({
  toggleColorMode: () => {}
});

// Custom hook for theme mode
export const useMode = () => {
  const [mode, setMode] = useState("light"); 

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};