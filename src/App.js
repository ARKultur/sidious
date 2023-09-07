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

import GuideModal from "./component/guide/GuideModal";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Margin } from "@mui/icons-material";

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
            {/* <MapContainer center={[45.763210649627446, 4.82241931165369]} zoom={13} scrollWheelZoom={false} style={{marginTop: "1000px"}}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[45.763210649627446, 4.82241931165369]} eventHandlers={{
                  click: (e) => {
                    handleShowGuideModal()
                  },
                }}>
              </Marker>
              <GuideModal onClose={handleCloseGuideModal} isActive={showGuideModal} style={{zIndex: 1000}}/>
            </MapContainer>, */}
          <CssBaseline/>
          <RouterProvider router={router}/>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
