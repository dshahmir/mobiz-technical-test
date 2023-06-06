import './globals.css'
import 'tippy.js/dist/tippy.css';
import React from "react";
import { LayoutProvider } from "../components/layout-provider";
import { NextAuthProvider } from "./providers";
export const metadata = {
  title: "Test",
  description: "technical test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <LayoutProvider>
          <div className="w-full h-full p-5 bg-[#F8F8F8]">{children}</div>
        </LayoutProvider>
      </NextAuthProvider>
    </html>
  );
}
