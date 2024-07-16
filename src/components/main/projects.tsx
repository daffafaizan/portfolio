"use client";

import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";
import pomodoro from "../../../public/Pomodoro/Shot.png";
import invite from "../../../public/Invite/invite.png";
import nubengine from "../../../public/Nubengine/MacBook-Pro-16 (1).png";
import todolist from "../../../public/Todolist/Shot (14).png";

export default function Projects() {
  return (
    <div className="min-h-screen w-full sm:w-5/6 flex flex-col justify-center items-center px-2 py-4">
      <div className="w-full text-left">
        <span className="text-3xl sm:text-5xl lg:text-7xl font-semibold text-white">
          Projects
        </span>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="relative w-full lg:w-7/12 h-80 lg:h-96 mt-4 sm:mt-6">
          <Image
            className="rounded-2xl h-full object-cover"
            src={todolist}
            alt="Todolist"
            quality={100}
            priority={true}
          />
          <div className="absolute bottom-5 right-5 px-3 py-2 sm:px-5 sm:py-3 bg-white rounded-2xl text-sm">
            <div className="flex flex-row justify-between items-center gap-3 sm:gap-4">
              <span className="text-base sm:text-xl font-medium">Todolist</span>
              <a
                className="flex flex-row justify-between items-center -mr-1 sm:-mr-2 px-2 py-1 sm:px-3 sm:py-2 gap-1 bg-[#45b8ac] hover:bg-[#3ea69b] duration-150 text-base sm:text-xl font-medium text-white rounded-xl"
                href="https://todolist.daffafaizan.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Open</span>
                <HiOutlineExternalLink />
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-5/12 h-80 lg:h-96 lg:ml-6 mt-4 sm:mt-6">
          <Image
            className="rounded-2xl h-full object-cover"
            src={pomodoro}
            alt="Pomodoro"
            quality={100}
            priority={true}
          />
          <div className="absolute bottom-5 right-5 px-3 py-2 sm:px-5 sm:py-3 bg-white rounded-2xl text-sm">
            <div className="flex flex-row justify-between items-center gap-3 sm:gap-4">
              <span className="text-base sm:text-xl font-medium">Pomodoro</span>
              <a
                className="flex flex-row justify-between items-center -mr-1 sm:-mr-2 px-2 py-1 sm:px-3 sm:py-2 gap-1 bg-[#45b8ac] hover:bg-[#3ea69b] duration-150 text-base sm:text-xl font-medium text-white rounded-xl"
                href="https://pomotimer-by-dmf.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Open</span>
                <HiOutlineExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="relative w-full lg:w-5/12 h-80 lg:h-96 mt-4 sm:mt-6">
          <Image
            className="rounded-2xl h-full object-cover"
            src={invite}
            alt="Invite"
            quality={100}
            priority={true}
          />
          <div className="absolute bottom-5 right-5 px-3 py-2 sm:px-5 sm:py-3 bg-white rounded-2xl text-sm">
            <div className="flex flex-row justify-between items-center gap-3 sm:gap-4">
              <span className="text-base sm:text-xl font-medium">Invite</span>
              <a
                className="flex flex-row justify-between items-center -mr-1 sm:-mr-2 px-2 py-1 sm:px-3 sm:py-2 gap-1 bg-[#45b8ac] hover:bg-[#3ea69b] duration-150 text-base sm:text-xl font-medium text-white rounded-xl"
                href="https://rpl-a12.et.r.appspot.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Open</span>
                <HiOutlineExternalLink />
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-7/12 h-80 lg:h-96 lg:ml-6 mt-4 sm:mt-6">
          <Image
            className="rounded-2xl h-full object-cover"
            src={nubengine}
            alt="Nubengine"
            quality={100}
            priority={true}
          />
          <div className="absolute bottom-5 right-5 px-3 py-2 sm:px-5 sm:py-3 bg-white rounded-2xl text-sm">
            <div className="flex flex-row justify-between items-center gap-3 sm:gap-4">
              <span className="text-base sm:text-xl font-medium">
                Nubengine
              </span>
              <a
                className="flex flex-row justify-between items-center -mr-1 sm:-mr-2 px-2 py-1 sm:px-3 sm:py-2 gap-1 bg-[#45b8ac] hover:bg-[#3ea69b] duration-150 text-base sm:text-xl font-medium text-white rounded-xl"
                href="http://nubengine.annavaws.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Open</span>
                <HiOutlineExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-4 sm:mt-6">
        <div className="">
          <form action="/projects">
            <button
              type="submit"
              className="border border-white text-white hover:bg-[#45b8ac] hover:text-white hover:border-[#101820] duration-150 rounded-full px-3 py-2 lg:px-5 lg:py-4 text-base sm:text-xl lg:text-3xl"
            >
              See more projects.
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
