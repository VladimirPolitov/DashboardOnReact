import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import Approuter from "./components/Approuter";


const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Approuter/>
        </BrowserRouter>
    );
};

export default App;
