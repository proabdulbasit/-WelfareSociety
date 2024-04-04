"use client"
import React from "react"
import Link from "next/link"
import {FiPhone} from "react-icons/fi"

export default function GetInTuct({className,title}){
    return(
        <div className={className}>
            <div className="grid grid-cols-1 text-center">
            {title ? <h6 className="mb-2 text-sm font-bold text-indigo-600 uppercase">Contact us</h6> :"" } 
            <h3 className="mb-6 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">Have Question ? Get in touch!</h3>

            <p className="max-w-xl mx-auto text-slate-400">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>

            <div className="mt-6">
                <Link href="/contact" className="inline-flex items-center px-5 py-2 mt-4 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700"><FiPhone className="text-lg me-1"/> Contact us</Link>
            </div>
            </div>
        </div>
    )
}