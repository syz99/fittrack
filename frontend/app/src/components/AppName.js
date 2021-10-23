import React from "react";
import { Typography } from "@material-ui/core";

export const API_TYPE_NAME = "SYZ"

export function AppName() {
  return (
    <Typography className="app-bar-title" component="h1" variant="h5">
      {API_TYPE_NAME} Fitness Tracker
    </Typography>
  );
}
