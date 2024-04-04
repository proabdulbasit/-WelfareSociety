import React from "react"
import Link from "next/link"
import Image from "next/image"

import Navbar from "../componets/Navbar/navbar"
import Footer from "../componets/Footer/footer"
import Switcher from "../componets/switcher"

import * as Icon from 'react-feather';

import {MdKeyboardArrowRight} from "../assets/icons/icons"

import { contactData } from "../Data/dataTwo"

export default function ContactOne(){
    return(
        <>
        <Navbar navClass="nav-light"/>
        
        <section className="relative table w-full bg-center bg-no-repeat bg-cover py-36" style={{backgroundImage:"url('/images/company/aboutus.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 mt-10 text-center">
                    <h3 className="text-3xl font-medium leading-normal tracking-wide text-white md:text-4xl md:leading-normal">Contact Us</h3>
                </div>
            </div>

            <div className="absolute z-10 mx-3 text-center bottom-5 start-0 end-0">
                <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Home</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Contact Us</li>
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
            <div className="container relative">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                    {contactData.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="px-6 mt-6 text-center">
                                <div className="flex items-center justify-center w-20 h-20 mx-auto text-3xl text-indigo-600 align-middle shadow-sm bg-indigo-600/5 rounded-xl dark:shadow-gray-800">
                                    <Icons className="w-7 h-7"/>
                                </div>

                                <div className="content mt-7">
                                    <h5 className="text-xl font-medium title h5">{item.title}</h5>
                                    <p className="mt-3 text-slate-400"></p>

                                    <div className="mt-5">
                                        <Link href="/tel:+152534-468-854" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">{item.contact}</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative mt-16 md:mt-24">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-7 md:col-span-6">
                        <Image width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} src="/images/contact.svg" alt="" />
                    </div>

                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="lg:ms-5">
                            <div className="p-6 bg-white rounded-md shadow dark:bg-slate-900 dark:shadow-gray-800">
                                <h3 className="mb-6 text-2xl font-medium leading-normal">Get in touch !</h3>

                                <form>
                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="mb-5 lg:col-span-6">
                                            <div className="text-start">
                                                <label htmlFor="name" className="font-semibold">Your Name:</label>
                                                <div className="relative mt-2 form-icon">
                                                    <Icon.User className="absolute size-4 top-3 start-4"></Icon.User>
                                                    <input name="name" id="name" type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input ps-11 dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Name :" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-5 lg:col-span-6">
                                            <div className="text-start">
                                                <label htmlFor="email" className="font-semibold">Your Email:</label>
                                                <div className="relative mt-2 form-icon">
                                                    <Icon.Mail className="absolute size-4 top-3 start-4"></Icon.Mail>
                                                    <input name="email" id="email" type="email" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input ps-11 dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email :" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                            <div className="text-start">
                                                <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                                <div className="relative mt-2 form-icon">
                                                    <Icon.Book className="absolute size-4 top-3 start-4"></ Icon.Book>
                                                    <input name="subject" id="subject" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input ps-11 dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Subject :" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-5">
                                            <div className="text-start">
                                                <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                                <div className="relative mt-2 form-icon">
                                                    <Icon.MessageCircle className="absolute size-4 top-3 start-4"></Icon.MessageCircle>
                                                    <textarea name="comments" id="comments" className="w-full px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input ps-11 h-28 dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Message :"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="flex items-center justify-center px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="relative container-fluid">
            <div className="grid grid-cols-1">
                <div className="w-full leading-[0] border-0">
                    <iframe  title='google' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.0705514711635!2d91.8690612!3d24.895575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750552af8919883%3A0x6fc2fe33c01b3797!2sZindabazar%2C%20Sylhet%2C%20Bangladesh!5e0!3m2!1sen!2sin!4v1711447347826!5m2!1sen!2sin" style={{border:0}} className="w-full h-[500px]" allowFullScreen></iframe>
                </div>
            </div>
        </div>
        <Footer/>
        <Switcher/>
        </>
    )
}