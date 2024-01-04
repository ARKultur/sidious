import NavBar from '../../component/NavBar';
import FooterComponent from '../../component/Footer';
import { Grid, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import { useState, useEffect } from 'react';
import '../../styles/view/Dashboard.css';
import axios from 'axios';
import { API_URL } from '../../config/API';
import OrganisationsTable from '../../component/OrganisationsTable';
import { AuthContext } from '../../services/AuthProvider';
import { AdminSideBar } from '../../component/admin/SideBar';
import { useNavigate } from 'react-router-dom';

export default function AdminOrganisations() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [IsSetup, setIsSetup] = useState(false);
  const [users, setUsers] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [organisations, setOrganisations] = useState([]);
 
  const token = localStorage.getItem('token');
  const { logout } = React.useContext(AuthContext);

  useEffect(() => {
    const init = async () => {
      try {
        let userRes = await axios.get(`${API_URL}/api/accounts/admin`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUsers(userRes.data);
      } catch (e) {
        logout();
        window.location.replace('/');
      }

      let orgRes = await axios.get(`${API_URL}/api/organisations`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOrganisations(orgRes.data);
      let markerRes = await axios.get(`${API_URL}/api/nodes/all`);

      setMarkers(markerRes.data);
      setIsSetup(true);
    };
    if (!IsSetup) init();
  }, [users, organisations, markers, IsSetup, token]);



  const deleteOrg = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/api/organisations`, {
        data: { id: id },
        headers: { Authorization: `Bearer ${token}` },
      });
      const updatedOrg = organisations.filter((org) => org.id !== id);
      setOrganisations(updatedOrg);
      window.location.reload();
    } catch (e) {
      alert(e.response.data);
    }
  };



  

  const addOrganisation = async (name) => {
    try {
      const res = await axios.post(
        `${API_URL}/api/organisations`,
        { name: name },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const updatedOrg = organisations;
      updatedOrg.push(res.data);
      setOrganisations(updatedOrg);
      window.location.reload();
    } catch (e) {
      alert(e.response.data);
    }
  };

  const editOrganisation = async (id, addressId, name) => {
    try {
      const res = await axios.patch(
        `${API_URL}/api/organisations`,
        { id: id, address: addressId, new_name: name },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const updatedOrgs = organisations;
      updatedOrgs.map((org) => {
        if (org.id === id) {
          org.addressId = res.data.addressId;
          org.name = res.data.name;
        }
        return org;
      });
      setOrganisations(updatedOrgs);
      window.location.reload();
    } catch (e) {
      alert(e.response.data);
    }
  };


  const showOrg = (id) => {
    navigate(`/admin/organisations/${id}`);
  };



  return (
    <>
      <NavBar />
      <Grid style={{ paddingTop: '100px', paddingLeft: '50px' }}>
        <Typography
          variant={'h1'}
          color={theme.typography.color}
          style={{
            marginBottom: '1rem',
            fontSize: '3.75rem',
            letterSpacing: '-0.025em',
            fontWeight: 800,
          }}
        >
          {'Organisation'}
        </Typography>
        <Grid style={{ display: 'flex', flexDirection: 'row', padding: 10 }}>
          <AdminSideBar option={'organisation'} />
          <OrganisationsTable
            rows={organisations}
            addOrg={addOrganisation}
            editOrg={editOrganisation}
            deleteOrg={deleteOrg}
            showOrg={showOrg}
          />
        </Grid>
      </Grid>
      <FooterComponent />
    </>
  );
}
