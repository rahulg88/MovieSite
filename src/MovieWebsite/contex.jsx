import React, { useContext, useEffect, useState } from "react";
const API_URl = "https://www.omdbapi.com/?i=tt3896198&apikey=1518eef&s=titanic";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoding] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
        setLoding(false);
        setMovie(data.Search);
      } else {
        setIsError({ show: true, msg: data.Error });
      }
    } catch (Error) {
      console.log(Error.message);
    }
  };

  useEffect(() => {
    getMovies(API_URl);
  }, []);
  return (
    <AppContext.Provider value={{ isError, loading, movie }}>
      {children}
    </AppContext.Provider>
  );
};
const useGlobleContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useGlobleContext };
