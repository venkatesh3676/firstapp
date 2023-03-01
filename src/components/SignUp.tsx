import React,{useState} from "react";
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';



const SignUp = () =>{
     const[name, setName]=useState('');
     const[mail, setMail]=useState('');
     const[number, setNumber]=useState('');
     const[password, setpasssword]=useState('');
     const[Cpassword, setCpasssword]=useState('');



 const handleData =(e)=>{ 
  
    if(password !== Cpassword){
        alert('password not matched');
        
        }
        else if(name.length <=5){
        alert("name must be at least 5 characters");    
        }
        else if(password.length <=5){
        alert('password must be at least 5 characters');
        }
        else{
            console.log(password);
        }
 e.preventDefault()
console.log(name);
console.log(mail);
console.log(number);
console.log(password);
console.log(Cpassword);
setName('');
setMail('');
setNumber('');
setpasssword('');
setCpasssword('');

    


    
}
return(


    <form>
<div className="readd" style={{backgroundColor:'lightblue',textAlign:'center'}}>
<span> 
< AccountCircleIcon/>
<TextField onChange={(e)=>{setName(e.target.value)}} value={name} placeholder="entername"  variant="filled" /><br/>
</span>
<span>
<EmailIcon/>
<TextField onChange={(e)=>{setMail(e.target.value)}} value={mail} placeholder="email"  variant="filled" /><br/>
</span>
<span>
<PhoneAndroidIcon/>
<TextField onChange={(e)=>{setNumber(e.target.value)}} value={number} placeholder="phonenumber"  variant="filled" /><br/>
</span>
<span>
<PasswordIcon/>
<TextField onChange={(e)=>{setpasssword(e.target.value)}} value={password}  type="password" placeholder="password"  variant="filled" /><br/>
</span>
<span>
<PasswordIcon/>
<TextField onChange={(e)=>{setCpasssword(e.target.value)}} value={Cpassword} type="password" placeholder="Cpassword"  variant="filled" /><br/>
</span>


<button  onClick={handleData} style={{backgroundColor:'red',border:'none',borderRadius:'5px',padding:"6px 20px 10px 20px",margin:'10px'}} >
    submit
    </button>

</div>
</form>




);



}
export default SignUp;