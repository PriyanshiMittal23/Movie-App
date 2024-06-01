import React, { useState } from 'react'
import toast from 'react-hot-toast';

const useCreatePlaylist = () => {
    const [loading, setLoading] = useState(false);
    const createPlaylist = async (formData) =>{
        setLoading(true);
        try {
            const res = await fetch('/api/playlist/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            console.log(data);
            toast.success("Playlist created successfully");
            setLoading(false);
            return data;
        } 
        catch (error) {
            toast.error(error.message);
            setLoading(false);
        }
    };
    return { loading,createPlaylist };
}

export default useCreatePlaylist