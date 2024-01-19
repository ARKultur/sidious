import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Container, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import "../../styles/component/MarkerTable.css";
import { AdminMarkerModal } from "./MarkerModal";

export const AdminMarkerTable = ({ rows, editMarker, deleteMarker }) => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const markerStates = useSelector((state) => state.rootReducer.markerReducer);
  const [rowToEdit, setRowToEdit] = React.useState(null);
 
  const deleteRow = (targetId) => {
    deleteMarker(rows[targetId]);
  };

  const editRow = (id) => {
    setRowToEdit(id);

    setModalOpen(true);
  };

  const submitForm = (newRow) => {
    rows.map((marker, id) => {
      if (id === rowToEdit) {
        editMarker(newRow);
      }
    });
  }
    
  
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
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Order</TableCell>
             {/* <TableCell align="right">Modifier</TableCell>*/}
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
                  <TableCell align="right">{row.node.status}</TableCell>
                  <TableCell align="right">{row.order}</TableCell>
                  {/*<TableCell align="right">
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
      { isModalOpen && <AdminMarkerModal 
      
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={submitForm}
          defaultValue={rowToEdit !== null && rows[rowToEdit].node}
        />
      }
    </Container>
    
  );
};
