import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import {LogIn, UserPlus } from "lucide-react";

export default function Header() {
    const [username, setUsername] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('user')
        if(user) {
            try {
                const parsed = JSON.parse(user);
                setUsername(parsed.username);
            } catch(e) {
                console.error('error parsing data', e)
            }
        }
    }, [])

    const logout = async () => {
        try {
            const res = await fetch('http://localhost:5001/api/v1/auth/logout', {
                method: 'POST', 
            });

            if(res.ok) {
                localStorage.removeItem('user');
                setUsername('');
                setShowPopup(false);
                navigate('/');
            }
        } catch(e) {
            console.log('error logging out', e, e.message);
        }
    };

    let content;
    if (username) {
        content = (
            <button onClick={() => setShowPopup(true)} className='text-amber-50'>
                {username}
            </button>
        );
    } else {
        content = (
            <div className='flex gap-4'>
                <Link className='text-amber-50 hover:underline flex gap-2 items-center' to='/authorize/login'><LogIn className='w-5'/> Login</Link>
                <Link className='text-amber-50 hover:underline flex gap-2 items-center' to='/authorize/signup'><UserPlus className='w-5'/>Signup</Link>
                {/* <LogOut className='w-5'/> */}
            </div>
        );
    }

  return (
    <div className='header flex justify-evenly items-center bg-black'>
        {/* left part */}
        <div>
           <Link to={'/'}>
                <img className='h-29 rounded-full' src="/logo.png" alt="" />
           </Link>
        </div>
        {/*  middle part */}
        <div className='flex justify-evenly items-center gap-8'>
            <Link className={'text-amber-50 pad-10 hover:underline'} to={'/location'}>ლოკაცია</Link>

            <Popover className="relative">
                <PopoverButton className={'text-amber-50 p-2 hover:underline'}>დრო და განრიგი</PopoverButton>
                <PopoverPanel anchor="bottom" className="flex flex-col p-3 m-5 ml-0 bg-gray-900 gap-5">
                    <Link className={'text-amber-50 pad-10 hover:underline'} to={'/groups'}>ჯგუფები</Link>
                    <Link className={'text-amber-50 pad-10 hover:underline'} to={'/payment'}>გადასახადი</Link>
                </PopoverPanel>
            </Popover>
        </div>
        {/* right part */}
        <div>   
            {content}
        </div>

        {/* popup/mini dashboard */}
        {showPopup && (
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-30' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                 <div className='bg-white p-15 rounded-lg'>
                    <h2 className='text-xl font-bold mb-4'>User Dashboard</h2>
                    <p>Username: {username}</p>
                    <p>Logged in at: {new Date().toLocaleString()}</p>
                    <div className='flex gap-5'>
                        <button onClick={logout} className='mt-4 bg-red-500 text-white p-2 rounded'>Logout</button>
                        <button onClick={() => setShowPopup(false)} className='mt-4 bg-gray-500 text-white p-2 rounded w-30'>Close</button>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}