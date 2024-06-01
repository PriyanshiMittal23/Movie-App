import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useGetPlaylistById from '../hooks/useGetPlaylistById';
import { TbFileSad } from "react-icons/tb";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaRegFolderOpen } from "react-icons/fa6";
import { MdMovie } from "react-icons/md";

const ViewPlaylist = () => {
  const { playlistId } = useParams();
  const { loading, playlist, getPlaylistById } = useGetPlaylistById();

  useEffect(() => {
    getPlaylistById(playlistId);
  }, [playlistId]);

  if (loading) {
    return <div className='loading loading-ring'></div>;
  }

  return (
    <div>
      {playlist? (
        <div>
          {playlist.movies.length === 0 ? (
            <div className='flex flex-col justify-center items-center h-screen'>
                <FaRegFolderOpen  className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'/>
                <p className='mt-4 text-center text-lg'>Empty Playlist</p>
                <Link to={'/'} className='mt-4 text-center text-lg'><RiArrowGoBackFill className=' inline-block'/><span> Go To Home</span></Link>
            </div>
          ) : (
            <div className='flex flex-col sm:h-[450px] md:h-[550px] rounded-lg overflow-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 shadow-md overflow-x-hidden'>
                <div className="navbar bg-base-300">
                    <Link to={'/'} ><button className="btn btn-ghost text-xl tooltip tooltip-right" data-tip=" Home"><MdMovie className=' inline-block'/> {playlist.Name}</button></Link>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4'>
                {playlist.movies.map((movie, idx) => (
                    <div key={idx} className='playlist-item bg-white rounded shadow overflow-hidden flex flex-col justify-center p-4 bg-gray-700'>
                        <img src={movie.Poster} alt="" />
                        <h3 className='mt-4'>{movie.Title}</h3>
                        <h3 className='mt-4'>{movie.Year}</h3>
                    </div>
                ))}
                </div>
            </div>
          )}
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center h-screen'>
            <TbFileSad className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl' />
            <p className='mt-4 text-center text-lg'>Unauthorized User</p>
            <Link to={'/'} className='mt-4 text-center text-lg'><RiArrowGoBackFill className=' inline-block'/><span> Go To Home</span></Link>
        </div>
      )}
    </div>
  );
};

export default ViewPlaylist;
