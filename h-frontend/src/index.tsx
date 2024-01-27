import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/general/App/App";
import { theme } from "constants/theme";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
