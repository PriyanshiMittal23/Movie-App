import React from 'react';
import { RiPlayListAddFill } from 'react-icons/ri';
import useGetPlaylists from '../hooks/useGetPlaylists';
import useAddToPlaylist from '../hooks/useAddToPlaylist';

const PlaylistBtn = ({movie}) => {
  const { loading, playlists, getPlaylists } = useGetPlaylists();
  const {addToPlaylist} = useAddToPlaylist();
  const handleClick = async(playlistId,movieDetails)=>{
    await addToPlaylist(playlistId, movieDetails);
    await getPlaylists();
  }

  return (
    <div className="dropdown dropdown-top dropdown-end">
      <div 
        tabIndex={0} 
        role="button" 
        onClick={getPlaylists} // Correctly set onClick to getPlaylists
      >
        <RiPlayListAddFill />
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        {loading ? (
          <li><p>Loading...</p></li>
        ) : (
          playlists.map((playlist) => (
            <li key={playlist._id} onClick={() => handleClick(playlist._id, {
                Title: movie.Title,
                Year: movie.Year,
                Poster: movie.Poster,
            })}><a>{playlist.Name}</a></li>
          ))
        )}
      </ul>
    </div>
  );
};

export default PlaylistBtn;
