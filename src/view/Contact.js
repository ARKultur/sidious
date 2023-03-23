import NavBar from "../component/NavBar";
import FooterComponent from "../component/Footer";
import {
  AlertTitle,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
  useTheme
} from "@mui/material";
import * as React from "react";
import {useTranslation} from "react-i18next";
import SendIcon from '@mui/icons-material/Send';
import axios from "axios";
import {Alert, LoadingButton} from "@mui/lab";
import CloseIcon from '@mui/icons-material/Close';

function Title() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <div>
      <Typography
        variant={"h1"}
        color={theme.typography.color}
        style={{marginBottom: "1rem", fontSize: "3.75rem", letterSpacing: "-0.025em",
          fontWeight: 800
        }}
      >{t("contact.title")}</Typography>
      <Typography
        color={theme.palette.greyText}
        style={{fontSize: "1.25rem", lineHeightStep: "1.75rem", fontWeight: 300,
          maxWidth: "42rem"
        }}
      >{t("contact.subtitle")}</Typography>
    </div>
  )
}

function FeedBack(props) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const { t } = useTranslation();
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}>
        <h2 id="parent-modal-title">{t("contact.closeTitle")}</h2>
        <p id="parent-modal-description">
          {t("contact.closeText")}
        </p>
        <Button
          color={"button"}
          startIcon={<CloseIcon />}
          variant="outlined"
          onClick={() => {handleClose()}}
        >
          {t("contact.close")}
        </Button>
      </Box>
    </Modal>
  )
}

export default function Contact()
{
  const { t } = useTranslation();
  const [category, setCategory] = React.useState('');
  const [feedback, setFeedBack] = React.useState(false);
  const [error, setError] = React.useState({message: "", name: false, email: false, desc: false, cat: false})
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState({name: "", description: "", email: ""});
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  
  function send() {
    setLoading(true);
    if ((data.description === "" && data.name === "" && data.email === "") || category === '') {
      setError({
        ...error,
        name: data.name === "",
        desc: data.description === "",
        email: data.email === "",
        cat: category === "",
      })
      console.log(data.name );
      console.log(data.email);
      console.log(data.description);
      console.log(category);
      setLoading(false);
      return;
    }
    axios.post('https://arktest.creative-rift.com/api/contact',{
      name: data.name,
      category: category,
      description: data.description,
      email: data.email,
    }).then(() => {
      setFeedBack(true);
    }).catch(() => {
    }).finally(() => {
        setLoading(false);
    })
  }
  return (
    <div>
      <NavBar/>
      <div style={{paddingTop: "7rem", paddingLeft: "1rem",
        paddingRight: "1rem", maxWidth: "1280px",
        marginLeft: "auto", marginRight: "auto",
        marginBottom: "2rem"
      }}>
        <Title/>
        {error.message &&
          <Alert
            severity="error"
            sx={{mb: 2, mt: 2}}
            onClose={() => {
              setError({
                ...error,
                message: "",
              })
            }}
          >
            <AlertTitle>{t("contact.errorTitle")}</AlertTitle>
            {t("contact.error")}
          </Alert>
        }
        <div>
          <FormControl
            fullWidth
            sx={{mb: 2}}
          >
            <TextField
              id="name"
              required
              label={t("contact.name")}
              variant="filled"
              helperText={t("contact.nameHelp")}
              error={error.name}
              sx={{ input: { color: '#9CA3AF' } }}
              onChange={(event) => {
                setData({
                  ...data,
                  name: event.target.value,
                })}}
              focused
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{mb: 2}}
            error={error.cat}
          >
            <InputLabel
              id="category-label"
              sx={{
                  color: "#9CA3AF",
                }}
            >{t("contact.category.name")}</InputLabel>
            <Select
              labelId="category-select"
              required
              id="demo-simple-select"
              value={category}
              onChange={handleChange}
              sx={{
                color: "#9CA3AF",
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(156, 153, 175)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(156, 153, 175)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(156, 153, 175)',
                },
                '.MuiSvgIcon-root ': {
                  fill: 'rgb(156, 153, 175) !important',
                }
              }}
            >
              <MenuItem value={1}>{t("contact.category.item1")}</MenuItem>
              <MenuItem value={2}>{t("contact.category.item2")}</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            sx={{mb: 2}}
          >
            <TextField
              id="mail"
              required
              error={error.email}
              label={t("contact.email")}
              variant="filled"
              type="email"
              helperText={t("contact.emailHelp")}
              sx={{ input: { color: '#9CA3AF' } }}
              onChange={(event) => {
                setData({
                  ...data,
                  email: event.target.value,
                })}}
              focused
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{mb: 2}}
          >
            <TextField
              id="desc"
              required
              label={t("contact.description")}
              variant="filled"
              multiline
              error={error.desc}
              maxRows={6}
              minRows={2}
              helperText={t("contact.descriptionHelp")}
              sx={{ input: { color: '#9CA3AF' } }}
              onChange={(event) => {
                setData({
                  ...data,
                  description: event.target.value,
                })}}
              focused
            />
          </FormControl>
        </div>
        <LoadingButton
          loading={loading}
          color={"button"}
          loadingPosition="start"
          startIcon={<SendIcon />}
          variant="outlined"
          onClick={() => {send()}}
        >
          {t("contact.send")}
        </LoadingButton>
      </div>
      <FeedBack
        open={feedback}
        setOpen={setFeedBack}
      />
      <FooterComponent/>
    </div>
  )
}