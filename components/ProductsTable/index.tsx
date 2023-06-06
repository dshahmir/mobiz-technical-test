import React, { useState } from "react";
import { DeleteManage, EditManage } from "../icons";
import { ProductPropType, ProductsPropType } from "../Interfaces";
import { Headers } from "@/utils/constants";
import Tippy from "@tippyjs/react";


export const ProductTable = ({ products, query, filterValue }: any) => {
    const Searching = (src: ProductsPropType[]) => {
        if (query?.length) {
            let newSrc;
            if (filterValue?.value === "brand") {
                newSrc = src?.filter((item: any) => {
                    const splitArr = item.brand && item?.brand?.split(" ");
                    let name = "";
                    for (let i = 0; i < splitArr?.length; i++) {
                        name += splitArr[i];
                    }
                    const noSpace = name?.toLowerCase()?.includes(query?.toLowerCase());
                    const realName =
                        item?.brand &&
                        item?.brand?.toLowerCase()?.includes(query?.toLowerCase());

                    if (noSpace) return noSpace;
                    if (!noSpace && realName) return realName;
                });
            }
            if (filterValue?.value === "category") {
                newSrc = src?.filter((item: any) => {
                    const splitArr = item.category && item?.category?.split(" ");
                    let name = "";
                    for (let i = 0; i < splitArr?.length; i++) {
                        name += splitArr[i];
                    }
                    const noSpace = name?.toLowerCase()?.includes(query?.toLowerCase());
                    const realName =
                        item?.category &&
                        item?.category?.toLowerCase()?.includes(query?.toLowerCase());

                    if (noSpace) return noSpace;
                    if (!noSpace && realName) return realName;
                });
            } else {
                newSrc = src?.filter((item: any) => {
                    const splitArr = item.title && item?.title?.split(" ");
                    let name = "";
                    for (let i = 0; i < splitArr?.length; i++) {
                        name += splitArr[i];
                    }
                    const noSpace = name?.toLowerCase()?.includes(query?.toLowerCase());
                    const realName =
                        item?.title &&
                        item?.title?.toLowerCase()?.includes(query?.toLowerCase());

                    if (noSpace) return noSpace;
                    if (!noSpace && realName) return realName;
                });
            }
            return newSrc;
        } else {
            return src;
        }
    };

    return (
        <>
            <div className=" w-full overflow-x-scroll xl:overflow-x-hidden scrollbar-hide min-h-[60vh] bg-white rounded min-w-full relative">
                {/* {rowers?.length === 0 && preLoading && (
                    <div className="absolute min-w-full min-h-full top-0 left-0 flex items-center justify-center">
                        <Loader />
                    </div>
                )} */}
                {/* {rowers?.length === 0 && !preLoading && (
                    <div className="absolute min-w-full min-h-full top-0 left-0 flex items-center justify-center">
                        <p className="w-full text-center">No Data Found !</p>
                    </div>
                )} */}
                <table className="w-full table-fixed  rounded ff-montserrat min-w-[950px]">
                    <thead>
                        <tr className="h-14 w-full text-xs font-medium text-gray-900 uppercase ">
                            {Headers?.map((header: any, idx: any) => {
                                return (
                                    <th
                                        className=""
                                        key={idx}

                                    >
                                        <span
                                            className={`${header.title === "Actions"
                                                ? "justify-end"
                                                : "justify-start"
                                                }  
                      flex items-center space-x-1.5 
                        ${header.title === "Name" && "cursor-pointer"}
                      `}
                                        >
                                            <p
                                                className={`${header.title === "Title" && "pl-[12px]"}`}
                                            >
                                                {header.title}
                                            </p>

                                        </span>
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody className="">
                        {Searching(products)?.map((product: any, id: number) => {
                            return (

                                <tr
                                    className="h-14 text-sm text-gray-900 border-b border-t border-black border-opacity-5 bg-white "
                                >
                                    <td className="mr-20">
                                        <div className="flex items-center gap-x-3 pl-3">
                                            {product?.title}
                                        </div>
                                    </td>

                                    <td>
                                        <p className="mr-14">{product?.price}</p>
                                    </td>
                                    <td>
                                        <Tippy content={product?.description}>
                                            <p className="mr-14">
                                                {product?.description?.slice(0, 25) + "..."}
                                            </p>
                                        </Tippy >
                                    </td>
                                    <td>
                                        <p className="mr-14">
                                            {product?.category}
                                        </p>
                                    </td>
                                    <td>
                                        <p className="mr-14">
                                            {product?.brand}
                                        </p>
                                    </td>
                                    <td className="text-right">
                                        <div className="flex gap-x-3 justify-end w-full">
                                            <div
                                                className="cursor-pointer"
                                            >
                                                <EditManage />
                                            </div>

                                            <div
                                                className="cursor-pointer"
                                            >
                                                <DeleteManage />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};
