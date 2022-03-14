// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../New Component Js/Home";
import Login from  "../New Component Js/Login"
import React, {useState} from 'react'
import {GoogleLogin}  from "react-google-login";
import Glogin from '../New Component Js/Glogin'
import Flogin from '../New Component Js/Flogin'

// import Contact from "../New Component Js/Contact";
import FacebookLogin from 'react-facebook-login'

import Slick from '../New Component Js/Slick';


<Link to='/posts'>Posts</Link>;

function App() {
    return (
        
        <Router>
            {/* <Home/> */}
            
            {/* <Carousal/> */}
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
