import React, { useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Movies from "./Movies";
import Search from "./Search";
import { Box, Card, Grid } from "@mui/material";
const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Box>
        <Search />
      </Box>
      <Box>
        <Movies />
      </Box>
    </div>
  );
};

export default Home;
