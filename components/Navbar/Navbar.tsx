"use client";
import React from "react";
import { useSession } from "next-auth/react"

const Navbar = () => {
    const { data: session, status } = useSession()

    return (
        <>
            <div className="bg-white  w-full py-3 px-5 shadow sticky top-0 z-40 ">
                <div className="flex justify-between items-center relative">
                    <p className="text-lg leading-10 text-[#1E1C21] ff-montserrat uppercase">
                        {session?.user?.name ?? "Lorem"}
                    </p>
                    <div className="flex items-center space-x-4">
                        <div
                            className="flex items-center space-x-2 cursor-pointer"
                        >
                            <div className="w-[40px] h-[40px] outline outline-1 outline-offset-2 mr-3 rounded-full">
                                <div className="w-full h-full flex justify-center items-center bg-[#3A616C] rounded-full text-white text-xs ff-montserrat ">
                                    <p className="text-xs ff-montserrat text-white uppercase">
                                        {session?.user?.name?.slice(0, 1) ?? "L"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Navbar
