import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ClearIcon from '@mui/icons-material/Clear';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import {
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import Modal from '@mui/material/Modal';
import React, { useEffect } from 'react';

import {
  addSuggestions,
  deleteSuggestions,
  editSuggestions,
  getSuggestions,
} from '../API/Suggestions';
import '../styles/component/MarkerTable.css';

const SuggestionModal = ({ isModalOpen, handleClose, suggestion }) => {
  const [fields, setFields] = React.useState({
    name: suggestion && suggestion.name,
    tag: suggestion && suggestion.tag,
    description: suggestion && suggestion.description,
    imageUrl: suggestion && suggestion.imageUrl,
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await editSuggestions(fields);
      handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal
      open={isModalOpen}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      onClose={handleClose}
    >
      <Container className='modal-container'>
        <Container className='modal-body'>
          <Container className='modal-header'>
            <Typography
              variant={'h1'}
              color={'black'}
              style={{
                marginBottom: '1rem',
                fontSize: '3.75rem',
                letterSpacing: '-0.025em',
                fontWeight: 800,
              }}
            >
              Edit suggestion N°{suggestion && suggestion.id}
            </Typography>
            <IconButton onClick={() => handleClose()}>
              <CloseIcon />
            </IconButton>
          </Container>

          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              name='name'
              defaultValue={fields.name}
              onChange={(e) => setFields({ ...fields, name: e.target.value })}
              label='Name'
            />
            <br />
            <TextField
              name='tag'
              defaultValue={fields.tag}
              onChange={(e) => setFields({ ...fields, tag: e.target.value })}
              label='TAG'
            />
            <br />
            <TextField
              name='description'
              defaultValue={fields.description}
              onChange={(e) =>
                setFields({ ...fields, description: e.target.value })
              }
              label='Description'
            />
            <br />
            <TextField
              name='Image'
              defaultValue={fields.imageUrl}
              onChange={(e) =>
                setFields({ ...fields, imageUrl: e.target.value })
              }
              label='Image'
            />
            <br />
            <Button className='modal-btn' onClick={handleSubmit}>
              Soumettre
            </Button>
          </form>
        </Container>
      </Container>
    </Modal>
  );
};

const AddSuggestionModal = ({ isModalOpen, handleClose }) => {
  const [fields, setFields] = React.useState({
    name: null,
    tag: null,
    description: null,
    imageUrl: null,
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await addSuggestions(fields);
      handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal
      open={isModalOpen}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      onClose={handleClose}
    >
      <Container className='modal-container'>
        <Container className='modal-body'>
          <Container className='modal-header'>
            <Typography
              variant={'h1'}
              color={'black'}
              style={{
                marginBottom: '1rem',
                fontSize: '3.75rem',
                letterSpacing: '-0.025em',
                fontWeight: 800,
              }}
            >
              Add a suggestion
            </Typography>
            <IconButton onClick={() => handleClose()}>
              <CloseIcon />
            </IconButton>
          </Container>

          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              name='name'
              defaultValue={fields.name}
              onChange={(e) => setFields({ ...fields, name: e.target.value })}
              label='Name'
            />
            <br />
            <TextField
              name='tag'
              defaultValue={fields.tag}
              onChange={(e) => setFields({ ...fields, tag: e.target.value })}
              label='TAG'
            />
            <br />
            <TextField
              name='description'
              defaultValue={fields.description}
              onChange={(e) =>
                setFields({ ...fields, description: e.target.value })
              }
              label='Description'
            />
            <br />
            <TextField
              name='Image'
              defaultValue={fields.imageUrl}
              onChange={(e) =>
                setFields({ ...fields, imageUrl: e.target.value })
              }
              label='Image'
            />
            <br />
            <Button className='modal-btn' onClick={handleSubmit}>
              Soumettre
            </Button>
          </form>
        </Container>
      </Container>
    </Modal>
  );
};

const SuggestionDeleteModal = ({ isModalOpen, handleClose, suggestion }) => {
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await deleteSuggestions(suggestion.id);
      handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal
      open={isModalOpen}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      onClose={handleClose}
    >
      <Container className='modal-container'>
        <Container className='modal-body'>
          <Container className='modal-header'>
            <Typography
              variant={'h3'}
              color={'black'}
              style={{
                marginBottom: '1rem',
                fontSize: '3.75rem',
                letterSpacing: '-0.025em',
                fontWeight: 800,
              }}
            >
              Remove suggestion N°{suggestion && suggestion.id} ?
            </Typography>
            <IconButton onClick={() => handleClose()}>
              <CloseIcon />
            </IconButton>
          </Container>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 20,
              justifyContent: 'center',
            }}
          >
            <Button variant='outlined' color='error' onClick={handleSubmit}>
              Supprimer
            </Button>
            <Button className='modal-btn' onClick={handleClose}>
              Annuler
            </Button>
          </div>
        </Container>
      </Container>
    </Modal>
  );
};

