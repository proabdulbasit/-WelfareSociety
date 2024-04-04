import React from 'react'
import Link from "next/link"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'

import { MdKeyboardArrowRight } from "../assets/icons/icons"
import AccountingTab from '../componets/shop/accountingTab'

export default function PageTeam(){
    return(
        <>
        <Navbar navClass="nav-light"/>
        
        <section className="relative table w-full bg-center bg-no-repeat bg-cover py-36 lg:py-44" style={{backgroundImage:"url('/images/team.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 mt-10 text-center">
                    <h3 className="mb-6 text-3xl font-medium leading-normal text-white md:text-4xl md:leading-normal">Team Member</h3>

                    <p className="max-w-xl mx-auto text-lg text-slate-300"></p>
                </div>
            </div>

            <div className="absolute z-10 mx-3 text-center bottom-5 start-0 end-0">
                <ul className=" tracking-[0.5px]  mb-0 inline-flex mx-auto space-x-1">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href= "/">Home</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Member Registration</li>
                </ul>
            </div>
        </section>

        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative py-16 md:py-24">
            <div className="container">
                <AccountingTab/>
            </div>
        </section>

        <Footer/>
        <Switcher/>
        </>
    )
}