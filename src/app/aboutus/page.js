"use client"
import React, { useState } from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '../componets/Navbar/navbar'
import Footer from '../componets/Footer/footer'
import Switcher from '../componets/switcher'
import {MdKeyboardArrowRight, FaArrowRight} from "../assets/icons/icons"
import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from '../lib/axios';

export default function AboutUs(){
    let [memberList, setMemberList] = useState([]);
    
    const getMemberList = () => {
        axios.get(`latest-member-list`).then((res) => {
            if(res.data.status){
                setMemberList(res.data.data)
            }else{
                toast.error("Something went wrong",{
                    position: 'top-right',
                });
            }
        }).catch(() => {
            toast.error("Something went wrong",{
                position: 'top-right',
            });
        })
    }

    
    useEffect(() => {
        getMemberList();
    }, []); 
    

    return(
        <>
        <Navbar navClass="nav-light" />
        <Toaster />
        <section className="relative table w-full bg-center bg-no-repeat bg-cover py-36 lg:py-44" style={{backgroundImage:"url('/images/aboutus.jpeg')"}}>
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 mt-10 text-center">
                    <h3 className="mb-6 text-3xl font-medium leading-normal text-white md:text-4xl md:leading-normal">About Us</h3>

                    <p className="max-w-xl mx-auto text-lg text-slate-300"></p>
                </div>
            </div>

            <div className="absolute z-10 mx-3 text-center bottom-5 start-0 end-0">
                <ul className=" tracking-[0.5px]  mb-0 inline-flex mx-auto space-x-1">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/" >Home</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Aboutus</li>
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
                    <div className="justify-center md:flex">
                        <div className="md:w-3/4">
                            <div className="p-6 bg-white rounded-md shadow dark:bg-slate-900 dark:shadow-gray-800">
                                <p className="text-slate-400">
                                The Video Cameraman Welfare Society was established on January 1, 2010. It operates under the jurisdiction of the Department of Social Services of the Government of the People&#39;s Republic of Bangladesh, with registration number 1171/11. The current office is located in East Zindabazar, Sylhet, Bangladesh.
                                </p>

                                <h5 className="mt-8 mb-4 text-xl font-semibold">Nature and Type :</h5>
                                
                                <ul className="mt-3 list-none text-slate-400">
                                    <li className="flex items-center mt-2">
                                        <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>
                                        It is a non-political and non-profit organization that will serve the people regardless of race, religion, or color.
                                    </li>
                                    
                                    <li className="flex items-center mt-2">
                                        <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>
                                        As a social welfare organization, it aims to improve the living standards of the helpless and poor communities through various programs.
                                    </li>

                                    <li className="flex items-center mt-2">
                                        <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>
                                        The organization will always avoid politics but will serve the country&#39;s interests in times of national crisis
                                    </li>

                                    <li className="flex items-center mt-2">
                                        <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>
                                        The official language of the organization is Bengali, though English can be used when necessary.
                                    </li>

                                    <li className="flex items-center mt-2">
                                        <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>
                                        Members of the organization are committed not to engage in dowry practices.
                                    </li>
                                </ul>

                                <h5 className="mt-8 text-xl font-semibold">Goals and Objectives :</h5>

                                <ul className="mt-3 list-none text-slate-400">
                                    <li className="flex items-center mt-2">
                                        <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>
                                        The society will be constantly engaged in the overall development of the areas under its purview for societal welfare.
                                    </li>
                                    
                                    <li className="flex items-center mt-2">
                                        <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>
                                        To establish good relations among videographers and video shop owners, fostering a sense of brotherhood through mutual help and support.
                                    </li>

                                    <li className="flex items-center mt-2">
                                        <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>
                                        Every member will lead an honest life in their profession and be devoted to serving humanity.
                                    </li>

                                    <li className="flex items-center mt-2">
                                        <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>
                                        To establish a videography training center for unemployed youth, facilitating employment opportunities through training.
                                    </li>

                                    <li className="flex items-center mt-2">
                                        <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>
                                        The organization will undertake welfare programs for orphans, the helpless, the poor, the homeless, and the disabled.
                                    </li>

                                    <li className="flex items-center mt-2">
                                        <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>
                                        It will engage in social forestry programs in the area, either independently or with the assistance of relevant governmental authorities.
                                    </li>

                                    <li className="flex items-center mt-2">
                                        <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>
                                        Income-generating activities like fish farming, organic vegetable cultivation, seedling production and marketing, tree plantation, and poultry farming will be undertaken to raise awareness and motivate farmers.
                                    </li>

                                    <li className="flex items-center mt-2">
                                        <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>
                                        Participate in social service activities such as vaccination campaigns, anti-dowry campaigns, national day celebrations, and adult education programs.
                                    </li>

                                    <li className="flex items-center mt-2">
                                        <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>
                                        Encourage self-employment among the rural poor to alleviate poverty.
                                    </li>

                                    <li className="flex items-center mt-2">
                                        <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>
                                        Raise awareness about climate change and greenhouse effects, and implement programs to preserve natural balance.
                                    </li>

                                    <li className="flex items-center mt-2">
                                        <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>
                                        Organize training workshops, seminars, symposiums, conferences, and meetings in line with the society&#39;s goals and objectives.
                                    </li>

                                    <li className="flex items-center mt-2">
                                        <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>
                                        Establish a special fund to provide scholarships/assistance to poor meritorious students.
                                    </li>

                                    <li className="flex items-center mt-2">
                                        <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>
                                        Assist in natural disasters and participate in relief and rehabilitation programs.
                                    </li>

                                    <li className="flex items-center mt-2">
                                        <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>
                                        Celebrate national and international days of importance (which are not controversial) with due respect.
                                    </li>

                                    <li className="flex items-center mt-2">
                                        <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>
                                        Provide vocational training and employment opportunities for juveniles and those prone to criminal activities to make them aware of their crimes.
                                    </li>

                                    <li className="flex items-center mt-2">
                                        <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2"/>
                                        Implement various programs to raise awareness about the harmful effects of drug use and smoking.
                                    </li>
                                </ul>

                                <div className="mt-6">
                                    <h5 className="mb-4 text-xl font-semibold">Download the Constitution :</h5>
                                    <Link href="/documents/Bismillahir Rahmanir Rahim (1).pdf" className="inline-block px-5 py-2 mr-5 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700" target='_blank' download={'Bismillahir Rahmanir Rahim (1).pdf'}>English version</Link>

                                    <Link href="/documents/1- .35 V C O S Sangbidan.pdf" className="inline-block px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700" target='_blank' download={'1- .35 V C O S Sangbidan.pdf'}>Bagnla version</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        <section className="relative py-16 pb-20 md:py-24 bg-gray-50 dark:bg-slate-800 md:pb-20" id="team">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">
                        Our Members
                    </h3>

                    {/* <p className="max-w-xl mx-auto text-slate-400">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p> */}
                </div>

                {
                    memberList.length > 0 ? 
                        <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-8 gap-[30px]" >
                            {memberList.map((item,index)=>{
                                return(
                                    <div key={index} className="lg:col-span-3 md:col-span-6">
                                        <div className="relative p-6 bg-white rounded-md shadow-md team dark:shadow-gray-800 dark:border-gray-700 dark:bg-slate-900">
                                            <div className={`${item.background} absolute inset-0 rounded-md -mt-[10px] -ms-[10px] h-[98%] w-[98%] -z-1`}></div>
                                            <Image src={item.profile_image} height={96} width={96} className="rounded-full shadow-md size-24 dark:shadow-gray-800" alt="" />

                                            <div className="mt-4 content">
                                                <Link href = "#" className="block text-lg font-medium hover:text-indigo-600">
                                                    {item.name}
                                                </Link>
                                                <span className="block text-slate-400">{item.occupation}</span>

                                                <p className="mt-4 text-slate-400">{item.email}</p>

                                                <ul className="mt-4 space-x-1 list-none">
                                                    <li className="inline">
                                                        <Link href={'/member-detail'+'/'+item.id} style={{padding:"4px 8px", borderRadius:"6px"}} className="inline-flex items-center justify-center text-base tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 hover:border-indigo-600 hover:bg-indigo-600">
                                                            view details
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>        
                    : 
                    <p className="text-center text-slate-400">
                        We don&apos;t have any Members yet.
                    </p>
                }
            </div>
        </section>

        <Footer/>
        <Switcher/>
        </>

    )
}