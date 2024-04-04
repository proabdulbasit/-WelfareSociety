"use client"
import React from "react"
import Link from "next/link"

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function HeroSliderTwo(){
    return(
        <div className="h-full swiper-container swiper-container-initialized swiper-container-horizontal">
                <Swiper
                    className='swiper-wrapper'
                    spaceBetween={50}
                    slidesPerView={1}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    navigation={true}
                    
                >
                    <SwiperSlide>
                        <div className="flex items-center overflow-hidden swiper-slide" style={{ backgroundImage: `url('/images/slider/1.jpeg')`, backgroundSize: '100% 100%' }}>
                            <div className="flex items-center w-full bg-center slide-inner slide-bg-image" >
                                <div className="absolute inset-0 bg-black/70"></div>
                                <div className="container relative">
                                    <div className="grid grid-cols-1">
                                        {/* <div className="text-center">
                                            <h1 className="mb-5 text-4xl font-semibold leading-normal text-white lg:leading-normal lg:text-5xl">Discover the world of <br /> business</h1>
                                            <p className="max-w-xl mx-auto text-lg text-white/70">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                            <div className="mt-6">
                                                <Link href="#" className="inline-block px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700">Contact us</Link>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                
                    <SwiperSlide>
                        <div className="flex items-center overflow-hidden swiper-slide" style={{ backgroundImage: `url('/images/slider/2.jpeg')`, backgroundSize: '100% 100%' }}>
                            <div className="flex items-center w-full bg-center slide-inner slide-bg-image" >
                                <div className="absolute inset-0 bg-black/70"></div>
                                <div className="container relative">
                                    <div className="grid grid-cols-1">
                                        {/* <div className="text-center">
                                            <h1 className="mb-5 text-4xl font-semibold leading-normal text-white lg:leading-normal lg:text-5xl">Meet our brand <br /> new solution</h1>
                                            <p className="max-w-xl mx-auto text-lg text-white/70">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                            <div className="mt-6">
                                                <Link href="#" className="inline-block px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700">Get Started</Link>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="flex items-center overflow-hidden swiper-slide" style={{ backgroundImage: `url('/images/slider/3.jpeg')`, backgroundSize: '100% 100%' }}>
                            <div className="flex items-center w-full bg-center slide-inner slide-bg-image" >
                                <div className="absolute inset-0 bg-black/70"></div>
                                <div className="container relative">
                                    <div className="grid grid-cols-1">
                                        {/* <div className="text-center">
                                            <h1 className="mb-5 text-4xl font-semibold leading-normal text-white lg:leading-normal lg:text-5xl">Meet our brand <br /> new solution</h1>
                                            <p className="max-w-xl mx-auto text-lg text-white/70">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                            <div className="mt-6">
                                                <Link href="#" className="inline-block px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700">Get Started</Link>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex items-center overflow-hidden swiper-slide" style={{ backgroundImage: `url('/images/slider/4.jpeg')`, backgroundSize: '100% 100%' }}>
                            <div className="flex items-center w-full bg-center slide-inner slide-bg-image" >
                                <div className="absolute inset-0 bg-black/70"></div>
                                <div className="container relative">
                                    <div className="grid grid-cols-1">
                                        {/* <div className="text-center">
                                            <h1 className="mb-5 text-4xl font-semibold leading-normal text-white lg:leading-normal lg:text-5xl">Meet our brand <br /> new solution</h1>
                                            <p className="max-w-xl mx-auto text-lg text-white/70">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                            <div className="mt-6">
                                                <Link href="#" className="inline-block px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700">Get Started</Link>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                
                    <SwiperSlide>
                        <div className="flex items-center overflow-hidden swiper-slide" style={{ backgroundImage: `url('/images/slider/5.jpeg')`, backgroundSize: '100% 100%' }}>
                            <div className="flex items-center w-full bg-center slide-inner slide-bg-image" >
                                <div className="absolute inset-0 bg-black/70"></div>
                                <div className="container relative">
                                    <div className="grid grid-cols-1">
                                        {/* <div className="text-center">
                                            <h1 className="mb-5 text-4xl font-semibold leading-normal text-white lg:leading-normal lg:text-5xl">Meet our brand <br /> new solution</h1>
                                            <p className="max-w-xl mx-auto text-lg text-white/70">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                            <div className="mt-6">
                                                <Link href="#" className="inline-block px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700">Get Started</Link>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                
                    <SwiperSlide>
                        <div className="flex items-center overflow-hidden swiper-slide" style={{ backgroundImage: `url('/images/slider/6.jpeg')`, backgroundSize: '100% 100%' }}>
                            <div className="flex items-center w-full bg-center slide-inner slide-bg-image" >
                                <div className="absolute inset-0 bg-black/70"></div>
                                <div className="container relative">
                                    <div className="grid grid-cols-1">
                                        {/* <div className="text-center">
                                            <h1 className="mb-5 text-4xl font-semibold leading-normal text-white lg:leading-normal lg:text-5xl">Meet our brand <br /> new solution</h1>
                                            <p className="max-w-xl mx-auto text-lg text-white/70">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                            <div className="mt-6">
                                                <Link href="#" className="inline-block px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700">Get Started</Link>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                
                    <SwiperSlide>
                        <div className="flex items-center overflow-hidden swiper-slide" style={{ backgroundImage: `url('/images/slider/7.jpeg')`, backgroundSize: '100% 100%' }}>
                            <div className="flex items-center w-full bg-center slide-inner slide-bg-image" >
                                <div className="absolute inset-0 bg-black/70"></div>
                                <div className="container relative">
                                    <div className="grid grid-cols-1">
                                        {/* <div className="text-center">
                                            <h1 className="mb-5 text-4xl font-semibold leading-normal text-white lg:leading-normal lg:text-5xl">Meet our brand <br /> new solution</h1>
                                            <p className="max-w-xl mx-auto text-lg text-white/70">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                            <div className="mt-6">
                                                <Link href="#" className="inline-block px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700">Get Started</Link>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex items-center overflow-hidden swiper-slide" style={{ backgroundImage: `url('/images/slider/8.jpeg')`, backgroundSize: '100% 100%' }}>
                            <div className="flex items-center w-full bg-center slide-inner slide-bg-image" >
                                <div className="absolute inset-0 bg-black/70"></div>
                                <div className="container relative">
                                    <div className="grid grid-cols-1">
                                        {/* <div className="text-center">
                                            <h1 className="mb-5 text-4xl font-semibold leading-normal text-white lg:leading-normal lg:text-5xl">Meet our brand <br /> new solution</h1>
                                            <p className="max-w-xl mx-auto text-lg text-white/70">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                            <div className="mt-6">
                                                <Link href="#" className="inline-block px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700">Get Started</Link>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                
                    <SwiperSlide>
                        <div className="flex items-center overflow-hidden swiper-slide" style={{ backgroundImage: `url('/images/slider/9.jpeg')`, backgroundSize: '100% 100%' }}>
                            <div className="flex items-center w-full bg-center slide-inner slide-bg-image" >
                                <div className="absolute inset-0 bg-black/70"></div>
                                <div className="container relative">
                                    <div className="grid grid-cols-1">
                                        {/* <div className="text-center">
                                            <h1 className="mb-5 text-4xl font-semibold leading-normal text-white lg:leading-normal lg:text-5xl">Meet our brand <br /> new solution</h1>
                                            <p className="max-w-xl mx-auto text-lg text-white/70">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                            <div className="mt-6">
                                                <Link href="#" className="inline-block px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700">Get Started</Link>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                
                    <SwiperSlide>
                        <div className="flex items-center overflow-hidden swiper-slide" style={{ backgroundImage: `url('/images/slider/10.jpeg')`, backgroundSize: '100% 100%' }}>
                            <div className="flex items-center w-full bg-center slide-inner slide-bg-image" >
                                <div className="absolute inset-0 bg-black/70"></div>
                                <div className="container relative">
                                    <div className="grid grid-cols-1">
                                        {/* <div className="text-center">
                                            <h1 className="mb-5 text-4xl font-semibold leading-normal text-white lg:leading-normal lg:text-5xl">Meet our brand <br /> new solution</h1>
                                            <p className="max-w-xl mx-auto text-lg text-white/70">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                            <div className="mt-6">
                                                <Link href="#" className="inline-block px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700">Get Started</Link>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
    )
}