import axios from 'axios'
import React, { useState,useEffect } from 'react'
import {useNavigate } from 'react-router-dom'

const Update = () => {
    const [id, setid] = useState(0);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const navigate=useNavigate();


    useEffect(()=>{
        setid(localStorage.getItem("id"));
        setname(localStorage.getItem("name"));
        setemail(localStorage.getItem("email"));
    },[]);
    const handleUpdate =(e)=>{
        e.preventDefault();
        console.log("id...",id);
        axios.put(`https://6493f9050da866a95366f10a.mockapi.io/CRUD/${id}`,{
            name:name,
            email:email,
        }).then(()=>{
            navigate("/read");
        });
    };
  return (
    <>
     <div className="flex flex-col lg:flex-row h-screen w-full">
      <div className="w-full bg-gray-500 flex items-center justify-center">
        <form className="p-8 bg-white rounded-lg shadow-md w-full lg:w-3/4 xl:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Update</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 border w-full rounded-md"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="Email"
              name="email"
              className="mt-1 p-2 border w-full rounded-md"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            onClick={handleUpdate}
          >
            Update
          </button>
        </form>
      </div>

    </div>
    </>
  )
}

export default Update