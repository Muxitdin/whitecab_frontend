import React from 'react'
import Navbar from '../components/Navbar'
import { useDispatch } from 'react-redux'
import { authLogout } from '../redux/slice/authSlice'
import { Toast } from '../config/sweetAlert'
import { useNavigate } from 'react-router-dom'


export default function Profile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(authLogout());
        navigate('/');
        Toast.fire({
            icon: 'success',
            title: 'Выход выполнен успешно',
        })
    }

    return (
        <>
            <Navbar />
            <div className="p-4">
                <h1>Welcome to your Profile</h1>
                <p>Here you can view and edit your profile information.</p>
                {/* Add profile information and edit functionality here */}
                <button onClick={handleLogOut}>Выйти</button>
            </div>
        </>
    )
}
