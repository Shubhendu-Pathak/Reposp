// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/Newcomponent/Home";
import Login from  "../src/Newcomponent/Login";
import React, {useState} from 'react'
import {GoogleLogin}  from "react-google-login";
import Glogin from '../src/Newcomponent/Glogin';
import Flogin from '../src/Newcomponent/Flogin';

// import Contact from "../New Component Js/Contact";
import FacebookLogin from 'react-facebook-login'

import Slick from '../src/Newcomponent/Slick';
import Contact from '../src/Newcomponent/Contact'

<Link to='/posts'>Posts</Link>;

function App() {
    return (
        
        <Router>
            <Home/>
            {/* <Contact/> */}
           
            {/* <Slick/> */}
            {/* <Login/> */}
           
            {/* <Glogin style={{padding:"15px 18px"}} /> */}
        
        
        {/* <Flogin/> */}
           
           
            
            <Routes>
               
            </Routes>

        </Router>
    );
}

export default App;
