"use client"

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";



const page =() => {
  const router = useRouter();
  const [inputValues,setInputValues] = useState({name:"",email:"",message:""})

  async function sendData(){
    const response = await axios.post(`${process.env.BACKEND_URL}/api/contact`,{
        name:inputValues.name,
        email:inputValues.email,
        more:inputValues.message
    });
    const data = response.data;
    console.log(data)
    return data.success;
  }

  const handleChange =(e)=>{
      setInputValues({...inputValues, [e.target.name]: e.target.value})
  }

  const sendMessage = async(e)=>{
      e.preventDefault()
      const success = await sendData();
      if(success){
        router.push("/");
      }else{
        console.log("somethings went's wrong")
      }
  }

  
  return (
    <>
      <div className="contact flex flex-col items-center gap-5">
        <h1 className="text-2xl font-semibold ">Contact us</h1>
        <form className="form flex flex-col items-center gap-5">
          <div className="name-email flex flex-col gap-5">
            <div className="input flex flex-col ">
              <p className="text-sm my-1">Name</p>
              <input name="name" type="text" className="border-[1px] border-slate-400 outline-0 px-2 py-1 text-base rounded-md w-72" value={inputValues.name} onChange={handleChange} placeholder="Enter name" required/>
            </div>
            <div className="Email">
              <p className="text-sm my-1">Email</p>
              <input name="email" type="email" className="border-[1px] border-slate-400 outline-0 px-2 py-1 text-base rounded-md w-72" value={inputValues.email} onChange={handleChange} placeholder="Enter email" required/>
            </div>
          </div>
          <div className="msg">
              <p className="text-sm my-1">Message</p>
              <textarea name="message" className="border-[1px] border-slate-400 outline-0 px-2 py-1 text-base rounded-md w-72 h-44" value={inputValues.message} onChange={handleChange} placeholder="Any message feel free to contact us" required/>
          </div>
        <button className="text-md border-[2px] bg-slate-400 py-2 px-3 rounded-lg w-32 text-semibold hover:text-white hover:shadow-lg"  onClick={sendMessage} >Send</button>
        </form>
      </div>
    </>
  );
};

export default page;
