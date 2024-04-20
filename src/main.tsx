import React from "react";
import ReactDOM from "react-dom/client";
import ConnectButton from "./button-component/connectWallet.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App>
      <ConnectButton />
    </App>
  </React.StrictMode>
);
