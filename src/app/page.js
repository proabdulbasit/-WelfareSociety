"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

import {FiMail,FiPhone,FiDribbble,FaBehance,FiLinkedin,FiFacebook,FiInstagram,FiBox,FiCamera,FiBell,FiMonitor,PiNotepadBold} from "./assets/icons/icons"
import Navbar from "./componets/Navbar/navbar";
import ClientsOne from "./componets/clientsOne";
import Footer from "./componets/Footer/footer";
import CookieModal from "./componets/cookieModal";
import Switcher from "./componets/switcher";
import HeroSliderTwo from "./componets/heroSliderTwo"
import PortfolioFilter from "./componets/portfolioFilter";
import Cta from './componets/charity/cta';
import Tab from './componets/event/tab'

import { corporateAbout } from "./Data/dataThree"

export default function Index() {
  return(
    <>
        <div className="bg-white border-b border-gray-100 tagline dark:bg-slate-900 dark:border-gray-800">
            <div className="container">                
                <div className="grid grid-cols-1">
                    <div className="flex items-center justify-between">
                        <ul className="mb-0 list-none">
                            <li className="inline mb-0"><Link href="mailto:contact@example.com" className="inline-flex items-center text-slate-400 hover:text-indigo-600"><FiMail className="text-indigo-600 size-4 me-1"/> contact@example.com</Link></li>
                            <li className="inline mb-0 ms-3"><Link href="tel:+152534-468-854" className="inline-flex items-center text-slate-400 hover:text-indigo-600"><FiPhone className="text-indigo-600 size-4 me-1"/> +152 534-468-854</Link></li>
                        </ul>

                        <ul className="mb-0 list-none">
                            <li className="inline"><Link href="https://dribbble.com/shreethemes" target="_blank" className="inline-flex items-center justify-center text-base tracking-wide text-center text-gray-400 align-middle duration-500 border border-gray-100 rounded-md size-8 hover:text-white dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FiDribbble /></Link></li>
                            <li className="inline"><Link href="https://www.behance.net/shreethemes" target="_blank" className="inline-flex items-center justify-center text-base tracking-wide text-center text-gray-400 align-middle duration-500 border border-gray-100 rounded-md size-8 hover:text-white dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaBehance /></Link></li>
                            <li className="inline"><Link href="http://linkedin.com/company/shreethemes" target="_blank" className="inline-flex items-center justify-center text-base tracking-wide text-center text-gray-400 align-middle duration-500 border border-gray-100 rounded-md size-8 hover:text-white dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FiLinkedin /></Link></li>
                            <li className="inline"><Link href="https://www.facebook.com/shreethemes" target="_blank" className="inline-flex items-center justify-center text-base tracking-wide text-center text-gray-400 align-middle duration-500 border border-gray-100 rounded-md size-8 hover:text-white dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FiFacebook /></Link></li>
                            <li className="inline"><Link href="https://www.instagram.com/shreethemes/" target="_blank" className="inline-flex items-center justify-center text-base tracking-wide text-center text-gray-400 align-middle duration-500 border border-gray-100 rounded-md size-8 hover:text-white dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FiInstagram /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Navbar navClass="nav-sticky"/>
      
        <section className="relative block h-screen swiper-slider-hero" id="home">
            <HeroSliderTwo/>
        </section>

        <section className="relative py-16 bg-gray-50 dark:bg-slate-800 md:py-24">
            <div className="container relative">
                <div className="grid justify-center grid-cols-1">
                    <div className="relative z-2 transition-all duration-500 ease-in-out sm:-mt-[200px] -mt-[140px] m-0">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[24px]">
                            {corporateAbout.map((item,index)=>{
                                let Icons = item.icon
                                return(
                                    <div key={index} className="p-6 text-center transition-all duration-500 ease-in-out bg-white rounded-lg shadow group md:px-4 dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 dark:bg-slate-900">
                                        <div className="flex items-center justify-center w-16 h-16 mx-auto text-2xl text-indigo-600 align-middle rounded-lg shadow-sm bg-indigo-600/5 dark:shadow-gray-800">
                                            <Icons className="w-7 h-7"/>
                                        </div>
        
                                        <div className="content mt-7">
                                            <Link href="/page-services" className="text-lg font-medium title h5 hover:text-indigo-600">{item.title}</Link>
                                            <p className="mt-3 text-slate-400">{item.desc}</p>
        
                                            <div className="mt-5">
                                                
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        <section className="relative pt-16 overflow-hidden md:pt-24">
            <div className="container relative mb-16 md:mb-24" >
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-6">
                        <div className="lg:me-8">
                            <div className="relative">
                                <Image src='/images/shape-image.jpeg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="rounded-full shadow-lg dark:shadow-gray-800" alt=""/>

                                <div className="absolute flex items-center justify-center mx-auto -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 start-0 end-0 lg:size-72 size-56 dark:bg-slate-900 dark:shadow-gray-800">
                                    {/* <BusinessCounter/> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="lg:ms-8">
                            <h3 className="mb-4 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">Uniting Videographers and photographers for Community <br/> Welfare and Growth in Sylhet.</h3>

                                <p className="max-w-xl mb-6 text-slate-400">
                                    The Video Camera Welfare Society, based in Sylhet, supports videographers and photographers, fostering brotherhood and professional support. Registered as a non-profit, non-political organization, it contributes to community development through vaccination drives, anti-drug campaigns, and education programs, promoting societal welfare and unity in times of crisis.    
                                </p>

                            <Link href="/aboutus" className="inline-flex items-center px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700"><PiNotepadBold className="me-1"/> Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <ClientsOne />
      
        <section className="relative px-16 pt-16 mb-20 overflow-hidden md:pt-24">
            <div className="grid grid-cols-1 text-center">
                <h3 className="text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">Gallery</h3>
            </div>
            <PortfolioFilter  containerClass={true} isHomePage={true} className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]"/>

            <div className="text-center">
                <Link href="/gallery" className="inline-flex items-center px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700">
                    <PiNotepadBold className="me-1"/> 
                    See More
                </Link>
            </div>
        </section>
                          
        <section className="relative px-16 py-10 overflow-hidden md:py-10">
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">Notice</h3>
                </div>
                
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-12 md:col-span-12">
                        <Tab />
                    </div>
                </div>
            </div>
        </section>       

        <Cta/>
        <Footer/>
        <CookieModal/>
        <Switcher/>
    </>
  )
}
