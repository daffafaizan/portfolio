import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";
import pomodoro from "../../../public/Pomodoro/Shot.png";
import invite from "../../../public/Invite/Scene 1.png";
import nubengine from "../../../public/Nubengine/MacBook-Pro-16 (1).png";
import todolist from "../../../public/Todolist/Shot (14).png";

export default function Projects() {
  return (
    <div className="min-h-screen w-full sm:w-4/5 flex flex-col justify-center items-center px-2 py-4">
      <div className="w-full text-left">
        <span className="text-3xl sm:text-5xl font-semibold">Projects</span>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="relative w-full lg:w-2/3 lg:h-96 mt-4 sm:mt-6">
          <Image
            className="rounded-2xl h-full object-cover"
            src={todolist}
            alt="Todolist"
          />
          <div className="absolute bottom-5 right-5 px-3 py-2 sm:px-5 sm:py-3 bg-white rounded-2xl text-sm">
            <div className="flex flex-row justify-between items-center gap-3 sm:gap-4">
              <span className="text-base sm:text-xl font-semibold">
                Todolist
              </span>
              <a
                className="flex flex-row justify-between items-center -mr-1 sm:-mr-2 px-2 py-1 sm:px-3 sm:py-2 gap-1 bg-green-400 text-base sm:text-xl font-medium text-white rounded-xl"
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
        <div className="relative w-full lg:w-1/3 lg:h-96 lg:ml-6 mt-4 sm:mt-6">
          <Image
            className="rounded-2xl h-full object-cover"
            src={pomodoro}
            alt="Pomodoro"
          />
          <div className="absolute bottom-5 right-5 px-3 py-2 sm:px-5 sm:py-3 bg-white rounded-2xl text-sm">
            <div className="flex flex-row justify-between items-center gap-3 sm:gap-4">
              <span className="text-base sm:text-xl font-semibold">
                Pomodoro
              </span>
              <a
                className="flex flex-row justify-between items-center -mr-1 sm:-mr-2 px-2 py-1 sm:px-3 sm:py-2 gap-1 bg-green-400 text-base sm:text-xl font-medium text-white rounded-xl"
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
        <div className="relative w-full lg:w-1/3 lg:h-96 mt-4 sm:mt-6">
          <Image
            className="rounded-2xl h-full object-cover"
            src={invite}
            alt="Invite"
          />
          <div className="absolute bottom-5 right-5 px-3 py-2 sm:px-5 sm:py-3 bg-white rounded-2xl text-sm">
            <div className="flex flex-row justify-between items-center gap-3 sm:gap-4">
              <span className="text-base sm:text-xl font-semibold">Invite</span>
              <a
                className="flex flex-row justify-between items-center -mr-1 sm:-mr-2 px-2 py-1 sm:px-3 sm:py-2 gap-1 bg-green-400 text-base sm:text-xl font-medium text-white rounded-xl"
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
        <div className="relative w-full lg:w-2/3 lg:h-96 lg:ml-6 mt-4 sm:mt-6">
          <Image
            className="rounded-2xl h-full object-cover"
            src={nubengine}
            alt="Nubengine"
          />
          <div className="absolute bottom-5 right-5 px-3 py-2 sm:px-5 sm:py-3 bg-white rounded-2xl text-sm">
            <div className="flex flex-row justify-between items-center gap-3 sm:gap-4">
              <span className="text-base sm:text-xl font-semibold">
                Nubengine
              </span>
              <a
                className="flex flex-row justify-between items-center -mr-1 sm:-mr-2 px-2 py-1 sm:px-3 sm:py-2 gap-1 bg-green-400 text-base sm:text-xl font-medium text-white rounded-xl"
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
      <div className="w-full px-2 mt-4 sm:mt-6">
        <button className="border border-black rounded-full px-3 py-2 text-base sm:text-xl">
          See more projects.
        </button>
      </div>
    </div>
  );
}
