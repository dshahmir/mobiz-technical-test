"use client";
import { usePathname } from "next/navigation";
import { SideBar } from "./SideBar/ index";

export const LayoutProvider = ({ children }:any) => {
  const pathname = usePathname();
  return (
    <body>
    
      {pathname !== "/login" ? <SideBar> {children}</SideBar> : <>{children}</>}
    </body>
  );
};
