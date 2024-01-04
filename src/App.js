import { CssBaseline, ThemeProvider } from "@mui/material";
import * as React from 'react';
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import './App.css';
import { defaultTheme } from './theme/Theme';
import Admin from "./view/Admin/Admin.js";
import Contact from "./view/Contact";
import Dashboard from "./view/Dashboard";
import Error from "./view/Error";
import Feature from "./view/Feature";
import Journeys from "./view/Journeys"
import Map from "./view/Map"
import Markers from "./view/Markers"
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
import AdminContact from "./view/Admin/Contact.js";
import AdminUsers from "./view/Admin/Users";
import AdminNewsletter from "./view/Admin/Newsletter.js";
import AdminOrganisations from "./view/Admin/Organisations.js";
import AdminOrganisation from "./view/Admin/Organisation.js";
import AdminOrganisationMarkers from "./view/Admin/Markers.js";
import AdminOrganisationUsers from "./view/Admin/OrganisationUsers.js";
import AdminOrganisationJourneys from "./view/Admin/Journeys.js";
import AdminSuggestion from "./view/Admin/Suggestion.js";

const JourneysRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Journeys/>} />
      <Route path="/:id" element={<Markers/>} />
    </Routes>
  );
};

const OrganisationsRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminOrganisations/>} />
      <Route path="/:id" element={<AdminOrganisation/>} />
      <Route path="/:id/users" element={<AdminOrganisationUsers/>} />
      <Route path="/:id/journeys" element={<AdminOrganisationJourneys/>} />
      <Route path="/:id/journeys/:id/markers" element={<AdminOrganisationMarkers/>} />
    </Routes>
  );
}

const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/journeys/*" element={<JourneysRouter/>} />
      <Route path="/map" element={<Map/>} />
    </Routes>
  );
};

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin/>} />
      <Route path="/organisations/*" element={<OrganisationsRouter/>} />
      <Route path="/users" element={<AdminUsers/>} />
      <Route path="/contact" element={<AdminContact/>} />
      <Route path="/newsletter" element={<AdminNewsletter/>} />
      <Route path="/suggestion" element={<AdminSuggestion/>} />
    </Routes>
  );
};

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
      path: "/dashboard/*",
      element:  <DashboardRouter/>,
      errorElement: <Error/>
    },
    {
      path: "profile",
      element:  <ProfileView/>,
      errorElement: <Error/>
    },
    {
        path: "/admin/*",
        element: <AdminRouter/>,
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
          <CssBaseline/>
          <RouterProvider router={router}/>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
