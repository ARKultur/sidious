import React from "react";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Box, Button, Container, IconButton, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import "../styles/component/MarkerTable.css";
import { CheckBox } from "@mui/icons-material";

const NewsletterForm = ({}) => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  return (
    <Container
      className="table-container"
      sx={{
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          mt: 4,
          flexDirection: "column",
          gap: 5,
          width: "100%",
        }}
      >
        <TextField
          id="outlined-disabled"
          label="Subject"
          defaultValue="Subject"
        />

        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={6}
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget nisl. Nulla facilisi. Sed euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget nisl. Nulla facilisi. Sed euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget nisl. Nulla facilisi. Sed euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget nisl. Nulla facilisi. Sed euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget nisl. Nulla facilisi. Sed euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget nisl. Nulla facilisi."
        />

        <Button
          variant="contained"
          color="secondary"
          sx={{
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          Send
        </Button>
      </Box>
    </Container>
  );
};

const NewsletterTable = ({}) => {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState([]);
  const [selected, setSelected] = React.useState(false);

  return (
    <Container className="table-container">
      {step === 0 ? (
        <>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">Username</TableCell>
                  <TableCell align="right">Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={"0"}>
                  <TableCell component="th" scope="row">
                    <CheckBox
                      checked={selected}
                      onChange={() => setSelected(!selected)}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {"0"}
                  </TableCell>
                  <TableCell align="right">{"Prenom Nom"}</TableCell>
                  <TableCell align="right">{"email@email.com"}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Button
            variant="contained"
            color="info"
            onClick={() => setStep(1)}
            sx={{
              mt: 2,
              mb: 2,
              alignSelf: "center",
            }}
          >
            Next
          </Button>
        </>
      ) : (
        <NewsletterForm />
      )}
    </Container>
  );
};

export default NewsletterTable;
