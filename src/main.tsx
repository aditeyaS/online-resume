import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import OnlineResume from "./sections/OnlineResume.tsx";
import userData from "./user-data.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OnlineResume userData={userData} />
  </React.StrictMode>
);
