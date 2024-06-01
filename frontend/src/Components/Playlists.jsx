import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useGetPlaylists from '../hooks/useGetPlaylists';

const Playlists = () => {
  const { loading, playlists, getPlaylists } = useGetPlaylists();

  useEffect(() => {
    getPlaylists();
  }, []);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4'>
      {loading ? (
        <span className='loading loading-ring'></span>
      ) : (
        playlists.map((playlist) => (
          <Link key={playlist._id} to={`/playlist/${playlist._id}/view`} className='playlist-item bg-white rounded shadow overflow-hidden'>
            <div className='playlist-image'>
              {playlist.movies.length === 0 ? (
                <img
                  src='https://th.bing.com/th/id/OIP.4QC_IpkZbYqSAMxETwdUlAHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                  alt="Placeholder"
                  className="object-cover w-full h-48"
                />
              ) : (
                <img
                  src={playlist.movies[0].Poster}
                  alt={playlist.movies[0].Title}
                  className="object-cover w-full h-48"
                />
              )}
            </div>
            <div className='playlist-info p-4'>
              <h4 className="text-lg font-semibold mb-2">{playlist.Name}</h4>
              <p className='text-sm text-gray-600'>{playlist.movies.length} movies</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Playlists;
