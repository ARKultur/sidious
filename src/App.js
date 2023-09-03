import { CssBaseline, ThemeProvider } from "@mui/material";
import * as React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';
import { defaultTheme } from './theme/Theme';
import Admin from "./view/Admin.js";
import Contact from "./view/Contact";
import Dashboard from "./view/Dashboard";
import Error from "./view/Error";
import Feature from "./view/Feature";
import LandingPageView from "./view/LandingPage";
import Maintenance from "./view/Maintenance";
import PrivacyPolicyView from './view/PrivacyPolicyView';
import Project from "./view/Project";
import Team from "./view/Team";
import TermsView from './view/TermsView';
import Timeline from "./view/Timeline";

import { AuthProvider } from './services/AuthProvider';

import ProfileView from './view/Profile';

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
        path: "privacy-policy",
        element: <PrivacyPolicyView/>,
        errorElement: <Error/>
    },
    {
        path: "terms",
        element: <TermsView/>,
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
      path: "profile",
      element:  <ProfileView/>,
      errorElement: <Error/>
    },
    {
        path: "admin",
        element: <Admin/>,
        errorElement: <Error/>
    }
])

function App() {

  // Guide
  const [showGuideModal, setShowGuideModal] = React.useState(false);

  function handleShowGuideModal() {
    setShowGuideModal(true);
  };

  function handleCloseGuideModal() {
    setShowGuideModal(false);
  };

  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <AuthProvider>
          {/* <button onClick={handleShowGuideModal}>Guide</button>
          <GuideModal onClose={handleCloseGuideModal} isActive={showGuideModal}/> */}
          <CssBaseline/>
          <RouterProvider router={router}/>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
