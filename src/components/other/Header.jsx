import React, { useState, useEffect } from 'react'

const Header = ({ data, onLogout }) => {
    const [username, setUsername] = useState(() => (data ? data.firstName : 'Admin'))

    useEffect(() => {
        if (!data) {
            setUsername('Admin')
        } else {
            setUsername(data.firstName)
        }
    }, [data])

    const logOutUser = () => {
        localStorage.removeItem('loggedInUser')
        if (onLogout) onLogout()
    }

    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>
                Hello <br />
                <span className='text-3xl font-semibold'>{username} 👋</span>
            </h1>
            <button onClick={logOutUser} className='bg-[#c0392b] text-white text-base font-medium px-5 py-2 rounded-md hover:opacity-90 transition-opacity'>
                Log Out
            </button>
        </div>
    )
}

export default Header
