// useAddToPlaylist.js
import { useState } from 'react';
import toast from 'react-hot-toast';

const useAddToPlaylist = () => {
    const [loading, setLoading] = useState(false);

    const addToPlaylist = async (playlistId, movieDetails) => {
        setLoading(true);

        try {
            const res = await fetch(`/api/playlist/${playlistId}/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(movieDetails),
            });

            const data = await res.json();
            console.log(data);
            if (!res.ok) {
                throw new Error(data.error || 'Failed to add movie to playlist');
            }
            if(data.error){
                throw new Error(data.error);
            }

            toast.success('Movie added to playlist successfully');
        } catch (error) {
            console.error('Error adding movie to playlist:', error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, addToPlaylist };
};

export default useAddToPlaylist;
