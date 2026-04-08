import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.css";
import { AuthProvider } from "./context/AuthContext";
import { UploadProvider } from "./context/UploadContext";

<AuthProvider>
  <App />
</AuthProvider>

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);