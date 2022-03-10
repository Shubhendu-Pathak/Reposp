// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Login from  "./Login"
import React, {useState} from 'react'
import {GoogleLogin}  from "react-google-login";
import Glogin from './Glogin'
import Carousal from './Carousal'

import FacebookLogin from 'react-facebook-login'

import Slick from './Slick'
<Link to='/posts'>Posts</Link>;

function App() {
    return (
        
        <Router>
            {/* <Home/> */}
            {/* <Carousal/> */}
            <Slick/>
            {/* <Login/> */}
            <div className="g-login">
            {/* <Glogin style={{padding:"15px 18px"}} /> */}
        </div>
           
           
            
            <Routes>
               
            </Routes>

        </Router>
    );
}

export default App;