const SuggestionsTable = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isModalAddOpen, setModalAddOpen] = React.useState(false);
  const [isModalDeleteOpen, setModalDeleteOpen] = React.useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = React.useState(null);
  const [suggestions, setSuggestions] = React.useState([]);

  const getData = async () => {
    const data = await getSuggestions();

    setSuggestions(data);
  };

  const handleClose = () => setModalOpen(false);
  const handleDeleteClose = () => setModalDeleteOpen(false);
  const handleAddClose = () => setModalAddOpen(false);

  useEffect(() => {
    getData();
  }, []);

  if (!suggestions) {
    return <Container className='table-container'>Loading...</Container>;
  } else if (suggestions.length === 0) {
    return (
      <Container
        className='table-container'
        sx={{
          paddingTop: '2rem',
          paddingBottom: '2rem',
          justifyContent: 'space-between',
          display: 'flex',
        }}
      >
        <h3>No suggestions found.</h3>
        <Button
          variant='contained'
          color='primary'
          onClick={() => setModalAddOpen(true)}
        >
          Add a suggestion
        </Button>
        <AddSuggestionModal
          isModalOpen={isModalAddOpen}
          handleClose={handleAddClose}
        />
      </Container>
    );
  }

  return (
    <Container className='table-container'>
      <Container
        sx={{
          paddingTop: '2rem',
          paddingBottom: '2rem',
          justifyContent: 'flex-end',
          display: 'flex',
        }}
      >
        <Button
          variant='contained'
          color='primary'
          onClick={() => setModalAddOpen(true)}
        >
          Add a suggestion
        </Button>
        <AddSuggestionModal
          isModalOpen={isModalAddOpen}
          handleClose={handleAddClose}
        />
      </Container>
      <TableContainer>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell align='right'>Nom</TableCell>
              <TableCell align='right'>TAG</TableCell>
              <TableCell align='right'>Description</TableCell>
              <TableCell align='right'>Image</TableCell>
              <TableCell align='right'></TableCell>
              <TableCell align='right'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {suggestions.map((row, index) => (
              <TableRow key={index}>
                <TableCell component='th' scope='row'>
                  {row.id}
                </TableCell>
                <TableCell align='right'>{row.name}</TableCell>
                <TableCell align='right'>{row.tag}</TableCell>
                <TableCell align='right'>{row.description}</TableCell>
                <TableCell align='right'>
                  <img
                    src={row.imageUrl}
                    alt={row.name}
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                      borderRadius: '50%',
                    }}
                  />
                </TableCell>
                <TableCell align='right'>
                  <IconButton
                    onClick={() => {
                      setSelectedSuggestion(row);
                      setModalOpen(true);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell align='right'>
                  <IconButton
                    onClick={() => {
                      setSelectedSuggestion(row);
                      setModalDeleteOpen(true);
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
      {isModalOpen && (
        <SuggestionModal
          isModalOpen={isModalOpen}
          handleClose={handleClose}
          suggestion={selectedSuggestion}
        />
      )}
      {isModalDeleteOpen && (
        <SuggestionDeleteModal
          isModalOpen={isModalDeleteOpen}
          handleClose={handleDeleteClose}
          suggestion={selectedSuggestion}
        />
      )}
    </Container>
  );
};

export default SuggestionsTable;
