import React from "react";
import {Divider, List, Typography, useTheme} from "@mui/material";
import PlaceElement from "./PlaceElement";

export default function PlaceList()
{
  const theme = useTheme();
  return (
    <div style={{maxWidth: "400px", minWidth: "220px"}}>
      <Typography
        color={theme.typography.color}
        variant={"h4"}
      >Your places</Typography>
      <Divider/>
      <List>
        <PlaceElement
          title={"placeholder"}
          desc={"placeholder"}
        />
        
      </List>
    </div>
  )
}