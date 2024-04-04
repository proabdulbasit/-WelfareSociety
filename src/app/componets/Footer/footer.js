"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import * as Icon from 'react-feather';

import {FaFacebookF} from 'react-icons/fa';
import {MdKeyboardArrowRight} from "react-icons/md"

export default function Footer() {
    const footerLinks = [
        {
            liClass: '',
            route: 'https://edirectory.portal.gov.bd',
            title: 'E Directory',
        },
        {
            liClass: '',
            route: 'https://www.mygov.bd',
            title: 'Goverment Services',

        },
        {
            liClass: '',
            route: 'https://grs.gov.bd/',
            title: 'Grievance Redress System',
        }
    ];
    const footerCompany = [
        {
            route: '/',
            title: 'Home',
            liClass: 'mt-[10px]',

        },
        {
            route: '/about',
            title: 'About',
            liClass: 'mt-[10px]',

        },
        {
            route: '/contactus',
            title: 'Contact',
            liClass: 'mt-[10px]',

        }
    ]
    return (
        <div>
            <footer className="relative text-gray-200 footer bg-dark-footer dark:text-gray-200">
                <div className="container relative">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="py-[60px] px-0">
                                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                                    <div className="lg:col-span-4 md:col-span-12">
                                        <Link href="/#" className="text-[22px] focus:outline-none">
                                            <Image src="/images/logo.png" width={250} height={54} alt="" />
                                        </Link>
                                        <p className="mt-6 text-gray-300">
                                            ভিডিও ক্যামেরাম্যান ওয়েলফেয়ার সোসাইটি সিলেট। ০১-০১-২০১০ ইং সালে প্রতিষ্ঠিত হয়। সংঘঠনটি গণপ্রজাতন্ত্রি বাংলাদেশ সরকারের সমাজ সেবা অধিদপ্তরের আওতাধীন, যাহার নিবন্ধন নং- ১১৭১/১১
                                        </p>
                                        <ul className="mt-5 space-x-1 space-y-1 list-none">
                                            <li className="inline"><Link href="https://www.facebook.com/people/Video-cameraman-welfare-society/100091960150504/?mibextid=JRoKGi" target="_blank" className="inline-flex items-center justify-center text-base tracking-wide text-center align-middle duration-500 border border-gray-800 rounded-md size-8 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaFacebookF className='text-sm'/></Link></li>
                                        </ul>
                                    </div>

                                    <div className="lg:col-span-2 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">Company</h5>
                                        <ul className="mt-6 list-none footer-list">
                                            {footerCompany.map((data, index) => (
                                                <li key={index} className={data.liClass}><Link href={data.route} className="flex items-center text-gray-300 duration-500 ease-in-out hover:text-gray-400"><MdKeyboardArrowRight className="text-xl me-1"/> {data.title}</Link></li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="lg:col-span-3 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">Usefull Links</h5>
                                        <ul className="mt-6 list-none footer-list">
                                            {footerLinks.map((data, index) => (
                                                <li key={index} className={data.liClass}><Link href={data.route} className="flex items-center text-gray-300 duration-500 ease-in-out hover:text-gray-400" target='_blank'><MdKeyboardArrowRight className="text-xl me-1"/> {data.title}</Link></li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="lg:col-span-3 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">Newsletter</h5>
                                        <p className="mt-6">Sign up and receive the latest tips via email.</p>
                                        <form>
                                            <div className="grid grid-cols-1">
                                                <div className="my-3 foot-subscribe">
                                                    <label className="form-label">Write your email <span className="text-red-600">*</span></label>
                                                    <div className="relative mt-2 form-icon">
                                                        <Icon.Mail className="absolute size-4 top-3 start-4" />
                                                        <input type="email" className="w-full h-10 px-3 py-2 text-gray-100 bg-gray-800 border-0 rounded form-input ps-12 focus:shadow-none focus:ring-0" placeholder="Email" name="email" required="" />
                                                    </div>
                                                </div>

                                                <button type="submit" id="submitsubscribe" name="send" className="inline-block px-5 py-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700">Subscribe</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-[30px] px-0 border-t border-slate-800">
                    <div className="container relative text-center">
                        <div className="grid items-center md:grid-cols-1">
                            <div className="text-center md:text-start">
                                <p className="mb-0">© {new Date().getFullYear()} Video Cameraman Welfare Society. Design & Develop by <i className="text-red-600 mdi mdi-heart"></i> <Link href="https://techplus.dev/" target="_blank" className="text-reset">Tech Plus</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}