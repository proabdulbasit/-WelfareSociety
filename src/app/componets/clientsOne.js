"use client"
import React from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { clientsData } from "../Data/data"

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../node_modules/tiny-slider/dist/tiny-slider.css'

export default function ClientsOne({title,clients}){
    const settings = {
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 3
            },
    
            767: {
                items: 2
            },
    
            320: {
                items: 1
            },
        },
    }
    return(
            <div className="container relative" id="review">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal">
                        Warm regards from the Executive Members.
                    </h3>
                    <p className="max-w-xl mx-auto text-slate-400">
                        A heartfelt message of welcome and collaboration extended by our dedicated Executive Team to all members.
                    </p>
                </div>

                <div className="grid grid-cols-1 mt-8">
                    <div className="tiny-three-item">

                        <TinySlider settings={settings}>
                            {clientsData.map((item, index) => (
                                <div className="text-center tiny-slide" key={index}>
                                    <div className="cursor-e-resize">
                                        <div className="content relative shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                                            <i className="text-indigo-600 mdi mdi-format-quote-open mdi-48px"></i>
                                            <p className="text-slate-400">{item.description}</p>
                                        </div>

                                        <div className="mt-5 text-center">
                                            <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="mx-auto rounded-full shadow-md size-14" alt="" />
                                            <h6 className="mt-2 font-semibold">{item.name}</h6>
                                            <span className="text-sm text-slate-400">{item.role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </TinySlider>
                       
                    </div>
                </div>
            </div>
    )
}