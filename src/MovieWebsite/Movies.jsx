import React, { useEffect } from "react";
import { useGlobleContext } from "./contex";
import { Box, Card, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import ReactGA from "react-ga";

const Movies = () => {
  const { movie, loading } = useGlobleContext();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  if (loading) {
    return <h2>Loading......</h2>;
  }

  return (
    <Box sx={{ px: 2 }}>
      <Grid container spacing={4} justifyContent="center">
        {movie && movie.length > 0 ? (
          movie.map((item) => {
            const { Poster, Title, Type, Year, imdbID } = item;
            const movieTitle =
              Title.length > 15 ? `${Title.substring(0, 15)}...` : Title;

            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={imdbID}>
                <NavLink
                  to={`movie/${imdbID}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      p: 2,
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "100%",
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h6" noWrap>
                      {movieTitle}
                    </Typography>

                    <img
                      src={
                        Poster !== "N/A" ? Poster : "path_to_fallback_image.jpg"
                      }
                      alt={movieTitle}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "300px",
                        // objectFit: "cover",
                      }}
                    />
                  </Card>
                </NavLink>
              </Grid>
            );
          })
        ) : (
          <div style={{ marginTop: "25px", color: "red" }}>
            <Typography variant="h6">No movies found</Typography>
          </div>
        )}
      </Grid>
    </Box>
  );
};

export default Movies;
