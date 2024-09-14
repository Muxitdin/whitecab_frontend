import React from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { BsTelephone } from "react-icons/bs"
import { BiLogoTelegram, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi"
import Navbar from '../components/Navbar'


export default function Contacts({ isAtHome }) {
    return (
        <div>
            <Navbar isAtHome={isAtHome} />
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-4">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-4">Свяжитесь с нами</h1>
                    <p className="self-center w-3/4 my-0 mx-auto text-lg text-gray-600 text-center mb-4">
                        Если у вас есть вопросы или предложения, не стесняйтесь связаться с нами по любому из способов ниже:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="flex flex-col items-center">
                            <MdOutlineEmail className='w-12 h-12 text-blue-600 mb-4' />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Почта</h3>
                            <a target="_blank" href="mailto:support@company.com" className="text-blue-600 hover:underline">
                                support@company.com
                            </a>
                        </div>
                        <div className="flex flex-col items-center">
                            <BiLogoTelegram className='w-11 h-11 text-blue-600 mb-4' />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Новостной канал</h3>
                            <a target="_blank" href="https://t.me/yandexwhitecab" className="text-blue-600 hover:underline">
                                t.me/yandexwhitecab
                            </a>
                        </div>
                        <div className="flex flex-col items-center sm:col-span-2">
                            <BsTelephone className='w-10 h-10 text-blue-600 mb-4' />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Телефон</h3>
                            <p className="text-gray-600">+998 97 020-30-70</p>
                            <p className="text-gray-600">+998 97 080-30-70</p>
                            <p className="text-gray-600">+998 95 109-30-70</p>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-row justify-center gap-4">
                        <a target="_blank" href="https://t.me/white_cab" className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-white">
                            <BiLogoTelegram className='text-2xl pr-0.5' />
                        </a>
                        <a target="_blank" href="https://www.instagram.com/whitecab.yandex/" className="flex items-center justify-center w-12 h-12 bg-pink-600 rounded-full text-white">
                            <BiLogoInstagram className='text-2xl' />
                        </a>
                        <a target="_blank" href="https://www.youtube.com/@whitecab" className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-full text-white">
                            <BiLogoYoutube className='text-2xl' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
