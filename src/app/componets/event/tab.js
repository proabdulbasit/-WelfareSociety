"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/image"

import { eventOne } from '../../Data/dataTwo'

export default function Tab(){
    
    return(
        <div className="grid grid-cols-1 mt-8">
            <div id="StarterContent" className="mt-1">
                <div>
                    <div className="grid grid-cols-1">
                        <div className="relative block w-full overflow-x-auto bg-white dark:bg-slate-900">
                            <table className="w-full text-start">
                                <tbody>
                                    {eventOne.map((item,index)=>{
                                        return(
                                        <tr key={index}>
                                            <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">
                                                {item.date}
                                                <br />
                                                {item.time}
                                            </td>
                                            <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                                                <div className="flex items-center">
                                                    <Image src={item.image} width={96} height={96} className="rounded-full shadow-md size-24 dark:shadow-gray-700" alt="" />
                                                    <div className="ms-4">
                                                        <Link href="#" className="text-lg font-semibold hover:text-indigo-600">{item.title}</Link>
                                                        <p className="mt-2 text-slate-400">{item.desc}</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}