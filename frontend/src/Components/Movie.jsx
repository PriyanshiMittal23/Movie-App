import React from 'react';
import { RiPlayListAddFill } from "react-icons/ri";
import PlaylistBtn from './PlaylistBtn';

const Movie = ({ movie }) => {
  return (
    
    <div className="card card-compact bg-cyan-50 w-50 h-90 shadow-xl">
        <figure className="w-full h-96 p-2">
            <img src={movie.Poster} alt="Movie Poster" className="w-full h-full object-contain" />
        </figure>
        <div className="card-body">
            <h3 className="card-title text-gray-800">{movie.Title}</h3>
            <p className='text-gray-800'>Released: {movie.Year}</p>
            <div className="card-actions justify-end">
              <PlaylistBtn movie={movie}/>
            </div>
        </div>
    </div>
  )
}

export default Movie
