import React from "react";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Container, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import "../styles/component/MarkerTable.css";

export const MarkerTable = ({ rows, editRow, deleteRow }) => {
  return (
    <Container className="table-container">
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Latitude</TableCell>
              <TableCell align="right">Longitude</TableCell>
              <TableCell align="right">Altitude</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Order</TableCell>
              {/*<TableCell align="right">Modifier</TableCell>*/}
              <TableCell align="right">Supprimer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.map((row, id) => (
                <TableRow key={id}>
                  <TableCell component="th" scope="row">
                    {id}
                  </TableCell>
                  <TableCell align="right">{row.node.name}</TableCell>
                  <TableCell align="right">{row.node.description}</TableCell>
                  <TableCell align="right">{row.node.longitude}</TableCell>
                  <TableCell align="right">{row.node.latitude}</TableCell>
                  <TableCell align="right">{row.node.altitude}</TableCell>
                  <TableCell align="right">{row.node.status}</TableCell>
                  <TableCell align="right">{row.order}</TableCell>
                 {/* <TableCell align="right">
                    <IconButton
                      onClick={() => {
                        editRow(id);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    </TableCell>*/}
                  <TableCell align="right">
                    <IconButton
                      onClick={() => {
                        deleteRow(id);
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
