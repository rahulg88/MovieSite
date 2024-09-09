import React, { useContext } from "react";

import Movies from "./Movies";
import { Card, Grid } from "@mui/material";
const Home = () => {
  return (
    <div>
      <h2>I have just made some changes to this application</h2>
      <Grid container spacing={2} sx={{ width: "100%" }}>
        <Grid item xs={12} sm={6} md={12} lg={12}>
          <Movies />{" "}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
