import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoutes } from "./routes";

import ThemeContextProvider from "./hooks/useTheme";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AppRoutes />
    </ThemeContextProvider>
  </React.StrictMode>
);
