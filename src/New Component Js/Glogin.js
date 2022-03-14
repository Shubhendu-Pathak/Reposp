import React, {useState} from 'react'
import GoogleLogin from 'react-google-login'
import './New Compo CSS/Glogin.css'

export default function Glogin(){
    const clientId='406397604612-u2dgl4t78n9lb0r1uqdtt1dupd69ifeu.apps.googleusercontent.com'
const [showLoginButton,setshowLoginButton]=useState(true)

    const onLoginSuccess=(res)=>{
console.log('LoginSuccess',res.profileObj);
setshowLoginButton(false)
    }
    const onFailureSuccess=()=>{
        console.log('LoginFailed');
    }
    return(
        
 <div className='g-login'>
         {showLoginButton==true ?
           <GoogleLogin
    clientId={clientId}
    // style={{backgroundColor:'red'}}
    buttonText="Continue With Google"
    onSuccess={onLoginSuccess}
    onFailure={onFailureSuccess}
    cookiePolicy={'single_host_origin'}
  /> :null}
 
 
        </div>
      
       
        
    )
}