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

  // nginx:
  //   image: nginx:stable-alpine
  //   build:
  //     context: ./nginx  # Adjust the context path based on your NGINX Dockerfile location
  //     dockerfile: Dockerfile  # Adjust the Dockerfile name if needed
  //   ports:
  //     - "80:80"  # Expose NGINX on port 80
  //   depends_on:
  //     - api
  //   volumes:
  //     - ./nginx/nginx.conf:/etc/nginx/conf.d/default.conf:ro
