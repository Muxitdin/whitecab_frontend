import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import photo1 from '../assets/images/1.jpg'
import photo2 from '../assets/images/2.jpg'
import photo3 from '../assets/images/3.jpg'

const swiperContainerStyle = {
    width: '100%',
    height: 'auto',
}

const sliderImages = [
    photo1,
    photo2,
    photo3
]

export default function Home() {
    const [isAtHome, setIsAtHome] = useState(true)

    return (
        <div className='relative h-full w-full overflow-hidden'>
            <Navbar isAtHome={isAtHome}/>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                style={swiperContainerStyle}
            >
                {sliderImages.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-screen relative">
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover "
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
