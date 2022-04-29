import React,{ useState } from "react";
import './Register.css';

const Register = () => {
    
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
        <div className="register">
        <h1> Login </h1>
        <input className="input1" type="text" name="name" value = {user.name} placeholder ="Your Name" onChange = {handleChange} /><br /><br />
        <input className="input1" type="text" name="email" value = {user.email}  placeholder ="Your Email" onChange = {handleChange} /><br /><br />

        <input className="input1" type="text" name="password" value = {user.password} placeholder ="Your Pasword" onChange = {handleChange} /><br /><br/>
        <input className="input1" type="text" name="reEnterPassword" value = {user.reEnterPassword} placeholder ="Re Enter Your Password" onChange = {handleChange} /><br /><br />  
        <div className="button"> Register </div>
        <div> or </div>
        <div className="button"> Login </div>
        </div>

    );
}

  export default Register;