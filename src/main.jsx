import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )