import React, { useState } from 'react'
import toast from 'react-hot-toast';

const useGetPlaylists = () => {
    const [loading, setLoading] = useState(false);
    const [playlists, setPlaylists] = useState([]);

    const getPlaylists = async()=>{
        setLoading(true);

        try {
            const res = await fetch('/api/playlist/all');
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            setPlaylists(data);
            console.log(data);
        }
        catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }

    return {loading, playlists, getPlaylists};
}

export default useGetPlaylists