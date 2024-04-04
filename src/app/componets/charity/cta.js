"use client"
import React, { useState } from 'react'
import Link from "next/link"

import ModalVideo from 'react-modal-video'
import "../../../../node_modules/react-modal-video/css/modal-video.css";

export default function Cta(){

    let [isOpen, setOpen] = useState(false)

    return(
        <section className="relative table w-full py-20 bg-top bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/become_member.jpeg')", backgroundAttachment : "fixed", backgroundPosition : "center center !important"}}>
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 text-2xl font-medium text-white md:text-3xl">Video Cameraman Welfare Society</h3>

                    <p className="max-w-xl mx-auto text-white/80">
                        If you are engaged in the profession of videography and photography, you can join us in participating in various activities for social development
                    </p>

                    {/* <Link href="#" className="inline-flex items-center justify-center mx-auto mt-10 text-indigo-600 bg-white rounded-full shadow-lg lightbox size-20 dark:shadow-gray-800 dark:bg-slate-900">
                        <i className="inline-flex items-center justify-center text-2xl mdi mdi-play"></i>
                    </Link> */}

                    <Link href="/registration" style={{height:"4rem", width:"12rem"}} className="inline-flex items-center justify-center mx-auto mt-10 text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700"> 
                        Become a member
                    </Link>
                </div>
            </div>
        </section>
    )
}