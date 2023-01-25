import {createTheme} from "@mui/material";
import crimsonPro from '../resources/font/crimsonpro-bold.ttf';
import {grey} from '@mui/material/colors'

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
      main: grey[500],
      contrastText: "#FFF",
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
    },
    footer: "#1F2937",
    greyText: "#9CA3AF",
  },
  shape: {
    borderRadius: 8
  },
})
