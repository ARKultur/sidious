import { Box, Container, Input, Pagination, TextField } from "@mui/material";
import React from "react";
import "../styles/component/MarkerTable.css";
import SearchIcon from "@mui/icons-material/Search";

const ContactTable = ({}) => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  return (
    <Container className="table-container" sx={{
      paddingTop: "2rem",
      paddingBottom: "2rem",
    }}>
      <Input
        placeholder="Search"
        sx={{
          alignSelf: "center",
          justifyContent: "center",
        }}
        endAdornment={<SearchIcon />}
      />

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
          id="outlined-disabled"
          label="Email"
          defaultValue="email@email.com"
        />

        <TextField
          disabled
          id="outlined-disabled"
          label="Nom Prénom"
          defaultValue="Nom Prénom"
        />

        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          disabled
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget nisl. Nulla facilisi. Sed euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget nisl. Nulla facilisi. Sed euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget nisl. Nulla facilisi. Sed euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget nisl. Nulla facilisi. Sed euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget nisl. Nulla facilisi. Sed euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget nisl. Nulla facilisi."
        />

        <Pagination
          count={10}
          sx={{
            alignSelf: "center",
            justifyContent: "center",
          }}
        />
      </Box>
    </Container>
  );
};

export default ContactTable;
