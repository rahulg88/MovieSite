import React from "react";
import { useGlobleContext } from "./contex";
import ViewListIcon from "@mui/icons-material/ViewList";
import { Card, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

const Movies = () => {
  // Accessing context value
  const { movie, loading } = useGlobleContext();
  return (
    <div>
      <ViewListIcon />
      {loading ? (
        "Loading......"
      ) : (
        <Grid container spacing={2}>
          {movie.map((item) => {
            const { Poster, Title, Type, Year, imdbID } = item;
            return (
              <NavLink to={`movie/${imdbID}`}>
                <Grid item xs={12} sm={6} md={3} lg={3} key={imdbID}>
                  <Card>
                    <img
                      src={Poster}
                      alt={Title}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div style={{ padding: "16px" }}>
                      <p>{Title}</p>
                      <p>{Type}</p>
                      <p>{Year}</p>
                      <p>{imdbID}</p>
                    </div>
                  </Card>
                </Grid>
              </NavLink>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

export default Movies;
