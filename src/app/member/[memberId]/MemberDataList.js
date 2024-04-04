"use client"
import axios from '@/app/lib/axios';
import Link from "next/link"
import Image from "next/image"
import React, { useEffect, useState } from 'react'

export default function MemberDataList({params}){
    let [memberList, setMemberList] = useState([]);
    
    const getMemberList = () => {
        axios.get(`member-list/${params.memberId}`).then((res) => {
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
    
  return (
    <>
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
                We don&apos;t have {params.memberId == 'general-member' ? "General Members" : "Executive Members"} yet.
            </p>
        }
        
    </>
  )
}