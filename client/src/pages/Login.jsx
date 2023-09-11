import React, { useState } from "react";
import Navbar from "../components/Navbar";
import isEmpty from "validator/lib/isEmpty";
import { isAuthenticated, setAuthentication } from '../constants/auth'
import isEmail from "validator/es/lib/isEmail";
import { Link, useNavigate } from "react-router-dom";
import { PopupMessages } from "../components/PopupMessages";
import Loading from "../components/Loading";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate()


  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    success: "",
    error: "",
    loading: false
  });

  const handleChange = (e) =>{
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    if ( isEmpty(inputs.email) || isEmpty(inputs.password)) {
      setInputs({
        ...inputs,
        error: "All fields are required..!hii"
      });
    } else if(!isEmail(inputs.email)){
      setInputs({
        ...inputs,
        error: "Invalid email..!"
      });
    }

    const data = {
      email: inputs.email,
      password: inputs.password,
    }

    const config = {
      headers: {
          "Content-Type": "application/json"
      }
  }
  setInputs({
    ...inputs,
    loading: true,
  })

    axios.post("http://localhost:5000/api/auth/login", data, config)
    .then(res=>{
     
        setAuthentication(res.data.token, res.data.user);
        // const redirect = location.search.split("=")[1];
  
        if (isAuthenticated() && isAuthenticated().role === 1) {
          console.log("redirect to admin dash");
          
          navigate("/admin-dashboard");
        } else if (
          isAuthenticated() &&
          isAuthenticated().role === 0 &&
          !redirect
        ) {
          console.log("redirect to user dash");
          navigate("/user-dashboard");
        } else {
          navigate("/");
        }
         
      
    }).catch(err=>{
      console.log(err);
      setInputs({
        ...inputs,
        error: err.response.data.error,
      })
    })
  }


  return <div className="">
    {inputs.loading && <Loading/>}
    {inputs.success && <PopupMessages ok={inputs.success}/>}
        {inputs.error && <PopupMessages errorM={inputs.error}/>}
    <Navbar/>
    <div className="w-full h-[90vh] bg-cloud flex justify-center items-center">
      <div className="bg-whiteColor py-8 px-6 rounded-md drop-shadow-xl w-[90%] lg:w-[30%]">
        <div className="text-center">
        <Link to="/">
          <h1 className="font-bold text-2xl xl:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blueColor to-pinkColor">
            NFE.
          </h1>
        </Link>
        <p className="font-semibold text-[20px] text-blueColor pt-4">One account</p>
        <p className="font-semibold text-[20px] text-blueColor">Many posibilites</p>
        </div>
        <form className="grid gap-6 mt-12" onSubmit={handleSubmit}>
        
        <div className="inputGroup w-full">
            <input type="email" required name="email" value={inputs.email} onChange={handleChange}/>
            <label htmlFor="name">Email</label>
        </div>
        <div className="inputGroup w-full">
            <input type="password" required name="password" value={inputs.password} onChange={handleChange}/>
            <label htmlFor="name">Password</label>
        </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <input type="checkbox" name="remember" id="" />
              <span className="text-blueColor">Remember me</span>
            </div>
            <Link to='/forgotPassword' className="font-bold text-blueColor text-sm">Forgot Password?</Link>
          </div>
        <button className="rounded-md text-lg bg-blueColor py-3 w-full text-whiteColor mt-2">Login</button>
        {/* <button className="rounded-md text-lg bg-whiteColor py-3 w-full text-blueColor mt-1 shadow-lg">Login with Google</button> */}
        </form>
        <div className="mt-6">
            <p className="text-blueColor text-sm text-center flex gap-2 justify-center">Don't have an account? 
            <Link className="text-pinkColor" to="/register">Register</Link> </p>
        </div>
      </div>
        
    </div>
  </div>;
};

export default Login;
