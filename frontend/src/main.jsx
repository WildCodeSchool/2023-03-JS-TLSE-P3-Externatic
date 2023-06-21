import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { MenuContextProvider } from "./contexts/MenuContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MenuContextProvider>
      <App />
    </MenuContextProvider>
  </React.StrictMode>
);
