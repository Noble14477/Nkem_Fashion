import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link, useNavigate, } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
import equals from "validator/lib/equals";
import isEmail from "validator/es/lib/isEmail";
import { PopupMessages } from "../components/PopupMessages";
import Loading from "../components/Loading";

const Register = () => {
  const navigate = useNavigate()


  const [inputs, setInputs] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    success: "",
    error: "",
    loading: false
  });

  const handelChange = (e) =>{
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    if (isEmpty(inputs.userName) || isEmpty(inputs.email) || isEmpty(inputs.password)) {
      setInputs({
        ...inputs,
        error: "All fields are required..!"
      });
    } else if(!isEmail(inputs.email)){
      setInputs({
        ...inputs,
        error: "Invalid email..!"
      });
    }else if(!equals(inputs.password, inputs.confirmPassword)){
      setInputs({
        ...inputs,
        error: "Passwords do not match..!"
      });
    }

    const data = {
      userName: inputs.userName,
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

    axios.post("http://localhost:5000/api/auth/register", data, config)
    .then(res=>{
        setInputs({
          ...inputs,
          success: res.data.success,
        })

        setTimeout(() => {
          setInputs({
            userName: " ",
            email: "",
            password: "",
            confirmPassword: "",
          })

          navigate("/login")
        }, 3000);
        
      
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
    <div className="w-full h-[100vh] bg-foam bg-cover bg-no-repeat flex justify-center items-center">
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
            <input type="text" minLength={5}  name="userName" value={inputs.userName} onChange={handelChange} autoComplete="off"/>
            <label htmlFor="name">Username</label>
        </div>
        <div className="inputGroup w-full">
            <input type="email"  name="email" value={inputs.email} onChange={handelChange} formNoValidate/>
            <label htmlFor="name">Email</label>
        </div>
        <div className="inputGroup w-full">
            <input type="password" minLength={6}  name="password" value={inputs.password} onChange={handelChange}/>
            <label htmlFor="name">Password</label>
        </div>
        <div className="inputGroup w-full">
            <input type="password" minLength={6}   name="confirmPassword" value={inputs.confirmPassword} onChange={handelChange}/>
            <label htmlFor="name">Confirm Password</label>
        </div>
        <button className="rounded-md text-lg bg-blueColor py-3 w-full text-whiteColor mt-2">Register</button>
        {/* <button className="rounded-md text-lg bg-whiteColor py-3 w-full text-blueColor mt-1 shadow-lg">Login with Google</button> */}
        </form>
        <div className="mt-6">
            <p className="text-blueColor text-sm text-center">Already had an account? <Link className="text-pinkColor" to="/login">Login</Link> </p>
        </div>
      </div>
        
    </div>
  </div>;
};

export default Register;
