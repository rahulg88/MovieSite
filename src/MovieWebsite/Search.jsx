import React, { useState, useEffect } from "react";
import { useGlobleContext } from "./contex";
import { Box } from "@mui/material";

const Search = () => {
  const { query, setQuery, isError, setIsError } = useGlobleContext(); // Assume setIsError is available in context

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    // Check if the search field is empty
    if (value.trim() === "") {
      setIsError({ show: true, message: "Search field cannot be empty" });
    } else {
      setIsError({ show: false, message: "" });
    }
  };

  return (
    <section>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <Box>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search..."
            style={{
              padding: "10px",
              width: "200px",
              height: "20px",
              borderRadius: "15px",
            }}
          />
        </Box>
        <Box>
          {/* Error handling */}
          {isError.show && <p style={{ color: "red" }}>{isError.message}</p>}
        </Box>
      </form>
    </section>
  );
};

export default Search;
