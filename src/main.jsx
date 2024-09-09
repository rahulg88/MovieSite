import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./MovieWebsite/contex.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <AppProvider>
      <App />
    </AppProvider>
  </Router>
);
