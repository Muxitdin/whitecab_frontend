import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/images/logo.png"

export default function Prelogin() {
    const navigate = useNavigate()

    const handleLoginRedirect = () => {
        navigate('/signin')
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
            <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
                <div className='w-full flex justify-center mb-4'>
                    <img src={logo} className='w-48 mx-auto'/>
                </div>
                <hr className='mb-2'/>
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">
                    Спасибо за регистрацию!
                </h1>
                <p className="text-gray-600 text-lg text-center mb-6">
                    Наши менеджеры свяжутся с вами в ближайшее время.
                </p>
                <button
                    onClick={handleLoginRedirect}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                >
                    Войти в личный кабинет
                </button>
            </div>
        </div>
    )
}
