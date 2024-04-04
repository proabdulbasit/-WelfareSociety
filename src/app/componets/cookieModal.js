"use client"
import React,{useState} from 'react'
import Link from 'next/link';

import {LiaTimesSolid} from "react-icons/lia"

export default function CookieModal(){

    const [display,setDisplay] = useState(false);

    return(
             <div className="fixed z-50 max-w-lg px-6 py-5 mx-auto bg-white rounded-md shadow cookie-popup bottom-3 end-3 start-3 sm:start-0 dark:bg-slate-900 dark:shadow-gray-800" style={{display: display ? 'block' :'none'}}>
                <p className="text-slate-400">This website uses cookies to provide you with a great user experience. By using it, you accept our <Link href="https://shreethemes.in" target="_blank" className="font-semibold text-emerald-600 dark:text-emerald-500">use of cookies</Link></p>
                <div className="cookie-popup-actions text-end">
                    <button onClick={() => setDisplay(false)} className="absolute p-0 font-semibold border-none cursor-pointer bg-none top-2 end-2"><LiaTimesSolid/></button> 
                </div>
            </div>
    )
}