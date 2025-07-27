import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TempProvider from "./hooks/contexts/temp-data.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TempProvider>
      <div className="theme">
        <App />
      </div>
    </TempProvider>
  </StrictMode>
);
