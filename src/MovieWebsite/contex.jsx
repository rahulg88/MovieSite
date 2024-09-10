import React, { useContext, useEffect, useState } from "react";
// const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

// console.log("API URL:", apiUrl);
// console.log("API Key:", apiKey);
export const API_URl = `https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoding] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [query, setQuery] = useState("titanic");
  const getMovies = async (url) => {
    setLoding(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
        setLoding(false);
        setMovie(data.Search);
      } else {
        ({ show: true, msg: data.Error });
      }
    } catch (Error) {
      console.log(Error.message);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URl}&s=${query}`);
      return () => clearTimeout(timerOut);
    }, 800);
  }, [query]);
  return (
    <AppContext.Provider value={{ isError, loading, movie, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
const useGlobleContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useGlobleContext };
