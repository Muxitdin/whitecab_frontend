import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Service from '../config/service.js'
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { Toast } from "../config/sweetAlert.js"


export default function SignUp() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [newUser, setNewUser] = useState({
        firstname: '',
        lastname: '',
        phonenumber: '',
        password: '',
        agreement: false,
    })

    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setNewUser((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (newUser.agreement) {
            try {
                console.log(newUser)
                const { data } = await Service.createNewUser(newUser)
                console.log(data)
                navigate('/prelogin')
                Toast.fire({
                    icon: 'success',
                    title: data.msg
                })
            } catch (error) {
                console.log(error.message || error.response?.data?.msg)
                Toast.fire({
                    icon: 'warning',
                    title: error?.response?.data?.msg
                })
            }
            console.log("Form submitted", newUser)
        } else {
            Toast.fire({
                icon: 'warning',
                title: 'Please agree to the terms of the public offer.'
            })
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev)
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-semibold mb-6 text-center">Регистрация</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1" htmlFor="firstname">Имя</label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={newUser.firstname}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-blue-200"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1" htmlFor="lastName">Фамилия</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={newUser.lastname}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-blue-200"
                        required
                    />
                </div>

                <div className="mb-8">
                    <label className="block text-gray-700 mb-1" htmlFor="password">Пароль</label>
                    <div className='relative'>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={newUser.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:ring-blue-200"
                            required
                        />
                        <span
                            className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? (
                                <FaEyeSlash className="h-5 w-5" />
                            ) : (
                                <FaEye className="h-5 w-5" />
                            )}
                        </span>
                    </div>
                </div>

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
                            value={newUser.phonenumber}
                            type="tel"
                            name="phonenumber"
                            id="phonenumber"
                            className={` w-full border-2 rounded-md rounded-l-none p-2 focus:outline-none disabled:bg-gray-300`}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="agreement"
                            checked={newUser.agreement} // this is 
                            onChange={handleChange}
                            className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <span className="ml-2 text-gray-700">
                            Я согласен с{' '}
                            <a
                                href="/public-offer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                условиями публичной оферты
                            </a>
                        </span>
                    </label>
                </div>
                <NavLink to={'/signin'}><p className='text-sm text-gray-600 text-right mt-1 hover:underline cursor-pointer mb-3'>войти в аккаунт</p></NavLink>
                <button
                    type="submit"
                    className={`w-full py-2 px-4 text-white font-semibold rounded-md shadow-md transition duration-300 
                        ${newUser.agreement ? 'bg-black hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'}`}
                    disabled={!newUser.agreement}
                >
                    Зарегистрироваться
                </button>
            </form>
        </div>
    )
}
