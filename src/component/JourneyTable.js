import React from "react";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Container, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import RoomIcon from "@mui/icons-material/Room";
import ClearIcon from "@mui/icons-material/Clear";
import "../styles/component/MarkerTable.css";

export const JourneyTable = ({
  rows,
  showRow,
  editRow,
  deleteRow,
  withoutAction,
}) => {
  return (
  
    <Container className="table-container">
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {withoutAction ? (
                <>
                  <TableCell align="center">S.no</TableCell>
                  <TableCell align="center">Journeys Name</TableCell>
                </>
              ) : (
                <>
                  <TableCell>S.no</TableCell>
                  <TableCell align="right">Journeys Name</TableCell>
                  <TableCell align="right">Afficher</TableCell>
                 {/*<TableCell align="right">Modifier</TableCell>*/}
                  <TableCell align="right">Supprimer</TableCell>
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.map((row, id) => (
                <TableRow key={id}>
                  {withoutAction ? (
                    <>
                      <TableCell align="center" component="th" scope="row">
                        {id}
                      </TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell component="th" scope="row">
                        {id}
                      </TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() => {
                            showRow(row.uuid);
                          }}
                        >
                          <RoomIcon />
                        </IconButton>
                      </TableCell>

                    {/*  <TableCell align="right">
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
                    </>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};