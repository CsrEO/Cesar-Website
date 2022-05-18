import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import About from "./About";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
