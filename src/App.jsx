import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./MovieWebsite/Home";
import SingleMovie from "./MovieWebsite/SingleMovie";
import Error from "./MovieWebsite/Error";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<SingleMovie />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
