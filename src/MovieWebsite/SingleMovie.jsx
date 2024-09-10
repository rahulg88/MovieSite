import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";

const apiKey = import.meta.env.VITE_API_KEY;
const API_URL = `https://www.omdbapi.com/?apikey=${apiKey}`;

const SingleMovie = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null); // Changed initial state to null
  const [error, setError] = useState({ show: false, msg: "" });

  const getMovies = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setMovie(data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError({
        show: true,
        msg: "Something went wrong. Please try again later.",
      });
    }
  };

  useEffect(() => {
    const timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 20);
    return () => clearTimeout(timerOut);
  }, [id]);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  if (error.show) {
    return <h1>{error.msg}</h1>;
  }

  return (
    <section>
      <Box sx={{ marginTop: "30px", padding: "20px" }}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained" sx={{ mb: 3 }}>
            Back to Homepage
          </Button>
        </NavLink>
        {movie && (
          <Card sx={{ maxWidth: 900, margin: "auto", p: 2 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    {movie.Title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    gutterBottom
                  >
                    {movie.Year} | {movie.Rated} | {movie.Runtime}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Director:</strong> {movie.Director}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Writer:</strong> {movie.Writer}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Actors:</strong> {movie.Actors}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Plot:</strong> {movie.Plot}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        )}
      </Box>
    </section>
  );
};

export default SingleMovie;
