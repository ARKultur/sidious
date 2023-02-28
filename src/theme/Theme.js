import {createTheme} from "@mui/material";
import crimsonPro from '../resources/font/crimsonpro-bold.ttf';

const CrimsonPro = {
  fontFamily: 'Crimson',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('crimsonpro'),
    local('crimsonpro-regular'),
    url(${crimsonPro}) format('truetype')
  `,
}


export const defaultTheme = createTheme({
  typography: {
    fontFamily: [
      "Crimson",
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 15,
    color: "#FFF",
    button: {
      textTransform: "none",
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font_face': [CrimsonPro]
      }
    }
  },

  palette: {
    primary: {
      main: "#9CA3AF",
      contrastText: "#FFF",
    },
    background: {
      default: "#111827"
    },
    title: {
      main: "#FFF",
      contrastText: "#FFF",
    },
    button: {
      main: "#7E3AF2",
      contrastText: "#FFF",
    },
    mainColor: {
      main: "#111827",
      subMenu: "#9932CC"
    },
    footer: "#1F2937",
    greyText: "#9CA3AF",
    tm_now: {
      main: "#6f24ff",
      contrastText: "#6f24ff",
    },
    tm_past: {
      main: "#9258ff",
      contrastText: "#9258ff",
    },
    tm_future: {
      main: "#525252",
      contrastText: "#525252",
    },
  },
  shape: {
    borderRadius: 8
  },
})
