"use client"
import { getData } from '@/utils/helpers';
import React, { useEffect, useState } from 'react'
import { ChevronRight, Search } from '../icons'
import { FilterOptionPropType } from '../Interfaces';
import { ProductTable } from '../ProductsTable';
import { Select } from '../Select'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';

const ProductsData = () => {
    const router = useRouter()
    const { data: session, status } = useSession()
    if (status === "unauthenticated") {
        router.push("/login")
    }
    const [query, setQuery] = useState("")
    const [data, setData] = useState([] ?? null)
    const [filterValue, setFilterValue] = useState({
        label: "",
        value: ""
    });

    const filterOptions = [
        { label: "Brand", value: "brand" },
        { label: "Category", value: "category" },
    ]

    const handleFilterChange = (src: FilterOptionPropType) => {
        setQuery("")
        setFilterValue(src);
    };
    const handleSearch = (src: string) => {
        setQuery(src)
    }

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
                        Products
                    </p>
                    <ChevronRight />
                    <p className="text-xs text-[#1E1C21] text-opacity-25 ff-montserrat">
                        All
                    </p>
                </div>
            </div>
            <div className="w-full bg-white rounded-[10px] shadow pt-5 px-5">
                <div className="flex lg:flex-row flex-col gap-y-[10px]  justify-between lg:items-center items-start pb-6 border-b border-black border-opacity-5">
                    <div className=" shadow-md rounded-[5px] border border-gray-200 md:min-w-[350px] max-w-[350px]   py-[7px] px-[7px] flex items-center">
                        <div className="relative">
                            <input
                                type="text"
                                className="text-[13px] pl-5 w-full text-gray-600 border-none focus:border-none focus-visible:border-none focus-visible:outline-none active:border-none placeholder:text-gray-300"
                                placeholder={`Search Product`}
                                onChange={(e) => handleSearch(e.target.value)}
                                value={query}
                            />
                            <span className="absolute top-2 left-0">
                                <Search />
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-3 w-[250px]">
                        <p className="text-xs font-medium text-gray-900 ff-montserrat">
                            Filter
                        </p>
                        <Select
                            options={filterOptions}
                            onChange={handleFilterChange}
                            value={filterValue?.value}
                        />
                    </div>
                </div>
                <ProductTable products={data} query={query} filterValue={filterValue}/>
            </div>
        </>
    )
}

export default ProductsData
