import React, { useEffect, useState } from 'react'
import LogOutBtn from '../Components/LogOutBtn'
import MovieList from '../Components/MovieList.jsx';
import Navbar from '../Components/Navbar.jsx';
import NewPlaylist from './NewPlaylist.jsx';
import Playlists from '../Components/Playlists.jsx';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("star");

  const getMovies = async(search)=>{
    const url = `https://www.omdbapi.com/?s=${search}&apikey=f94a5841`;
    const res = await fetch(url);
    const data = await res.json();
    if(data.Search){
      setMovies(data.Search);
    }
    
  }

  useEffect(()=>{
    getMovies(search);
  },[search]);

  return (
    <div className='flex flex-col sm:h-[450px] md:h-[550px] rounded-lg overflow-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 shadow-md overflow-x-hidden'>
      <Navbar search={search} setSearch={setSearch}/>
      <MovieList movies={movies}/>
      <div className="navbar bg-base-300">
        <button className="btn btn-ghost text-xl">PlayLists</button>
      </div>
      <Playlists/>
    </div>
  )
}

export default Home