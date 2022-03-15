import React,{useState} from "react";
import '../Newcss/Login.css'

import {GoogleLogin,GoogleLogout}  from "react-google-login";
import Glogin from './Glogin' 
import Flogin from "./Flogin";
import { FacebookLogin } from "react-facebook-login";

export default function Login() {
  return (
    <div className="box">
      <div className="car">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://previews.123rf.com/images/airdone/airdone1411/airdone141100040/33247429-vector-illustration-d-une-guitare-acoustique-dans-un-style-de-bande-dessin%C3%A9e.jpg"
                className="d-block w-100 im1"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h4 className="cartxt">Help us become one of the safest place to buy or sell</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="loginmethod">
      
      <div className="ph">
      <img className="phone" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFYR8i0PTrOyR_skJnbxnudHovO2vSICLptw&usqp=CAU" alt="" />
        <h3 className="phtext">Continue with Phone</h3>
      </div>
     <div className="f">
     <div className="fb">
     
     {/* <img className="facebook" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvD-aN-CiE92JWJW76AnCGSj_-A8qW0ySOw&usqp=CAU" alt="" />
       <h3 className="fbtext">Continue with facebook</h3> */}
       <Flogin/>
     </div>
     </div>
     <div className="g">
     <div className="google">
     
     {/* <img className="gimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-v2k1nNY998i5_4XHcf-AZwiQq8NqqVxNJ9WuMkvHGOmskpVF07Ew3Eo3K7CQY_SW8k&usqp=CAU" alt="" />
       <h3 className="gtext">Continue with Google</h3> */}
       <Glogin/>
       
     </div>
     </div>
      
      </div>
      
      <h3 className="add">OR</h3>
      <a className="email" href="">Login In With Email</a>
      <h4 className="lasttext">All your personal details are safe with us</h4>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4eQdPATBrUJ-S4aY9zdmrSWRXnoNEL8BhQ&usqp=CAU" className="close" alt="" />
    </div>
  );
}
