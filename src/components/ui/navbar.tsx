"use client";

import Cookies from "js-cookie";
import { useState } from "react";
import { paths } from "@/data/paths";
import {
  Bars3Icon,
  XMarkIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const terminalMode = () => {
    Cookies.set("ui", "terminal");
    window.location.reload();
  };
  return (
    <>
      <div className="fixed flex flex-row items-center justify-between text-white top-0 h-16 z-40 w-full px-7 bg-[#101820]/20 backdrop-blur-md">
        <div className="flex flex-col justify-center items-center">
          <a href="/">
            <span className="text-xl">
              dmf<span className="text-[#45b8ac] duration-150">.</span>{" "}
            </span>
          </a>
        </div>
        <div className="hidden md:flex flex-row justify-center items-center text-xl gap-6">
          {paths.map((path) => (
            <div key={path.name}>
              <a href={path.href}>
                <span className="hover:text-[#45b8ac] duration-150">
                  {path.name}
                </span>
              </a>
            </div>
          ))}
          <button onClick={terminalMode}>
            <span className="hover:text-[#45b8ac] duration-150">
              <CommandLineIcon className="block h-8 w-8" />
            </span>
          </button>
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
        className={`fixed top-0 z-30 w-full h-full ease-in-out duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full h-full flex flex-col justify-center items-center text-white bg-[#101820]/10 backdrop-blur-md text-xl font-medium gap-12">
          {paths.map((path) => (
            <div key={path.name}>
              <a href={path.href}>
                <span className={`hover:text-[#45b8ac] duration-150`}>
                  {path.name}
                </span>
              </a>
            </div>
          ))}
          <button onClick={terminalMode}>
            <span className="hover:text-[#45b8ac] duration-150">
              <CommandLineIcon className="block h-8 w-8" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
