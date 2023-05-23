import React from "react";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Container, IconButton } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import "../styles/component/MarkerTable.css"
import AddIcon from '@mui/icons-material/Add';
import OrgModal from '../component/OrgModal';

const OrganisationsTable = ({rows, addOrg, deleteOrg, editOrg}) => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  return (
    <Container className="table-container">
        <IconButton className="white-element" onClick={() => setModalOpen(true)}>
            <AddIcon/>
        </IconButton>
        <TableContainer>
        <Table aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Address id</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.addressId}</TableCell>
                <TableCell align="right">
                    <IconButton onClick={() => {deleteOrg(row.id)}}>
                        <ClearIcon/>
                    </IconButton>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        { isModalOpen && <OrgModal
          closeModal={() => {
            setModalOpen(false);
          }}
          onSubmit={addOrg}/>
        }
    </Container>
  );
}

export default OrganisationsTable;
