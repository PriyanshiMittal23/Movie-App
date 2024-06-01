import React from 'react'
import { BiLogOutCircle } from "react-icons/bi";
import useLogout from '../hooks/useLogout.js';

const LogOutBtn = () => {

  const {loading, logout} = useLogout();

  return (
    <div className='mt-auto'>
      {
        !loading?(
          <BiLogOutCircle className='w-6 h-6 cursor-pointer text-cyan-900' onClick={logout}/>
        ):(
          <span className='loading loading-spinner'></span>
        )
      }
    </div>
  )
}

export default LogOutBtn