import React from "react";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Container, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import "../styles/component/MarkerTable.css"
import UserModal from "./UserModal";

const UsersTable = ({rows, editUser, deleteUser}) => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [modal, setModal] = React.useState(<></>);
  const createModal = (id) => {
      setModal(<UserModal userId={id}
          closeModal={() => setModalOpen(false)}
          onSubmit={editUser}/>
      )
  }

  return (
    <Container className="table-container">
        <TableContainer>
        <Table aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell align="right">Username</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Password</TableCell>
                <TableCell align="right">Address Id</TableCell>
                <TableCell align="right">Organisation Id</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell align="right">{row.username}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.password}</TableCell>
                <TableCell align="right">{row.addressId}</TableCell>
                <TableCell align="right">{row.OrganisationId}</TableCell>
                <TableCell align="right">
                    <IconButton onClick={() => {
                        createModal(row.id);
                        setModalOpen(true);
                    }}>
                        <EditIcon/>
                    </IconButton>
                </TableCell>
                <TableCell align="right">
                    <IconButton onClick={() => {deleteUser(row.id)}}>
                        <ClearIcon/>
                    </IconButton>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        { isModalOpen && modal }
    </Container>
  );
}

export default UsersTable;
