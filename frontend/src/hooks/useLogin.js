import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../Context/AuthContext';

const useLogin = () => {

    const [loading, setLoading] = useState();
    const {setAuthUser} = useAuthContext();

    const login = async(username, password)=>{

        const success = handleInputErrors({username,password});
        if(!success) return;

        setLoading(true);
        try {

            const res = await fetch('/api/auth/login',{
                method:"POST",
                headers: {"Content-type":"application/json"},
                body:JSON.stringify({username,password})
            });

            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            localStorage.setItem('movie-user',JSON.stringify(data));
            setAuthUser(data);
            
        } 
        catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }

    return {loading, login};

}

export default useLogin;

const handleInputErrors = ({username,password})=>{
    if(!username || !password){
        toast.error("Please fill all the feilds.");
        return false;
    }
    
    return true;

}