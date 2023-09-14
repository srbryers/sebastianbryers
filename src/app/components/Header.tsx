'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { IconMenu } from '@/app/components'

export function Header({ routes }: { routes: any }) {

    // State
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [drawerStyles, setDrawerStyles] = useState("left-[-100%]") 
    const [navStyles, setNavStyles] = useState("top-0")
    const year = new Date().getFullYear();
    const path = usePathname();

    // Toggle Drawer
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    useEffect(() => {
        if (drawerOpen) {
            setDrawerStyles("left-0")
        } else {
            setDrawerStyles("left-[-100%]")
        }
    },[drawerOpen])

    // Hide nav on scroll
    useEffect(() => {
        let prevScrollPos = window.scrollY;
        window.onscroll = () => {
            const currentScrollPos = window.scrollY;
            if (prevScrollPos > currentScrollPos) {
                // console.log("show nav")
                setNavStyles("top-0")
            } else {
                // console.log("hide nav")
                setNavStyles("top-[-100%]")
            }
            prevScrollPos = currentScrollPos;
        }
    },[])

    return (
        <header className={path === "/" ? "hidden" : ""}>
            {/* Nav: Desktop */}
            <nav className="hidden p-8 md:block">
                <ul className="flex flex-row items-center gap-8 list-none px-0">
                    <li>
                        <Link href="/" className="text-white"><img src="/logo.svg" className="max-w-[18px]"  alt="Sebastian Bryers Logo"></img></Link>
                    </li>
                    {routes.map((route: any) => {
                        const isActive = path === route.path;
                        return (
                            <li key={route.name}>
                                <Link href={route.path} className={`text-xs transition-all ${isActive ? "text-primary" : "text-white"}`}>{route.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            {/* Nav: Mobile */}
            <nav id="mobile-nav" className={`md:hidden py-8`}>
                {/* Nav Button */}
                <button onClick={toggleDrawer} className={`fixed py-5 px-4 transition-all w-full bg-black ${navStyles}`}><IconMenu className="w-5 h-5"></IconMenu></button>
                {/* Drawer */}
                <div className={`${drawerStyles} drawer fixed transition-all h-full w-full top-0 z-10`}>
                    {/* Overlay */}
                    <div className="bg-black opacity-50 z-10 h-full w-full absolute" onClick={toggleDrawer}></div>
                    {/* Menu */}
                    <div className={`flex flex-col gap-2 bg-black w-[75%] h-full z-10 absolute p-8 drop-shadow-md place-content-between`}>
                        <ul className="list-none px-0">
                            <li className="py-4">
                                <Link href="/" className="text-white" onClick={toggleDrawer}><img src="/logo.svg" className="max-w-[18px]"  alt="Sebastian Bryers Logo"></img></Link>
                            </li>
                            {routes.map((route: any) => {
                                const isActive = path === route.path;
                                return (
                                    <li key={route.name}>
                                        <Link href={route.path} className={`text-sm transition-all ${isActive ? "text-primary" : "text-white"}`} onClick={toggleDrawer}>{route.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="text-[10px]">Copyright © Sebastian Bryers, {year}</div>
                    </div>
                </div>
            </nav>
        </header>
    )
}