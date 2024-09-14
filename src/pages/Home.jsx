import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import photo1 from '../assets/images/1.jpg'
import photo2 from '../assets/images/2.jpg'
import partnerLogo from '../assets/images/partner-logo.png'
import '@fontsource-variable/el-messiri'
import s from './styles/home.module.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const swiperContainerStyle = {
    width: '100%',
    height: 'auto',
}

const sliderImages = [
    photo1,
    photo2,
]

export default function Home({isAtHome}) {
    const { auth, isLoggedIn } = useSelector(state => state.auth)

    return (
        <div className='relative h-full w-full overflow-hidden'>
            <Navbar isAtHome={isAtHome} />
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                navigation={false}
                pagination={false}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                style={swiperContainerStyle}
            >
                {sliderImages.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-[100vh] relative">
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover bg-bottom filter brightness-50"
                            />
                        </div>
                    </SwiperSlide>
                ))}
                <div className='z-10 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start sm:justify-center'>
                    <div className='mb-10 flex flex-col justify-center items-center sm:w-[330px] h-1/2 rounded-xl text-white font-bold'>
                        <img src={partnerLogo} className='w-44 sm:w-60 bg-white rounded-xl' alt="#" />
                        <p className='font-messiri text-2xl sm:text-4xl sm:leading-[4rem] text-center mt-6'>Мы улучшаем<br />качество жизни<br />каждого водителя</p>
                    </div>
                    {
                        !isLoggedIn && !auth ? (
                            <NavLink to={'/signup'}>
                                <button className={s.button}>
                                    <span className={s.button_lg}>
                                        <span className={s.button_sl}></span>
                                        <span className={`${s.button_text} font-messiri text-lg`}>Стать водителем</span>
                                    </span>
                                </button>
                            </NavLink>
                        ) : (null)
                    }
                    <div className="absolute bottom-0 mt-auto mb-4 font-messiri">
                        <NavLink to={'/contacts'}>
                            <button className={s.contact}>
                                Наши контакты
                            </button>
                        </NavLink>
                    </div>
                </div>
            </Swiper>
        </div>
    )
}
