import React from "react";
import {Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, Typography, useTheme} from "@mui/material";
import Logo from "../../resources/images/logo.svg"
import EditIcon from '@mui/icons-material/Edit';

export default function PlaceElement(props)
{
  const theme = useTheme();

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="edit"
          style={{color: `${theme.palette.primary.contrastText}`}}
        >
          <EditIcon />
        </IconButton>
      }
      disableGutters={true}
    >
      <ListItemAvatar>
        <Avatar
          alt={props.title} src={Logo}
          sx={{ width: 48, height: 48 }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={<Typography
          color={"white"}
          variant={"h6"}
        >{props.title}</Typography>}
        secondary={<Typography
          color={"white"}
          variant={"subtitle2"}
        >{props.title}</Typography>}
      />
    </ListItem>
  )
}