import React from "react";
import Home from './home';
import Addpage from './Addpage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Redirect = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="addpage" element={<Addpage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Redirect;