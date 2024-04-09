import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";
import { Box } from "@mui/material";

import "./App.css";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar />
      <Search />
    </Box>
  );
}

export default App;
