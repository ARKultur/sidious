import React from "react";
import {Box, FormControl, MenuItem, Popper, Select, Typography, useTheme} from "@mui/material";
import {useTranslation} from "react-i18next";

export default function LangSelection(props)
{
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  return (
    <>
      <Popper id={props.id} open={props.open} anchorEl={props.anchor}>
        <Box sx={{ width: "auto", height: "auto", m: 1, p: 2,
          bgcolor: `${theme.palette.mainColor.subMenu}`,
          borderRadius: 2, zIndex: 'tooltip'
        }}>
          <FormControl fullWidth>
            <Typography
              sx={{ color: "white", fontWeight: "light", fontSize: 13, textDecoration: "underline" }}
              disableAnimation={true}
            >{t("language")}</Typography>
            <Select
              labelId="demo-simple-select-label"
              variant={"standard"}
              id="demo-simple-select"
              value={i18n.language}
              onChange={props.handleChange}
              sx={{ color: "white" }}
            >
              <MenuItem
                value={"en"}
                sx={{ }}
              >English</MenuItem>
              <MenuItem
                value={"fr"}
              >Français</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Popper>
    </>
  );
}