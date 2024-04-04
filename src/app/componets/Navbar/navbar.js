'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {FiMail, FiPhone,FiDribbble,FaBehance,FiLinkedin,FiFacebook,FiInstagram} from '../../assets/icons/icons'
import Image from 'next/image';
import { usePathname } from 'next/navigation'

export default function NavbarTwo(props) {
    let { navClass, navJustify } = props;
    let [isMenu, setisMenu] = useState(false);
    
    let [manu , setManu] = useState('');
    let pathname = usePathname();
    
    useEffect(()=>{
        setManu(pathname)

        function windowScroll() {
            const navbar = document.getElementById("topnav");
            if (
                document.body.scrollTop >= 50 ||
                document.documentElement.scrollTop >= 50
            ) {
                if (navbar !== null) {
                    navbar?.classList.add("nav-sticky");
                }
            } else {
                if (navbar !== null) {
                    navbar?.classList.remove("nav-sticky");
                }
            }
        }
        window.addEventListener("scroll", windowScroll);
        window.scrollTo(0, 0)
        return () => {
            window.removeEventListener('scroll', windowScroll);
        };

    },[setManu])
    

    const toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };


    return (
        <>
            <div className="bg-white border-b border-gray-100 tagline dark:bg-slate-900 dark:border-gray-800">
                <div className="container">                
                    <div className="grid grid-cols-1">
                        <div className="flex items-center justify-between">
                            <ul className="mb-0 list-none">
                                <li className="inline mb-0"><Link href="mailto:contact@example.com" className="inline-flex items-center text-slate-400 hover:text-indigo-600"><FiMail className="text-indigo-600 size-4 me-1"/> info@videocameramanwelfaresociety.com</Link></li>
                                <li className="inline mb-0 ms-3"><Link href="tel:+152534-468-854" className="inline-flex items-center text-slate-400 hover:text-indigo-600"><FiPhone className="text-indigo-600 size-4 me-1"/> +8801753-151188</Link></li>
                            </ul>

                            <ul className="mb-0 list-none">
                                <li className="inline">
                                    <Link href="registration" className="inline-flex items-center justify-center text-base tracking-wide text-center text-gray-400 align-middle duration-500 border border-gray-100 rounded-md hover:text-white dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600" style={{marginRight:"4px", padding:"4px 14px"}}>
                                        Become a member
                                    </Link>
                                </li>
                                <li className="inline"><Link href="https://www.facebook.com/people/Video-cameraman-welfare-society/100091960150504/?mibextid=JRoKGi" target="_blank" className="inline-flex items-center justify-center text-base tracking-wide text-center text-gray-400 align-middle duration-500 border border-gray-100 rounded-md size-8 hover:text-white dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FiFacebook /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <nav id="topnav" className={`defaultscroll tagline-height ${navClass === "nav-light" ? '' : navClass === "nav-sticky" ?
            'bg-white dark:bg-slate-900' : ''}`}>
            <div className="container relative">
                {
                    navClass === "nav-light" ?
                        <Link className="logo" href="/">
                            <span className="inline-block dark:hidden">
                                <Image src='/images/logo.png' className="l-dark" width={250} height={54}  alt="" />
                                <Image src='/images/logo.png' className="l-light" width={250} height={54} alt="" />
                            </span>
                            <Image src='/images/logo.png' width={250} height={54} className="hidden dark:inline-block" alt="" />
                        </Link>
                        :
                        <Link className="logo" href="/">
                            <Image src='/images/logo.png' width={250} height={54} className="inline-block dark:hidden" alt="" />
                            <Image src='/images/logo.png' width={250} height={54} className="hidden dark:inline-block" alt="" />
                        </Link>
                }

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link href="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

            
                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                    <ul className={`navigation-menu ${navClass} ${navJustify}`}>
                        <li className={manu === "/" || "" ? "active" : ""}>
                            <Link href="/" className="sub-menu-item">
                                Home
                            </Link>
                        </li>

                        <li className={manu === "/aboutus" || "" ? "active" : ""}>
                            <Link href="/aboutus" className="sub-menu-item"> 
                                About Us
                            </Link>
                        </li>
                        
                        <li className={manu === "/gallery" || "" ? "active" : ""}>
                            <Link href="/gallery" className="sub-menu-item"> 
                                Gallery
                            </Link>
                        </li>

                        <li className={`${["/member/executive-member", "/member/general-member"].includes(manu)? "active" : ""} has-submenu parent-parent-menu-item`}>
                            <Link href="#!">Member</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className={manu === "/member/executive-member" || "" ? "active" : ""}><Link href="/member/executive-member" className="sub-menu-item"> Executive Member</Link></li>
                                <li className={manu === "/member/general-member" || "" ? "active" : ""}><Link href="/member/general-member" className="sub-menu-item">General Member </Link></li>
                            </ul>
                        </li>

                        <li className={manu === "/contact" || "" ? "active" : ""}>
                            <Link href="/contact" className="sub-menu-item"> 
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div >
            </nav >
        </>
    )
}
