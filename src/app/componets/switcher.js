"use client"
import React,{useEffect , useState} from 'react'
import Link from 'next/link';
import { animateScroll as scroll } from 'react-scroll';

import {HiOutlineMoon,HiOutlineSun,HiArrowSmUp} from 'react-icons/hi'

export default function Switcher() {
    const [scrollToTops, setScrollToTops] = useState(false); 
    useEffect(()=>{
        function scrollHandler() {
            setScrollToTops(window.scrollY >= 500)
          }
      if (typeof window !== "undefined") {
        window.addEventListener('scroll', scrollHandler);
        }
        window.scrollTo(0, 0)

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    },[])
      
      const scrollToTop = () => {
          scroll.scrollToTop({
              duration: 500,
              smooth: true,
          });
      }

    function changeMode(mode, event) {
        switch (mode) {
            case 'mode':
                if (document.documentElement.className.includes("dark")) {
                    document.documentElement.className = 'light'
                } else {
                    document.documentElement.className = 'dark'
                }
                break;
            default:
                break;
        }
    }
    return (
        <>
            <div className="fixed z-50 top-1/4 -right-3">
                <span className="relative inline-block rotate-90">
                    <input type="checkbox" className="absolute opacity-0 checkbox" id="chk" onClick={(event) => changeMode('mode', event)} />
                    <label className="flex items-center justify-between h-8 p-1 rounded-full shadow cursor-pointer label bg-slate-900 dark:bg-white dark:shadow-gray-800 w-14" htmlFor="chk">
                        <HiOutlineMoon className="text-[20px] text-yellow-500"/>
                        <HiOutlineSun className="text-[20px] text-yellow-500"/>
                        <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7"></span>
                    </label>
                </span>
            </div>

            <Link href="#" onClick={scrollToTop}
                id="back-to-top" className={`${!scrollToTops ? "hidden":"back-to-top fixed  text-lg rounded-full z-10 bottom-5 end-2 size-9 text-center bg-indigo-600 text-white leading-9 flex items-center justify-center"}`}><HiArrowSmUp /></Link>
         
        </>
    )
};