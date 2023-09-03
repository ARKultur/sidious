import { Box, Container, Pagination, TextField } from "@mui/material";
import React, { useEffect } from "react";
import "../styles/component/MarkerTable.css";
import { getContacts } from "../API/Contact";

const ContactTable = () => {
  const [contacts, setContacts] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [fields, setFields] = React.useState({
    email: "",
    name: "",
    category: 0,
    description: "",
  });

  const getData = async () => {
    const data = await getContacts();

    setContacts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFields({
      email: contacts && contacts[page - 1] && contacts[page - 1].email,
      name: contacts && contacts[page - 1] && contacts[page - 1].name,
      category: contacts && contacts[page - 1] && contacts[page - 1].category,
      description:
        contacts && contacts[page - 1] && contacts[page - 1].description,
    });
  }, [page, contacts]);

  console.log(contacts && contacts[page - 1] && contacts[page - 1].email);

  if (!contacts || !contacts.length || !fields) {
    console.log("okokokoko");
    return <div>Loading...</div>;
  } else if (contacts.length === 0) {
    return <div>No data</div>;
  }

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
          disabled
          label="Email"
          variant="filled"
          value={fields && fields.email}
          onChange={(e) => setFields({ ...fields, email: e.target.value })}
        />

        <TextField
          disabled
          label="Username"
          variant="filled"
          value={fields && fields.name}
          onChange={(e) => setFields({ ...fields, email: e.target.value })}
        />

        <TextField
          disabled
          label="Category"
          variant="filled"
          value={fields && fields.category === 1 ? "Feedback" : "Bug report"}
          onChange={(e) => setFields({ ...fields, email: e.target.value })}
        />

        <TextField
          label="Message"
          variant="filled"
          multiline
          rows={4}
          disabled
          value={fields && fields.description}
          onChange={(e) => setFields({ ...fields, email: e.target.value })}
        />

        <Pagination
          count={(contacts && contacts.length) || 0}
          sx={{
            alignSelf: "center",
            justifyContent: "center",
          }}
          onChange={(_, value) => setPage(value)}
        />
      </Box>
    </Container>
  );
};

export default ContactTable;
