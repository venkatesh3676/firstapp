import { TextField } from "@mui/material";
import React, { useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
const SignIn=()=>{
    const[mail,SetMail]=useState('');
    const[password,setpasssword]=useState('');

    const handleData=(e)=>{
e.preventDefault()
console.log(mail);
console.log(password);
SetMail('');
setpasssword('');
    }
return(
<div style={{textAlign:"center",backgroundColor:"lightgreen", }}>
<form>
  <span>
<EmailIcon/>
  <TextField onChange={e=>{SetMail(e.target.value)}} value={mail} placeholder="enter email"/>  <br/>
  </span>
  <PasswordIcon/>
  <span>
  <TextField onChange={e=>{setpasssword(e.target.value)}} type="password" value={password} placeholder="enter password"/>  <br/>
  </span>
<button onClick={handleData}style={{backgroundColor:'yellow',border:'none',borderRadius:'5px',padding:"6px 20px 10px 20px",margin:'10px',}} >SignIn</button>
</form>


</div>


);



}
export default SignIn;