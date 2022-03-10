import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import {MuiApp} from './muiApp/MuiApp';

void App;
ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    <MuiApp />
  </React.StrictMode>,
  document.getElementById("root")
);
