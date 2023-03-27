import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

const Login = () => {
   var login = false;
   const navigate = useNavigate();
    var logindata ;
    var [data, setdata] = useState({email:"",password:""});
    const onChange = (e)=>{
        setdata({...data, [e.target.name]: e.target.value})
    }
    const reset = (e)=>{
        setdata({email:"",password:""});
    }
    const submit = (e)=>{
        // e.preventDefault();
        const localdata =localStorage.getItem('auth');
       logindata =  JSON.parse(localdata);
       if(!logindata){
        alert("Invalid credentials");
       }
       else if(data.email == logindata.email && data.password == logindata.password){
        login = true;
        localStorage.setItem('login',true);
       alert("loggedin");
       window.location.reload();
        setdata({email:"",password:""});
     }else{
        alert("Invalid credentials");
     }
     }
    //  console.log(localStorage.getItem('auth'));
   
   
    
  return (
    <div className="row">
   
    <div className="container mt-5 col-5">
      <form id="signupform">
        <div className="container">
       
        </div>
        <div className="signuphead">
         <label className="row m-3 ps-5 pe-5 text-warning">Please Log in!</label>
          <div className="row m-3 ps-5 pe-5">
            {" "}
            <input type="email" placeholder="Email" value={data.email}  onChange={onChange} name="email" required />
          </div>
          <div className="row m-3 ps-5 pe-5">
            {" "}
            <input type="password" placeholder="Password" name="password" value={data.password}   onChange={onChange} required />
          </div>
          
          
        </div>
        <div className="row m-3 ps-5 pe-5">
          <input className="align-start col me-5 btn btn-outline-primary" value="Login" type="submit" placeholder="SignUp" id="" onClick={submit}/>
          <input className="align-end col ms-5 btn btn-outline-danger" type="button" placeholder="Reset" value="reset" id="" onClick={reset} />
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login