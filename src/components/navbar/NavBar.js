import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PixaBay Image Finder
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
