import React from 'react';
import {Route, Routes} from "react-router";
import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx";

const App = () => {
    return (
        <>
            <Routes>
                 <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>

            </Routes>
        </>
    );
};

export default App;