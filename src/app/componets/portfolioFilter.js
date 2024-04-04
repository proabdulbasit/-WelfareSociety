"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const AvailableProject = dynamic(()=>import('./availaleProject'));


import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {MdKeyboardArrowRight,MdOutlineKeyboardArrowLeft} from "react-icons/md"
import {FiCamera} from "react-icons/fi"

import { portfolioOne } from '../Data/data';
import { portfolioOneImage } from '../Data/data';


export default function PortfolioFilter(props) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isOpen, setisOpen] = useState(false);
    
    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + portfolioOneImage.length - 1) % portfolioOneImage.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioOneImage.length);
    };
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };
    const currentImage = portfolioOneImage[currentImageIndex];

  
    const matchCategory = (category) => {
        setSelectedCategory(category);
    };

    let filteredData = [];

    if(props.isHomePage){
        filteredData = portfolioOne.slice(0, 12)
    }else{
        filteredData = portfolioOne
    }
    return (
        <section className="relative pt-10 mb-10 md:pt-10">
            <div className="relative container-fluid">
                <div className={props.className}>
                        {
                            filteredData.map((data, index) => {
                                return (
                                    <div key={index} className="picture-item" data-groups='["branding"]'>
                                        <div onClick={() => handleImageClick(data.id)} className="relative block overflow-hidden transition-all duration-500 rounded-md group">

                                            <Image src={data.image} width={0} height={0} sizes='100vw' style={{width:"100%" , height:"auto"}} className="transition duration-500 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3" alt="work" onClick={() => handleImageClick(data.id)} />

                                            <div className="absolute z-0 transition duration-500 rounded-md inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90"></div>

                                            <div className="transition-all duration-500 content" >
                                                <div className="absolute z-10 transition-all duration-500 opacity-0 icon group-hover:opacity-100 top-6 end-6">
                                                    <Link href="#" className="inline-flex items-center justify-center tracking-wide text-center text-white align-middle transition duration-500 ease-in-out bg-indigo-600 border-indigo-600 rounded-full size-9 hover:bg-indigo-700 hover:border-indigo-700 lightbox"><FiCamera className ="size-4"/></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    {isOpen && (
                        <Lightbox
                            mainSrc={currentImage}
                            prevSrc={portfolioOneImage[(currentImageIndex + portfolioOneImage.length - 1) % portfolioOneImage.length]}
                            nextSrc={portfolioOneImage[(currentImageIndex + 1) % portfolioOneImage.length]}

                            onCloseRequest={() => setisOpen(false)}
                            onMovePrevRequest={handleMovePrev}
                            onMoveNextRequest={handleMoveNext}
                        />
                    )}
                </div>
            </div> 
        </section>


    )
}
