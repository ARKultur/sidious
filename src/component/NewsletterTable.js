import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { CheckBox } from '@mui/icons-material';
import { Box, Button, Container, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { getSubbedToNewsletter, sendNewsletter } from '../API/Newsletter';
import '../styles/component/MarkerTable.css';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../styles/component/MarkerTable.css';

const NewsletterForm = ({ setStep }) => {
  const [fields, setFields] = React.useState({
    subject: '',
    text: '',
  });
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

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
      className='table-container'
      sx={{
        paddingTop: '2rem',
        paddingBottom: '2rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          mt: 4,
          flexDirection: 'column',
          gap: 5,
          width: '100%',
        }}
      >
        <TextField
          id='outlined-disabled'
          label='Subject'
          defaultValue='Subject'
        />

        <div
          style={{ border: '1px solid grey', padding: 20, borderRadius: 20 }}
        >
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            toolbarClassName='toolbarClassName'
            wrapperClassName='wrapperClassName'
            editorClassName='editorClassName'
          />
        </div>

        <Button
          variant='contained'
          color='secondary'
          sx={{
            alignSelf: 'center',
            justifyContent: 'center',
          }}
        >
          Send
        </Button>
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
      <TableCell align='center'>{account.email}</TableCell>
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
      <Container className='table-container' style={{ padding: 30 }}>
        <h1>No accounts found.</h1>
      </Container>
    );
  }

  return (
    <Container className='table-container'>
      {step === 0 && (
        <>
          <TableContainer>
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {accounts.map((account) => (
                  <TableItem account={account} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Button
            variant='contained'
            color='info'
            onClick={() => setStep(1)}
            sx={{
              mt: 2,
              mb: 2,
              alignSelf: 'center',
            }}
          >
            Next
          </Button>
        </>
      )}
      {step === 1 && <NewsletterForm setStep={setStep} />}
      {step === 2 && (
        <Container className='table-container' style={{ padding: 30 }}>
          <h1>Newsletter has been sent.</h1>
        </Container>
      )}
    </Container>
  );
};

export default NewsletterTable;
