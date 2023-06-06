"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { ChevronDoubleLeft, ChevronDoubleRight, Products, Visualize, WhiteProducts, WhiteVisualize } from '../icons';
import Navbar from '../Navbar/Navbar';
const navItems = [
    {
        icon: <Visualize />,
        postIcon: <WhiteVisualize />,
        label: "Visualized",
        cta: "/",
    },
    {
        icon: <Products />,
        postIcon: <WhiteProducts />,
        label: "products",
        cta: "/products",
    },
];

export const SideBar = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [show, setShow] = useState(true);
    const path = usePathname();
    const router = useRouter();
    return (
        <div className="flex flex-no-wrap h-full ">
            {/* Vertical navigation starts */}
            <div
                className={` bg-white shadow fixed z-50 ${show ? "w-[240px] " : "w-[70px]"
                    } left-0 bottom-0 top-0 `}
            >
                <div className="flex w-full h-full">
                    <div className=" flex flex-col w-full h-full justify-between">
                        <div className={` transition-all duration-300 ease-in-out w-full`}>
                            <Link href={"/"}>
                                <div className="flex items-center justify-center cursor-pointer px-4 pt-5 pb-[11px]">
                                    {!show && <div className="" id="closed">
                                        <img src="/images/logo.png" alt="" className="w-[35px] h-[30.5px]" />
                                    </div>}
                                    {show && (
                                        <div className="" id="closed">
                                            <img src="/images/logo.png" alt="" className="w-[35px] h-[30.5px]" />
                                        </div>
                                    )}
                                </div>
                            </Link>
                            <div className="w-full h-1 border-black border-b border-opacity-5 mb-4" />

                            <ul className="">
                                {navItems.map((item, idx) => (
                                    <li
                                        className={` mb-3 w-full cursor-pointer ${path === item.cta && "bg-[#3A616C]"
                                            } `}
                                        key={idx}
                                        onClick={() => {
                                            router.push(item.cta);
                                        }}
                                    >
                                        <div className="flex items-center gap-x-5 pl-6 pr-5 py-3">
                                            <span>
                                                {path === item.cta
                                                    ? item.postIcon
                                                    : item.icon}
                                            </span>
                                            {show && (
                                                <p
                                                    className={` transition-all duration-500 ease-in-out text-sm uppercase leading-5 ${path === item.cta
                                                        ? "text-white"
                                                        : "text-[#1E1C21]"
                                                        } `}
                                                >
                                                    {item.label}
                                                </p>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div
                            className="flex items-center justify-between relative"
                            id="profile"
                        >
                            {show ? (
                                <>
                                    {/* <div className="w-[240px] h-full" /> */}
                                    <div className="h-[64px] border-t w-full flex justify-center items-center">
                                        <span
                                            className="cursor-pointer"
                                            onClick={() => setShow(!show)}
                                        >
                                            <ChevronDoubleLeft />
                                        </span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* <div className="w-[70px]" /> */}
                                    <div className="h-[64px] border-t w-full flex justify-center items-center">
                                        <span
                                            className="cursor-pointer"
                                            onClick={() => setShow(!show)}
                                        >
                                            <ChevronDoubleRight />
                                        </span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {show ? (
                <>
                    <div className="w-[240px] h-full" />
                </>
            ) : (
                <>
                    <div className="w-[70px]" />
                </>
            )}

            {/* Vertical navigation ends */}
            <div
                className={` ${show ? "show-main-content" : "main-content"
                    }  w-full h-full flex flex-col justify-between`}
            >
                <Navbar />
                <div className="w-full h-full bg-[#F8F8F8]">{children}</div>
            </div>
        </div>
    )
}


