import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { ChevronDown } from "../icons";

export const Select = ({ options, onChange, value }: any) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  const handleValue = (val: any) => {
    onChange(val);
    setShow(!show);
  };
  return (
    <div className={`relative w-full `}>
      <OutsideClickHandler onOutsideClick={() => setShow(false)}>
        <div
          onClick={handleShow}
          className={` bg-white w-full cursor-pointer  relative border rounded py-2 px-3 text-[13px] leading-[20px] text-[#1f1f1f77]   text-opacity-50  ${show && "border-gray-400"
            }`}
        >
          {value ? value : "Select"}
          <span className={`absolute   right-2 top-4 `}>
            <ChevronDown />
          </span>
        </div>
        {show && (
          <div
            className={`z-10 max-h-[350px] overflow-auto rounded w-full px-3 py-2 absolute 
              
            right-0 bg-white shadow-lg`}
          >
            <ul className=" justify-between rounded text-gray-600   ">
              {!!options?.length ? (
                options?.map(( option:any, idx:any) => {
                  return (
                    <li onClick={() => handleValue(option)} className="cursor-pointer  p-1 w-full rounded hover:bg-gray-100 " key={idx}>
                      <p className="text-[13px] leading-[20px] ff-montserrat">{option?.value}</p>
                    </li>
                  );
                })
              ) : (
                <p className="text-[13px] leading-[20px] ff-montserrat">No options found</p>
              )}
            </ul>
          </div>
        )}
      </OutsideClickHandler>
    </div>
  );
};
