import React from 'react'
import LogOutBtn from './LogOutBtn'
import SearchBox from './SearchBox'
import {useAuthContext } from '../Context/AuthContext'
import { Link } from 'react-router-dom'

const Navbar = ({search,setSearch}) => {
    const {authUser} = useAuthContext();
  return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
        <span className="btn btn-ghost text-xl">Movie</span>
        </div>
        <div className="flex-none gap-2">
            <div className="form-control col-span-4">
                <SearchBox search={search} setSearch={setSearch}/>
            </div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={authUser.profilePic} />
                    </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li><Link to="/playlist/new" className="w-full text-left">New Playlist</Link></li>
                    <li><LogOutBtn/></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar