import * as React from 'react';
import './App.css';
import {ThemeProvider} from "@mui/material";
import {defaultTheme} from './theme/Theme'
import LandingPageView from "./view/LandingPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from "./view/Error";
import Maintenance from "./view/Maintenance";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPageView/>,
        errorElement: <Error/>
    },
    {
        path: "maintenance",
        element: <Maintenance/>
    }
])
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
