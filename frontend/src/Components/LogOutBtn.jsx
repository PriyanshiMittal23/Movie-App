import React from 'react'
import { BiLogOutCircle } from "react-icons/bi";
import useLogout from '../hooks/useLogout.js';

const LogOutBtn = () => {

  const {loading, logout} = useLogout();

  return (
    <div className='mt-auto'>
      {
        !loading?(
          <div className='flex items-center gap-2'  onClick={logout}><BiLogOutCircle className='w-5 h-5 cursor-pointer text-gray-400 inline-block'/> Logout</div>
        ):(
          <span className='loading loading-spinner'></span>
        )
      }
    </div>
  )
}

export default LogOutBtn