import NavBar from "../component/NavBar";
import FooterComponent from "../component/Footer";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useTheme} from "@mui/material";
import * as React from "react";
import {useTranslation} from "react-i18next";
import SendIcon from '@mui/icons-material/Send';

export default function Contact()
{
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
              label={t("contact.name")}
              variant="filled"
              helperText={t("contact.nameHelp")}
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
            >{t("contact.category.name")}</InputLabel>
            <Select
              labelId="category-select"
              id="demo-simple-select"
              value={category}
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
              label={t("contact.email")}
              variant="filled"
              type="email"
              helperText={t("contact.emailHelp")}
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
              label={t("contact.description")}
              variant="filled"
              multiline
              maxRows={6}
              minRows={2}
              helperText={t("contact.descriptionHelp")}
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
          {t("contact.send")}
        </Button>
      </div>
      <FooterComponent/>
    </div>
  )
}