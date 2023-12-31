"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const pathName = usePathname();
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    console.log(pathName);
  });
  return (
    <div className="fixed flex flex-row items-center justify-between top-0 z-20 w-full px-7 py-5 bg-white">
      <div className="flex flex-col justify-center items-center">
        <a href="/">
          <span className="text-sm sm:text-xl">
            dmf<span className="text-[#45b8ac]">.</span>{" "}
          </span>
        </a>
      </div>
      <div className="hidden md:flex flex-row justify-center items-center text-xl gap-6">
        {pathName !== "/" ? (
          <div>
            <a href="/">
              <span>Home</span>
            </a>
          </div>
        ) : (
          <></>
        )}
        <div>
          <a href="/projects">
            <span>Projects</span>
          </a>
        </div>
        <div>
          <a href="/blog">
            <span>Blog</span>
          </a>
        </div>
        <div>
          <a href="/me">
            <span>About me</span>
          </a>
        </div>
      </div>
      <div className="md:hidden flex flex-col justify-center items-center">
        {showNavbar ? (
          <button onClick={() => setShowNavbar(!showNavbar)}>
            <Bars3Icon className="block h-6 w-6 sm:h-8 sm:w-8" />
          </button>
        ) : (
          <button onClick={() => setShowNavbar(!showNavbar)}>
            <XMarkIcon className="block h-6 w-6 sm:h-8 sm:w-8" />
          </button>
        )}
      </div>
    </div>
  );
}
