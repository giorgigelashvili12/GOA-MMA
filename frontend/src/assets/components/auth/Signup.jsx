import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            const res = await fetch('http://localhost:5001/api/v1/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },  
                body: JSON.stringify({username, password}),
            });

            const data = await res.json();
            if(res.ok) {
                alert('user created');
                localStorage.setItem('user', JSON.stringify(data.user))
                navigate('/')
            } else {
                setError(data.msg);
            }
        } catch(e) {
            setError('Error Creating User')
            console.log(e);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen bg-white'>
            <form onSubmit={submit} className='flex flex-col justify-center items-center gap-10 border-black border-1 rounded-2xl p-20'>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <h2 className='text-3xl'>Signup</h2>
                    <p className='text-center'>Welcome, follow us on our journey!</p>
                </div>
                <input className='border-b-1 p-2 focus:outline-none' type='text' placeholder='username...' value={username} onChange={e => setUsername(e.target.value)}/>
                <input className='border-b-1 p-2 focus:outline-none' type='password' placeholder='password...' value={password} onChange={e => setPassword(e.target.value)}/>
                {error && <p className='text-red-600'>{error}</p>}
                <button className='bg-rose-800 p-2 w-60 text-white cursor-pointer' type='submit'>Submit</button>
            </form>
        </div>
    )
}
