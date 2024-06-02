import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useCreatePlaylist from '../hooks/useCreatePlaylist';
import { useAuthContext } from '../Context/AuthContext';
import Navbar from '../Components/Navbar';
import { MdMovieCreation } from "react-icons/md";

const NewPlaylist = () => {
  const { authUser } = useAuthContext();
  const { loading, createPlaylist } = useCreatePlaylist();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Name: '',
    Type: 'Public',
    author: authUser.username
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await createPlaylist(formData);
    if(data){
        navigate('/');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-500'>
                <Link to={'/'}><MdMovieCreation className=' inline-block m-2 tooltip tooltip-left' data-tip=" Home" /></Link>
                New Playlist <span className='text-cyan-400'> MovieApp</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label className='label p-2'>
                    <span className='label-text text-base'>Name</span>
                </label>
                <input
                    type='text'
                    name='Name'
                    value={formData.Name}
                    onChange={handleChange}
                    placeholder='Enter Name of Playlist'
                    className='input input-bordered input-md w-full max-w-xs'
                />
                </div>
                <div className='mt-4 mb-4'>
                <label className='label p-2'>
                    <span className='label-text text-base'>Type</span>
                </label>
                <div>
                    <div className='form-control'>
                    <label className='label cursor-pointer'>
                        <span className='label-text'>Public</span>
                        <input
                        type='radio'
                        name='Type'
                        value='Public'
                        checked={formData.Type === 'Public'}
                        onChange={handleChange}
                        className={`radio`}
                        />
                    </label>
                    </div>
                    <div className='form-control'>
                    <label className='label cursor-pointer'>
                        <span className='label-text'>Private</span>
                        <input
                        type='radio'
                        name='Type'
                        value='Private'
                        checked={formData.Type === 'Private'}
                        onChange={handleChange}
                        className={`radio`}
                        />
                    </label>
                    </div>
                </div>
                </div>
                <div>
                <label className='label p-2'>
                    <span className='label-text text-base'>Author</span>
                </label>
                <input
                    type='text'
                    name='author'
                    value={formData.author}
                    onChange={handleChange}
                    placeholder='Enter your username'
                    className='input input-bordered input-md w-full max-w-xs mb-6'
                />
                </div>
                <button type='submit' className='btn btn-primary bg-cyan-300 border-none mt-4'>
                Create Playlist
                </button>
            </form>
        </div>
    </div>
  );
};

export default NewPlaylist;
