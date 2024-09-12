import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { IoMenu } from "react-icons/io5"
import offer1 from '../assets/files/offer-uzbek-28.08.23.pdf'
import offer2 from '../assets/files/offer-uzbek-01.12.23.pdf'

export default function PublicOffer() {
    const [selected, setSelected] = useState(null)
    const [sortedOffers, setSortedOffers] = useState([])
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const offersArr = [
        {
            pdfUrl: offer1,
            date: '2023-08-28'
        },
        {
            pdfUrl: offer2,
            date: '2023-12-01'
        },
    ]

    const handleTakeOne = (url) => {
        setSelected(url)
        setIsMenuOpen(prev => !prev)
        setIsMenuOpen(false)
    }

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }

    useEffect(() => {
        const sorted = offersArr.sort((a, b) => new Date(b.date) - new Date(a.date))
        setSortedOffers(sorted)
        setSelected(sorted[0].pdfUrl)
    }, [])

    return (
        <div>
            <Navbar />
            <div className="p-4 flex flex-col sm:flex-row gap-2 ">
                <div className='sm:hidden flex gap-2 w-fit'>
                    <div onClick={toggleMenu} className='cursor-pointer'><IoMenu className='text-2xl' /></div>
                    <h3>Меню оферт</h3>
                </div>
                <div className={`sm:block ${isMenuOpen ? 'block' : 'hidden'} h-full border border-gray-300 rounded-lg overflow-hidden ${selected ? 'bg-[#323639] text-white' : ''}`}>
                    <ul className="list-none sm:p-4 p-2">
                        {sortedOffers.map((item, index) => (
                            <>
                                <li
                                    onClick={() => handleTakeOne(item.pdfUrl)}
                                    key={index}
                                    className={`sm:text-lg text-sm font-semibold cursor-pointer p-2 hover:bg-gray-100 rounded transition ease-in-out duration-150 ${selected === item.pdfUrl ? 'bg-gray-500' : null} ${selected ? 'hover:text-black' : null}`}
                                >
                                    {item.date}{index === 0 ? <span className={`${selected ? 'hover:text-black' : null}text-gray-300 text-xs`}> актуальная</span> : ''}
                                </li>
                            </>
                        ))}
                    </ul>
                </div>
                
                <div className="sm:h-[calc(100vh-100px)] w-full flex-1 border border-gray-300 rounded-lg overflow-hidden">
                    {selected ? (
                        <iframe
                            src={selected}
                            width="100%"
                            height="100%"
                            style={{ border: 'none', minHeight: 'calc(100vh - 110.6px)' }}
                            title="Public Offer"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-800">
                            <p>Выберите документ для отображения</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}