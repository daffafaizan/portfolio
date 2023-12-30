import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";
import pomodoro from "../../../public/Pomodoro/Shot.png";
import invite from "../../../public/Invite/Scene 1.png";
import nubengine from "../../../public/Nubengine/MacBook-Pro-16 (1).png";
import todolist from "../../../public/Todolist/Shot (14).png";

export default function Projects() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center py-4">
      <div className="w-full sm:w-4/5 text-left px-2">
        <span className="text-3xl sm:text-5xl font-semibold">Projects</span>
      </div>
      <div className="relative w-full sm:w-4/5 px-2 mt-4">
        <Image
          className="rounded-2xl"
          src={todolist}
          alt="Todolist"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="absolute bottom-5 right-5 px-3 py-2 sm:px-5 sm:py-3 bg-white rounded-2xl text-sm">
          <div className="flex flex-row justify-between items-center gap-3">
            <span className="text-base sm:text-xl font-semibold">Todolist</span>
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
      <div className="relative w-full sm:w-4/5 px-2 mt-4">
        <Image
          className="rounded-2xl"
          src={pomodoro}
          alt="Pomodoro"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="absolute bottom-5 right-5 px-3 py-2 sm:px-5 sm:py-3 bg-white rounded-2xl text-sm">
          <div className="flex flex-row justify-between items-center gap-3">
            <span className="text-base sm:text-xl font-semibold">Pomodoro</span>
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
      <div className="relative w-full sm:w-4/5 px-2 mt-4">
        <Image
          className="rounded-2xl"
          src={invite}
          alt="Invite"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="absolute bottom-5 right-5 px-3 py-2 sm:px-5 sm:py-3 bg-white rounded-2xl text-sm">
          <div className="flex flex-row justify-between items-center gap-3">
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
      <div className="relative w-full sm:w-4/5 px-2 mt-4">
        <Image
          className="rounded-2xl"
          src={nubengine}
          alt="Nubengine"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="absolute bottom-5 right-5 px-3 py-2 sm:px-5 sm:py-3 bg-white rounded-2xl text-sm">
          <div className="flex flex-row justify-between items-center gap-3">
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
      <div className="w-full sm:w-4/5 px-2 mt-4">
        <button className="border border-black rounded-full px-3 py-2 text-base sm:text-xl">
          See more projects.
        </button>
      </div>
    </div>
  );
}
