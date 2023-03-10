import NavBar from "../component/NavBar";
import FooterComponent from "../component/Footer";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useTheme} from "@mui/material";
import * as React from "react";
import {useTranslation} from "react-i18next";
import { makeStyles } from "@mui/styles";
import SendIcon from '@mui/icons-material/Send';

const useStyles = makeStyles({
  select: {
    '&:before': {
      borderColor: 'white',
    },
    '&:after': {
      borderColor: 'white',
    },
    '&:not(.Mui-disabled):hover::before': {
      borderColor: 'white',
    },
  },
  icon: {
    fill: 'white',
  },
  root: {
    color: 'white',
  },
})

export default function Contact()
{
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <NavBar/>
      <div style={{paddingTop: "7rem", paddingLeft: "1rem",
        paddingRight: "1rem", maxWidth: "1280px",
        marginLeft: "auto", marginRight: "auto",
        marginBottom: "2rem"
      }}>
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
        <div>
          <FormControl
            fullWidth
            sx={{mb: 2}}
          >
            <TextField
              id="name"
              label="Name"
              variant="filled"
              helperText={"Write your name"}
              FormHelperTextProps={{
                style: {color: "#FFF"}
              }}
              InputLabelProps={{
                style: {color: "#FFF"}
              }}
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{mb: 2}}
          >
            <InputLabel
              id="category-label"
              sx={{
                  color: "white",
                }}
            >Category</InputLabel>
            <Select
              labelId="category-select"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleChange}
              labelStyle={{ color: '#ffffff' }}
              sx={{
                color: "white",
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(255,255,255)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(255,255,255)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(255,255,255)',
                },
                '.MuiSvgIcon-root ': {
                  fill: "white !important",
                }
              }}
            >
              <MenuItem value={1}>FeedBack</MenuItem>
              <MenuItem value={2}>Bugs</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            sx={{mb: 2}}
          >
            <TextField
              id="mail"
              label="Your email"
              variant="filled"
              type="email"
              helperText={"Write your email"}
              FormHelperTextProps={{
                style: {color: "#FFF"}
              }}
              InputLabelProps={{
                style: {color: "#FFF"}
              }}
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{mb: 2}}
          >
            <TextField
              id="desc"
              label="Description"
              variant="filled"
              multiline
              maxRows={6}
              minRows={2}
              helperText={"Describe your request"}
              FormHelperTextProps={{
                style: {color: "#FFF"}
              }}
              InputLabelProps={{
                style: {color: "#FFF"}
              }}
            />
          </FormControl>
        </div>
        <Button
          variant="outlined"
          startIcon={<SendIcon/>}
          color={"button"}
        >
          Send
        </Button>
      </div>
      <FooterComponent/>
    </div>
  )
}