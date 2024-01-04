import NavBar from "../../component/NavBar";
import FooterComponent from "../../component/Footer";
import { Grid, Typography, useTheme } from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import "../../styles/view/Dashboard.css";
import axios from "axios";
import { API_URL } from "../../config/API";
import { AdminMarkerTable } from "../../component/admin/MarkerTable";
import { AdminSideBar } from "../../component/admin/SideBar";
import { useParams } from "react-router-dom";

export default function AdminOrganisationMarkers() {
  const theme = useTheme();
  const [IsSetup, setIsSetup] = useState(false);
  const [users, setUsers] = useState([]);
  const [markers, setMarkers] = useState([]);
  const token = localStorage.getItem("token");
  const params = useParams();

  useEffect(() => {
    const init = async () => {
      try {
        let markerRes = await axios.get(`${API_URL}/api/nodes/admin/parkour/${params.id}`, {
          headers:  { Authorization: `Bearer ${token}` },
        });

        setMarkers(markerRes.data);
        setIsSetup(true);
      } catch (e) {
        console.log(e)
      }
    };
    if (!IsSetup) init();
  }, [users, markers, IsSetup, token]);


  const deleteMarker = async (marker) => {
    try {
      const res = await axios.delete(`${API_URL}/api/nodes/admin`, {
        data: { id: marker.node.id, parkourId: params.id },
        headers: { Authorization: `Bearer ${token}` },
      });
      const updatedMarkers = markers.filter(
        (item) => item.name !== marker.name
      );
      setMarkers(updatedMarkers);
      window.location.reload();
    } catch (e) {
      alert(e.response.data);
    }
  };



  const editMarker = async (marker) => {
    console.log(marker)
    /*try {
      const res = await axios.patch(
        `${API_URL}/api/nodes/admin`,
        {
          name: marker.name,
          description: marker.description,
          longitude: parseInt(marker.longitude),
          latitude: parseInt(marker.latitude),
          status: marker.status,
          organisationId: marker.organisationId,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const updatedMarkers = markers;
      updatedMarkers.map((item) => {
        if (item.name === marker.name) return marker;
      });
      setUsers(updatedMarkers);
      window.location.reload();
    } catch (e) {
      alert(e.response.data);
    }*/
  };

  return (
    <>
      <NavBar />
      <Grid style={{ paddingTop: "100px", paddingLeft: "50px" }}>
        <Typography
          variant={"h1"}
          color={theme.typography.color}
          style={{
            marginBottom: "1rem",
            fontSize: "3.75rem",
            letterSpacing: "-0.025em",
            fontWeight: 800,
          }}
        >
          {"Organisation"}
        </Typography>

        <Grid style={{display: 'flex', flexDirection: 'row', padding: 10}}>
          <AdminSideBar option={'organisation'}/>
          <AdminMarkerTable
          rows={markers}
          editMarker={editMarker}
          deleteMarker={deleteMarker}
        />
        </Grid>
      </Grid>
      <FooterComponent />
    </>
  );
}
