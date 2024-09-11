import React, { useState } from 'react'
import logo from '../assets/images/logo.png'

export default function Navbar({isAtHome}) {
    const [menuOpen, setMenuOpen] = useState(false)



    return (
        <nav className={`${isAtHome ? "absolute top-0 z-10" : ""} bg-white shadow-lg w-full`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-0">
                    <div className="hover:bg-yellow-400 transition-all duration-500 my-1 border border-black min-w-fit">
                        <a href="/">
                            <img src={logo} alt="whitecab-logo" className='sm:h-14 h-8' />
                        </a>
                    </div>

                    <div className={`text-[0.7rem] sm:text-[0.8rem] md:text-[1rem] whitespace-nowrap md:static right-0 bg-white md:flex items-center space-x-6 `}>
                        <a
                            href="/public-offer"
                            className="text-gray-600 hover:text-black transition"
                        >
                            Публичная оферта
                        </a>
                        <a
                            href="/signup"
                            className="text-gray-600 hover:text-black transition"
                        >
                            Регистрация
                        </a>
                        <a
                            href="/signin"
                            className="text-white hover:text-black bg-black hover:bg-yellow-400 transition py-2 px-4 rounded-lg"
                        >
                            Вход
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
