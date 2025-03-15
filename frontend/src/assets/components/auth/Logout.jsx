import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();

    const logout = async () => {
        try {
            const res = await fetch('http://localhost:5001/api/v1/auth/logout', {
                method: 'POST'
            });

            if(res.ok) {
                alert('loged out successfully');
                navigate('/authorize/login');
            } else {
                alert('error logging out');
            }
        } catch(e) {
            alert('error logging out')
            console.error(e);
        }
    };

    return <button onClick={logout}>Logout</button>
}
