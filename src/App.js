import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/navbar/Navbar";



const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/posts" element={<Posts/>}/>
                </Routes>
        </BrowserRouter>
    );
};

export default App;
