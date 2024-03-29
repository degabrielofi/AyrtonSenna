import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "pages/Home";
import History from "pages/History";
import Idol from "pages/Idol";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/idol" element={<Idol />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
