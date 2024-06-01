import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../Context/AuthContext';

const useSignUp = () => {

    const [loading, setLoading] = useState(false);

    const {setAuthUser} = useAuthContext();

    const signup = async({fullName, username,password,confirmPass,gender},profilePic)=>{

        const success = handleInputErrors({fullName, username,password,confirmPass,gender});
        if(!success) return;

        const formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('username', username);
        formData.append('password', password);
        formData.append('confirmPass', confirmPass);
        formData.append('gender', gender);
        formData.append('profilePic', profilePic);

        setLoading(true);
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Signup failed');
            }

            const data = await response.json();
            console.log(data);
            toast.success("Signup successful!");
            // local storage
            localStorage.setItem('movie-user', JSON.stringify(data));
            // context
            setAuthUser(data);

        } 
        catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }

    }

    return {loading, signup};

}

export default useSignUp;

const handleInputErrors = ({fullName, username,password,confirmPass,gender})=>{
    if(!fullName || !username || !password || !confirmPass || !gender){
        toast.error("Please fill all the feilds.");
        return false;
    }

    if(confirmPass !== password){
        toast.error("Passwords do not match.");
        return false;
    }

    if(password.length <6){
        toast.error("Password should be of atleast 6 characters.");
        return false;
    }

    return true;

}