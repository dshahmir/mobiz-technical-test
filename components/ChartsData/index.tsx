"use client"
import { getData } from '@/utils/helpers';
import React, { useEffect, useState } from 'react'
import { ChevronRight } from '../icons'
import { useRouter } from 'next/navigation';
import DonutChart from '../DonutChart';
import RadarChart from '../RadarChart';
import EventsCharts from '../EventsCharts';
import PieChart from '../PieChart';

const ChartsData = () => {
    const router = useRouter()
    const [data, setData] = useState({})

    const fetchData = async () => {
        const data = await getData()
        if (data) setData(data?.data?.products as any)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="flex  items-center mb-5">
                <div className="flex space-3 items-center mb-5">
                    <p className="text-xs font-medium text-[#3A616C] uppercase ff-montserrat">
                        Home
                    </p>
                    <ChevronRight />
                    <p className="text-xs text-[#1E1C21] text-opacity-25 ff-montserrat">
                        All
                    </p>
                </div>
            </div>
            <div className="w-full  pt-5 px-5 min-h-[700px]">
                <div className="flex xl:flex-row flex-col gap-[20px]">
                    <div className="w-full max-h-[500px] bg-white rounded-[10px] shadow flex justify-center py-4">
                        <DonutChart />
                    </div>
                    <div className="w-full max-h-[500px] bg-white rounded-[10px] shadow flex justify-center py-4">
                        <RadarChart />
                    </div>
                </div>
                <div className=" flex flex-row justify-between gap-x-[20px] mt-[20px]">
                    <div className="bg-white rounded-[10px] shadow py-4 max-h-[500px] w-full flex justify-center">
                        <EventsCharts />
                    </div>
                    {/* <div className="bg-white rounded-[10px] shadow py-4 max-h-[500px] flex items-center justify-center w-full">
                        <PieChart />
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default ChartsData
