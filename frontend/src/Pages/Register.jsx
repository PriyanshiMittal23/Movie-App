import React, { useState } from 'react'
import GenderCb from './GenderCb'
import { Link } from 'react-router-dom'
import useSignUp from '../hooks/useSignUp.js'

const Register = () => {

  const [inputs, setInputs] = useState({
    fullName:"",
    username:"",
    password:"",
    confirmPass:"",
    gender:"",
  })

  const {loading, signup} = useSignUp();

  const [profilePic, setProfilePic] = useState(null);

  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await signup(inputs,profilePic);
  }

  const handleCheckBoxChange = (gender)=>{
    setInputs({...inputs,gender})
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gr'>
          SignUp
          <span className='text-cyan-400'> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='label-text text-base'>Full Name</span>
            </label>
            <input type="text" placeholder='John Doe' className="input input-bordered input-info w-full max-w-xs h-8" value={inputs.fullName} onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='label-text text-base'>Username</span>
            </label>
            <input type="text" placeholder="johndoe" className="input input-bordered input-info w-full max-w-xs h-8" value={inputs.username} onChange={(e)=>setInputs({...inputs,username:e.target.value})}/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='label-text text-base'>Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="input input-bordered input-info w-full max-w-xs h-8" value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})}/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='label-text text-base'>Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" className="input input-bordered input-info w-full max-w-xs h-8" value={inputs.confirmPass} onChange={(e)=>setInputs({...inputs,confirmPass:e.target.value})}/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='label-text text-base'>Profile Pic</span>
            </label>
            <input type="file" placeholder="Upload profile pic" className='file-input file-input-bordered file-input-info w-full max-w-xs h-8' onChange={handleFileChange}/>
          </div>
          <GenderCb onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender} />
          <Link to="/login" className='text-sm mt-2 inline-block hover:underline hover:text-blue-600'>Already have an account? Login</Link>
          <div>
            <button className='btn btn-block btn-sm max-w-xs mt-5' disabled={loading}>
              {loading?<span className='loading loading-spinner'></span>:"SignUp"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register