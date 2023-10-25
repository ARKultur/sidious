import React from "react";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Container, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import RoomIcon from '@mui/icons-material/Room';
import ClearIcon from "@mui/icons-material/Clear";
import "../styles/component/MarkerTable.css";

export const JourneyTable = ({ rows, showRow, editRow, deleteRow }) => {
  return (
    <Container className="table-container">
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell align="right">Journeys Name</TableCell>
              <TableCell align="right">Afficher</TableCell>
              <TableCell align="right">Modifier</TableCell>
              <TableCell align="right">Supprimer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.map((row, id) => (
                <TableRow key={id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => {
                        showRow(row.id);
                      }}
                    >
                      <RoomIcon />
                    </IconButton>
                  </TableCell>

                  <TableCell align="right">
                    <IconButton
                      onClick={() => {
                        editRow(id);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => {
                        deleteRow(row.id);
                      }}
                    >
                      <ClearIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
