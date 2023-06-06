import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StoreProvider } from "./context/context";
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <Analytics />
        <App />
      </Router>
    </StoreProvider>
    <Analytics />
  </React.StrictMode>
);
