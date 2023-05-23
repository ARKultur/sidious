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
import PrivacyPolicyView from './view/PrivacyPolicyView';
import TermsView from './view/TermsView';
import Timeline from "./view/Timeline";
import Contact from "./view/Contact";
import Dashboard from "./view/Dashboard";
import MarkerForm from './component/MarkerModal';

import GuideModal from "./component/guide/GuideModal";
import { ToastProvider } from 'react-toast-notifications';
import { AuthProvider } from './services/AuthProvider';

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
