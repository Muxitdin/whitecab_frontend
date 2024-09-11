import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import logo from '../assets/images/logo.png'
import { FaRegUserCircle } from "react-icons/fa"
import { NavLink } from 'react-router-dom'

export default function Navbar({ isAtHome }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const { auth } = useSelector(state => state.auth)


    return (
        <nav className={`${isAtHome ? "absolute top-0 z-10" : ""} bg-white shadow-lg w-full`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-0">
                    <div className="hover:bg-yellow-400 transition-all duration-500 my-1 border border-black min-w-fit">
                        <NavLink to="/">
                            <img src={logo} alt="whitecab-logo" className='sm:h-14 h-8' />
                        </NavLink>
                    </div>

                    <div className="flex justify-between py-0text-[0.7rem] sm:text-[0.8rem] md:text-[1rem] whitespace-nowrap md:static right-0 bg-white md:flex items-center space-x-6">
                        <NavLink
                            to="/public-offer"
                            className="text-gray-600 hover:text-black transition"
                        >
                            Публичная оферта
                        </NavLink>

                        {auth ? (
                            <>
                                <NavLink to={'/profile'} className='flex text-gray-600 gap-2 cursor-pointer hover:text-black'>
                                    <p>{auth.firstname}</p>
                                    <FaRegUserCircle className='size-6  transition'/>
                                </NavLink>
                            </>
                        ) : (
                            <>
                                <a href="/signup" className="text-gray-600 hover:text-black transition">Регистрация</a>
                                <a href="/signin" className="text-white hover:text-black bg-black hover:bg-yellow-400 transition py-2 px-4 rounded-lg">Вход</a>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </nav>
    )
}
