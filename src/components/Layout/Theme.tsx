// components/Layout/Theme.tsx

"use client";

import { createTheme } from "@mui/material";

// Custom theme with luxury yacht aesthetics
export const theme = createTheme({
  palette: {
    primary: {
      main: "#0A2342", // Deep navy
      light: "#1D3557",
      dark: "#061528",
    },
    secondary: {
      main: "#D4AF37", // Champagne gold
      light: "#F1E5AC",
      dark: "#B08E23",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F8F9FA",
    },
  },
  typography: {
    fontFamily: '"Source Sans Pro", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: "10px 25px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          overflow: "hidden",
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
          transition: "all 0.4s ease",
          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
  },
});

export default theme;
