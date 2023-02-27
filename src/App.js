import * as React from 'react';
import './App.css';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {defaultTheme} from './theme/Theme'
import LandingPageView from "./view/LandingPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from "./view/Error";
import Maintenance from "./view/Maintenance";
import Project from "./view/Project";
import Team from "./view/Team";
import Feature from "./view/Feature";
import Dashboard from "./view/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageView/>,
    errorElement: <Error/>
  },
  {
    path: "maintenance",
    element: <Maintenance/>
  },
  {
    path: "project",
    element: <Project/>
  },
  {
    path: "team",
    element: <Team/>
  },
  {
    path: "feature",
    element: <Feature/>
  },
  {
    path: "dashboard",
    element: <Dashboard/>
  }
])
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline/>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
