// Import React
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import style
import '../styles/main.scss';

// Import componenets
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import pages
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";


function Router() {

    return (
        <React.StrictMode>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="*" element={<PageNotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default Router