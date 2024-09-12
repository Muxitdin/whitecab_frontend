import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { NavLink, useNavigate } from "react-router-dom"
import Service from '../config/service'
import { useDispatch } from 'react-redux'
import { authFailure, authStart, authSuccess } from '../redux/slice/authSlice'
import { Toast } from '../config/sweetAlert'
import { IoMdArrowRoundBack } from "react-icons/io"

export default function SignIn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        phonenumber: "",
    })

    const handleChange = (e) => {
        setUserData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            dispatch(authStart())
            const { data } = await Service.loginUser(userData)
            dispatch(authSuccess({ user: data.user, token: data.token }))
            navigate('/profile')
            Toast.fire({
                icon: 'success',
                title: data.msg
            })
        } catch (error) {
            dispatch(authFailure(error.response?.data?.msg || error.message))
            console.log(error.response?.data?.msg || error.message)
            Toast.fire({
                icon: 'warning',
                title: error.response?.data?.msg
            })
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <NavLink to={'/'}><IoMdArrowRoundBack className='text-2xl cursor-pointer hover:border hover:scale-125 rounded-lg' /></NavLink>
            <h1 className="text-2xl font-semibold mb-6 text-center">Вход</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col relative mb-4">
                    <label
                        htmlFor="phonenumber"
                        className="absolute text-sm bg-white -top-3 left-3">
                        <span>Тел.</span>
                        <span className="text-base text-red-500 ml-1">*</span>
                    </label>
                    <div className="flex">
                        <label
                            htmlFor="phonenumber"
                            className="w-20 text-base border-2 border-r-0 rounded-l-lg px-4 py-2">
                            +998
                        </label>
                        <input
                            onChange={handleChange}
                            value={userData.phonenumber}
                            type="tel"
                            name="phonenumber"
                            id="phonenumber"
                            className={` w-full border-2 rounded-md rounded-l-none p-2 focus:outline-none disabled:bg-gray-300`}
                        />
                    </div>
                </div>

                <NavLink to={'/signup'}><p className='text-sm text-gray-600 text-right mt-1 hover:underline cursor-pointer mb-3'>создать аккаунт</p></NavLink>
                <button
                    type="submit"
                    className='w-full py-2 px-4 text-white font-semibold rounded-md shadow-md transition duration-30 bg-black hover:bg-green-700'
                >
                    Войти
                </button>
            </form>
        </div>
    )
}
