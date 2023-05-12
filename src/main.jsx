import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalProvider } from "./utils/Context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ModalProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ModalProvider>
);
