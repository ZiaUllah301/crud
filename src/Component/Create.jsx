import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  // const header = { "Access_control_Allow_origion": "*" };
  const navigate=useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios.post("https://6493f9050da866a95366f10a.mockapi.io/CRUD", {
      name: name,
      email: email,
    })
    .then(()=>{
      navigate("/read");
    });

  };
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      <div className="w-full bg-gray-500 flex items-center justify-center">
        <form className="p-8 bg-white rounded-lg shadow-md w-full lg:w-3/4 xl:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Create</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 border w-full rounded-md"
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
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>

    </div>
  );
}

export default Login;
