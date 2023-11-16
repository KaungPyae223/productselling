import React from 'react';
import {Route, Routes} from "react-router";
import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx";
import Nav from "./Component/Nav.jsx";

const App = () => {
    return (
        <>
            <Nav/>
            <Routes>
                 <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>

            </Routes>
        </>
    );
};

export default App;