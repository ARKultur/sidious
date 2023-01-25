import * as React from 'react';
import './App.css';
import {ThemeProvider} from "@mui/material";
import {defaultTheme} from './theme/Theme'
import LandingPageView from "./view/LandingPage";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <LandingPageView/>
      </ThemeProvider>
    </div>
  );
}

export default App;
