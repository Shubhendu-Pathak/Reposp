import React, {useState} from 'react'
import FacebookLogin from 'react-facebook-login';
import './New Component Js/Flogin.css'

const responseFacebook = (response) => {
  console.log('loginresult',response);
}
const componentClicked=(data)=>{
    console.warn(data);
}


export default function Flogin(){
    return(
        <div className='flog'>


<FacebookLogin
    appId="1343121459527423"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />,
 
        </div>
    )
}