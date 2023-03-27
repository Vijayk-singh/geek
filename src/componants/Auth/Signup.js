import { Container } from "@mui/system";
import React, { useState } from "react";

const Signup = () => {
    var [data, setdata] = useState({naam:"",email:"",password:"",phone:"",profession:""});
   
    const onChange = (e)=>{
        setdata({...data, [e.target.name]: e.target.value})
    }
    const reset = (e)=>{
        setdata({naam:"",email:"",password:"",phone:"",profession:""})
    }
    var localdata =JSON.stringify(data)
    const submit = (e)=>{
       localStorage.setItem('auth',localdata);
    //    localStorage.setItem('auth',data.email);
    alert("you are registerd please log in")
    }
    // console.log(data)
  return (
    <div className="row">
    <div className="container mt-5 col-5">
      <form id="signupform">
        <div className="container"></div>
        <div className="signuphead">
        <label className="row m-3 ps-5 pe-5 text-warning">Please Sign Up!</label>
          <div className="row m-3 ps-5 pe-5">
            {" "}
            <input type="text" placeholder="Username" value={data.naam}  onChange={onChange} name="naam" required />
          </div>
          <div className="row m-3 ps-5 pe-5 ">
            {" "}
            <input type="email" className=" " placeholder="Email" value={data.email}  onChange={onChange} name="email" required />
          </div>
          <div className="row m-3 ps-5 pe-5">
            {" "}
            <input type="password" placeholder="Password" name="password" value={data.password}   onChange={onChange} required />
          </div>
          <div className="row m-3 ps-5 pe-5">
            {" "}
            <input type="number" placeholder="Phone Number" name="phone" value={data.phone}  className="" onChange={onChange} required />
          </div>
          <div className="row m-3 ps-5 pe-5 ">
            <label className="col-3 border border-secondary">Profession</label>
            {" "}
            <select className="col-9" value={data.profession} name="profession" onChange={onChange}>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Cloud Engineer">Cloud Engineer</option>
              <option value="Web Developer">Web Developer</option>
              <option value="Network Engineer">Network Engineer</option>
            </select>
          </div>
        </div>
        <div className="row m-3 ps-5 pe-5">
          <input className="align-start col me-5 btn btn-outline-success" type="submit" placeholder="SignUp" id="" onClick={submit}/>
          <input className="align-end col ms-5 btn btn-outline-danger" type="button" placeholder="Reset" value="reset" id="" onClick={reset} />
        </div>
      </form>
    </div>
    </div>
  );
};

export default Signup;
