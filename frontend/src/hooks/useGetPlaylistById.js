import { useState } from 'react';
import toast from 'react-hot-toast';

const useGetPlaylistById = () => {
  const [loading, setLoading] = useState(false);
  const [playlist, setPlaylist] = useState(null);

  const getPlaylistById = async (playlistId) => {
    setLoading(true);
    try {
      
      const res = await fetch(`/api/playlist/${playlistId}/view`);
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);
      setPlaylist(data);
    } 
    catch (error) {
      toast.error(error.message);
    } 
    finally {
      setLoading(false);
    }
  };

  return { loading, playlist, getPlaylistById };
};

export default useGetPlaylistById;