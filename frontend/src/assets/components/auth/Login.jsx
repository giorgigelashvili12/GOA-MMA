import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submit = async e => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:5001/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({username, password})
            });

            const data = await res.json();
            if(res.ok) {
                alert('login success')
                localStorage.setItem('user', JSON.stringify(data.user));
                navigate('/')
            } else {
                alert(data.msg || 'invalid credentials')
            }
        } catch(e) {
            alert('error loggin in')
            console.error(e);
        }
    }

    return (
        <div className='flex justify-center items-center h-screen bg-white'>
            <form onSubmit={submit} className='flex flex-col justify-center items-center gap-10 border-black border-1 rounded-2xl p-20'>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <h2 className='text-3xl'>Login</h2>
                    <p className='text-center'>Welcome back!</p>
                </div>
                <input className='border-b-1 p-2 focus:outline-none' type='text' placeholder='username...' value={username} onChange={e => setUsername(e.target.value)}/>
                <input className='border-b-1 p-2 focus:outline-none' type='password' placeholder='password...' value={password} onChange={e => setPassword(e.target.value)}/>
                <button className='bg-rose-800 p-2 w-60 text-white cursor-pointer' type='submit'>Submit</button>
            </form>
        </div>
    )
}
