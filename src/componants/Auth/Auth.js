import React, { useState } from "react";
import Login from './Login'
import Signup from './Signup'

const Auth = () => {
//    const signup = false;
   var [data, setdata] = useState(true);
   const onChange = (e)=>{
    // setdata({...data, [e.target.name]: e.target.value});
   
    setdata(false)
   
}
const onChange1 = (e)=>{
    // setdata({...data, [e.target.name]: e.target.value});
   
    setdata(true)
    
}
  return (
   <>
   <div className='text-center pt-5'>
   <div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="radio" name="options" id="option1" autocomplete="off"   onChange={onChange1}/> Login
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option2" autocomplete="off" onChange={onChange} /> Signup
  </label>
  
</div>
   
   </div>
   {data?<Login/>:<Signup/>}
   </>
  )
}

export default Auth