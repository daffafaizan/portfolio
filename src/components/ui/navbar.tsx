"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const pathName = usePathname();
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <>
      <div className="fixed flex flex-row items-center justify-between top-0 h-16 z-20 w-full px-7 bg-white">
        <div className="flex flex-col justify-center items-center">
          <a href="/">
            <span className="text-xl">
              dmf<span className="text-[#45b8ac]">.</span>{" "}
            </span>
          </a>
        </div>
        <div className="hidden md:flex flex-row justify-center items-center text-xl gap-6">
          {pathName !== "/" ? (
            <div>
              <a href="/">
                <span className="hover:text-gray-500">Home</span>
              </a>
            </div>
          ) : (
            <></>
          )}
          {pathName !== "/projects" ? (
            <div>
              <a href="/projects">
                <span className="hover:text-gray-500">Projects</span>
              </a>
            </div>
          ) : (
            <></>
          )}
          {pathName !== "/blog" ? (
            <div>
              <a href="/blog">
                <span className="hover:text-gray-500">Blog</span>
              </a>
            </div>
          ) : (
            <></>
          )}
          {pathName !== "/me" ? (
            <div>
              <a href="/me">
                <span className="hover:text-gray-500">About me</span>
              </a>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="md:hidden flex flex-col justify-center items-center">
          {showNavbar ? (
            <button onClick={() => setShowNavbar(!showNavbar)}>
              <XMarkIcon className="block h-8 w-8" />
            </button>
          ) : (
            <button onClick={() => setShowNavbar(!showNavbar)}>
              <Bars3Icon className="block h-8 w-8" />
            </button>
          )}
        </div>
      </div>
      <div
        className={`fixed top-0 z-10 w-full h-full ease-in-out duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full h-full flex flex-col justify-center items-center bg-white text-xl font-medium gap-12">
          {pathName !== "/" ? (
            <div>
              <a href="/">
                <span className="hover:text-gray-500">Home</span>
              </a>
            </div>
          ) : (
            <></>
          )}
          {pathName !== "/projects" ? (
            <div>
              <a href="/projects">
                <span className="hover:text-gray-500">Projects</span>
              </a>
            </div>
          ) : (
            <></>
          )}
          {pathName !== "/blog" ? (
            <div>
              <a href="/blog">
                <span className="hover:text-gray-500">Blog</span>
              </a>
            </div>
          ) : (
            <></>
          )}
          {pathName !== "/me" ? (
            <div>
              <a href="/me">
                <span className="hover:text-gray-500">About me</span>
              </a>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
