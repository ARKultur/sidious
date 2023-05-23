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
import Timeline from "./view/Timeline";
import Contact from "./view/Contact";
import Dashboard from "./view/Dashboard";
import Login from './view/Login';
import Register from './view/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageView/>,
    errorElement: <Error/>
  },
  {
    path: "maintenance",
    element: <Maintenance/>,
    errorElement: <Error/>
  },
  {
    path: "project",
    element: <Project/>,
    errorElement: <Error/>
  },
  {
    path: "team",
    element: <Team/>,
    errorElement: <Error/>
  },
  {
    path: 'timeline',
    element: <Timeline/>,
    errorElement: <Error/>
  },
  {
    path: "feature",
    element: <Feature/>,
    errorElement: <Error/>
  },
  {
    path: "contact",
    element: <Contact/>,
    errorElement: <Error/>
  },
  {
    path: "dashboard",
    element:  <Dashboard/>,
    errorElement: <Error/>
  },
  {
    path: "login",
    element: <Login/>,
    errorElement: <Error/>
  },
  {
    path: "register",
    element: <Register/>,
    errorElement: <Error/>
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
