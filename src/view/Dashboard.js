import NavBar from "../component/NavBar";
import FooterComponent from "../component/Footer";
import {Button, Container, Grid, IconButton, Input, Typography, useTheme} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import * as React from "react";
import {useTranslation} from "react-i18next";
import { MarkerTable } from "../component/MarkerTable";
import { MarkerModal } from "../component/MarkerModal";
import { useState } from "react";
import '../styles/view/Dashboard.css'

export default function Dashboard() {

  const [rows, setRows] = useState([
    {name: 'Tour Eiffel', description: "test1", longitude: 7825352 , latitude: 7623890},
    {name: 'Tour de Pise', description: "test2", longitude:  6321321 , latitude: 1290564},
    {name: 'Tour de l\'infini', description: "test3", longitude: 5532323 , latitude: 1629054},
  ])
  const [rowToEdit, setRowToEdit] = useState(null);
  const theme = useTheme();
  const { t } = useTranslation();
  const [isDashboardMap, setDashboardMap] = React.useState(true);
  const [isModalOpen, setModalOpen] = React.useState(false);


  const deleteRow = (targetId) => {
    setRows(rows.filter((_, id) => id !== targetId));
  };

  const editRow = (id) => {
    setRowToEdit(id);

    setModalOpen(true);
  };

  const submitForm = (newRow) => {
    const tmpArray = Object.assign(rows);

    if (rowToEdit === null) { 
      tmpArray.push(newRow);
      setRows(tmpArray);
    }
    setRows(
     rows.map((currentRow, id) => {
        if (id == rowToEdit) 
          return newRow;

        return currentRow;
      })
    );
  };

  return(
    <>
        <NavBar/>
        <Grid style={{paddingTop: "100px", paddingLeft: "50px"}}>
          <Typography
              variant={"h1"}
              color={theme.typography.color}
              style={{marginBottom: "1rem", fontSize: "3.75rem", letterSpacing: "-0.025em",
                  fontWeight: 800
              }}
          >{t("dashboard.title")}
          </Typography>
          <Container>

            <Container className="dashboard-header" style={{flexDirection: "row"}}>
              <Button title="Map" onClick={() => setDashboardMap(true)}>Ma map</Button>
              <Button title="Table" onClick={() => setDashboardMap(false)}>Mes lieux</Button>
            </Container>
            <Container style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Container>
                  <Input className="white-element"></Input>
                  <IconButton className="white-element">
                    <SearchIcon/>
                  </IconButton>
                </Container>
                <IconButton className="white-element" onClick={() => setModalOpen(true)}>
                    <AddIcon/>
                </IconButton>
            </Container>
            
            <Container style={{padding: "20px"}}> 
                  { isDashboardMap ? 
                  <Typography
                    variant={"h1"}
                    color={theme.typography.color}
                    style={{marginBottom: "1rem", fontSize: "3.75rem", letterSpacing: "-0.025em",
                        fontWeight: 800
                    }}
                    >{'MAP'}
                  </Typography> :  <MarkerTable rows={rows} editRow={editRow} deleteRow={deleteRow} />}      
            </Container>

          </Container>
        </Grid>
        <FooterComponent/>
        { isModalOpen && <MarkerModal 
          closeModal={() => { 
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={submitForm}
          defaultValue={rowToEdit !== null && rows[rowToEdit]} /> }

    </>
  )
}
