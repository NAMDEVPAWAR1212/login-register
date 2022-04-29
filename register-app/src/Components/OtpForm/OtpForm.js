import React,{ useState } from "react";
import './OtpForm.css';

const OtpForm = () => {

    const[user, setUser] = useState({
        email:"",
        resetpassword:""

    })

          const handleChange = event => {
        const { name, value } = event.target
        setUser({
            ...user, [name]: value
        })
    }
    return(
     <div className="reset">
         <h1> Reset Password </h1>
        <input className="input1" type="text" name="email" value = {user.email} onChange = {handleChange} placeholder="Enter Your Email" /><br /> <br />
        <div className="button"> Send OTP </div>
        <div className="button"> back </div>
    </div>
    );
}

  export default OtpForm;