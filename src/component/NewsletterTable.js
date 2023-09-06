import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { CheckBox } from "@mui/icons-material";
import { Box, Button, Container, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { getSubbedToNewsletter, sendNewsletter } from "../API/Newsletter";
import "../styles/component/MarkerTable.css";

const NewsletterForm = ({ setStep }) => {
  const [fields, setFields] = React.useState({
    subject: "",
    text: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await sendNewsletter(fields);
      setStep(2);
    } catch (e) {
      console.log(e);
    }
  };

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
          value={fields.subject}
          onChange={(e) => setFields({ ...fields, subject: e.target.value })}
        />

        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={6}
          value={fields.text}
          onChange={(e) => setFields({ ...fields, text: e.target.value })}
        />

        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              alignSelf: "center",
              justifyContent: "center",
            }}
            onClick={() => setStep(0)}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            color="secondary"
            sx={{
              alignSelf: "center",
              justifyContent: "center",
            }}
            onClick={handleSubmit}
          >
            Send
          </Button>
        </div>
      </Box>
    </Container>
  );
};

const TableItem = ({ account }) => {
  const [selected, setSelected] = React.useState(false);

  const handleChange = (event) => {
    setSelected(event.target.checked);
  };

  return (
    <TableRow key={account.id}>
      <TableCell align="center">{account.email}</TableCell>
    </TableRow>
  );
};

const NewsletterTable = () => {
  const [step, setStep] = React.useState(0);
  const [accounts, setAccounts] = React.useState([]);

  const getData = async () => {
    const data = await getSubbedToNewsletter();

    setAccounts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (accounts.length === 0) {
    return (
      <Container className="table-container" style={{ padding: 30 }}>
        <h1>No accounts found.</h1>
      </Container>
    );
  }

  return (
    <Container className="table-container">
      {step === 0 && (
        <>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {accounts.map((account) => (
                  <TableItem account={account} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              color="info"
              onClick={() => setStep(1)}
              sx={{
                mt: 2,
                mb: 2,
              }}
            >
              Next
            </Button>
          </div>
        </>
      )}
      {step === 1 && <NewsletterForm setStep={setStep} />}
      {step === 2 && (
        <Container className="table-container" style={{ padding: 30 }}>
          <h1>Newsletter has been sent.</h1>
        </Container>
      )}
    </Container>
  );
};

export default NewsletterTable;
