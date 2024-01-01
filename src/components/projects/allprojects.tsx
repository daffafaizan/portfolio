import { useState } from "react";
import Image from "next/image";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { HiOutlineExternalLink } from "react-icons/hi";
import pomodoro from "../../../public/Pomodoro/Shot.png";
import invite from "../../../public/Invite/Scene 1.png";
import nubengine from "../../../public/Nubengine/MacBook-Pro-16 (1).png";
import todolist from "../../../public/Todolist/Shot (14).png";
import portodaffa from "../../../public/Portfolio/Dark (1).png";
import portofahd from "../../../public/Portfolio/Dark (3).png";

export default function AllProjects() {
  const [showPortoFahd, setShowPortoFahd] = useState(false);
  return (
    <div className="min-h-screen w-full sm:w-5/6 flex flex-col justify-center items-center mt-16 px-2 pb-4">
      <div className="w-full text-left">
        <span className="text-3xl sm:text-5xl lg:text-7xl font-semibold">
          Projects
        </span>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="relative w-full lg:w-7/12 lg:h-96 mt-4 sm:mt-6">
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
        <div className="relative w-full lg:w-5/12 lg:h-96 lg:ml-6 mt-4 sm:mt-6">
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
                href="https://pomotimer.daffafaizan.com"
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
        <div className="relative w-full lg:w-5/12 lg:h-96 mt-4 sm:mt-6">
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
        <div className="relative w-full lg:w-7/12 lg:h-96 lg:ml-6 mt-4 sm:mt-6">
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
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="relative w-full lg:w-7/12 lg:h-96 mt-4 sm:mt-6">
          <Image
            className="rounded-2xl h-full object-cover"
            src={portodaffa}
            alt="Daffa's Portfolio"
            quality={100}
            priority={true}
          />
          <div className="absolute bottom-5 right-5 px-3 py-2 sm:px-5 sm:py-3 bg-white rounded-2xl text-sm">
            <div className="flex flex-row justify-between items-center gap-3 sm:gap-4">
              <span className="text-base sm:text-xl font-medium">Daffa's</span>
              <a
                className="flex flex-row justify-between items-center -mr-1 sm:-mr-2 px-2 py-1 sm:px-3 sm:py-2 gap-1 bg-[#45b8ac] hover:bg-[#3ea69b] duration-150 text-base sm:text-xl font-medium text-white rounded-xl"
                href="https://daffafaizan.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Open</span>
                <HiOutlineExternalLink />
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-5/12 lg:h-96 lg:ml-6 mt-4 sm:mt-6">
          {showPortoFahd ? (
            <div className="absolute w-full h-full z-10 ease-in-out duration-300 rounded-2xl bg-black bg-opacity-80">
              <button
                className="absolute top-5 left-5"
                onClick={() => setShowPortoFahd(!showPortoFahd)}
              >
                <ChevronUpIcon className="h-8 w-8 text-white" />
              </button>
              <div className="absolute flex flex-col top-5 px-2 right-5 text-md text-right text-white gap-2">
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Typescript
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Next.js
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Tailwind
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Vim
                  </span>
                </div>
              </div>
              <div className="absolute flex flex-col bottom-5 left-5 p-2 text-xl text-white">
                <span>Fahd's</span>
                <span>Portfolio Website</span>
              </div>
              <div className="hidden absolute lg:flex flex-col bottom-5 right-5 p-3 text-md text-right text-white">
                <span>For my brother</span>
                <span>A platform to share his</span>
                <span>achievements, experiences,</span>
                <span>and express himself.</span>
              </div>
            </div>
          ) : (
            <div className="absolute w-full h-full z-10 ease-in-out duration-300 rounded-2xl">
              <button onClick={() => setShowPortoFahd(!showPortoFahd)}>
                <ChevronDownIcon className="absolute top-5 left-5 h-8 w-8 text-white" />
              </button>
            </div>
          )}
          <Image
            className="rounded-2xl h-full object-cover"
            src={portofahd}
            alt="Fahd's Portfolio"
            quality={100}
            priority={true}
          />
          <div className="absolute bottom-5 right-5 px-3 py-2 sm:px-5 sm:py-3 bg-white rounded-2xl text-sm">
            <div className="flex flex-row justify-between items-center gap-3 sm:gap-4">
              <span className="text-base sm:text-xl font-medium">Fahd's</span>
              <a
                className="flex flex-row justify-between items-center -mr-1 sm:-mr-2 px-2 py-1 sm:px-3 sm:py-2 gap-1 bg-[#45b8ac] hover:bg-[#3ea69b] duration-150 text-base sm:text-xl font-medium text-white rounded-xl"
                href="https://fahdzahid.com"
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
    </div>
  );
}
