import React from 'react'
import './Contact.css'

export default function Contact(){
    return(
        <div className='container top'>
<div className="navbar">
    <ul>
        <li>OUR OFFICE</li>
        <li>AMSTERDAM</li>
        <li>ROTTERDAM</li>
    </ul>
</div>
<div className="left-card">
<div class="card" >
  
 
    <div class="card-title"><h2>Contact</h2></div>
    <p class="card-text one"><img src="https://img.icons8.com/small/25/000000/america.png"/><h3 >Telport Towers <br />Kingsfordweg 151 <br />1043 GR Amsterdam</h3></p>
   <p className='two'><img src="https://img.icons8.com/small/25/000000/secured-letter.png" alt='mail'/> <span><a href="#">amsterdam@adamsrecruitment.com</a></span></p>
<p className="three">
<img src="https://img.icons8.com/windows/25/000000/phone.png"/><span>+31 (02)0 5800 340</span>
</p>
</div>
</div>
<div className="container bottom">
    <h2 className='top-bar'>Contact us</h2>
    <div className="name">
        <label className='name-label' htmlFor=""><p>NAME</p></label>
        <input className='name-text' type="text" />
    </div>
    {/* SURNAME */}
    <div className="surname">
        <label className='surname-label' htmlFor=""><p>SURNAME</p></label>
        <input className='surname-text' type="text" />
    </div>
    {/* EMAIL */}
    <div className="email">
        <label className='email-label' htmlFor=""><p>EMAIL</p></label>
        <input className='email-text' type="text" />
    </div>
    {/* PHONE */}
    <div className="phone">
        <label className='phone-label' htmlFor=""><p>PHONE</p></label>
        <input className='phone-text' type="text" />
    </div>
    {/* MESSAGE */}
    <div className="message">
        <label className='message-label' htmlFor=""><p>MESSAGE</p></label>
        <input className='message-text' type="text" />
    </div>
    <button className='btn msg'>SEND MESSAGE</button>
        </div>
        </div>
    )
}