import React from "react";
import  ReactDOM  from "react-dom";
import App from "./routes/App";

import { createRoot } from 'react-dom/client';

const container = document.getElementById('App');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

