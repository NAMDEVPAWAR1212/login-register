import React,{ useState } from "react";
import './Login.css';

const Login = () => {

    const[user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""

    })

          const handleChange = event => {
        const { name, value } = event.target
        setUser({
            ...user, [name]: value
        })
    }
    return(
     <div className="login">
         <h1> Login </h1>
        <input className="input1" type="text" name="email" value = {user.email} onChange = {handleChange} placeholder="Enter Your Email" /><br /> <br />
        <input className="input1"  type="text" name="password" value = {user.password} onChange = {handleChange} placeholder="Enter Your Password" /> 
        <div className="button"> Login </div>
        <div> or </div>
        <div className="button"> Register </div>
    </div>
    );
}

  export default Login;