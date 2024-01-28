import { useState } from "react";
import Image from "next/image";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { HiOutlineExternalLink } from "react-icons/hi";
import pomodoro from "../../../public/Pomodoro/Shot.png";
import invite from "../../../public/Invite/Scene 1.png";
import nubengine from "../../../public/Nubengine/MacBook-Pro-16 (1).png";
import todolist from "../../../public/Todolist/Shot (14).png";
import portodaffa from "../../../public/Portfolio/Dark (1).png";
import portodaffanew from "../../../public/Portfolio/portfolionew.png";
import portofahd from "../../../public/Portfolio/Dark (3).png";
import wallpaper from "../../../public/Misc/wp1.jpg";
import todolistapi from "../../../public/API/todolistapi.png";
import blogapi from "../../../public/API/blogapi.png";
import jwtexpress from "../../../public/API/jwtexpress.png";
import tools from "@/data/tools";
import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedDiv from "../animations/animateddiv";

export default function AllProjects() {
  const [showTodolist, setShowTodolist] = useState(false);
  const [showPomodoro, setShowPomodoro] = useState(false);
  const [showInvite, setShowInvite] = useState(false);
  const [showNubengine, setShowNubengine] = useState(false);
  const [showPortoDaffa, setShowPortoDaffa] = useState(false);
  const [showPortoFahd, setShowPortoFahd] = useState(false);
  const [showBlogAPI, setShowBlogAPI] = useState(false);
  const [showTodolistAPI, setShowTodolistAPI] = useState(false);
  const [showJWTTemplate, setShowJWTTemplate] = useState(false);
  const [showNewPorto, setShowNewPorto] = useState(false);
  const [showTools, setShowTools] = useState(false);

  return (
    <AnimatedDiv className="min-h-screen w-full sm:w-5/6 flex flex-col justify-center items-center mt-16 px-2 pb-4">
      <div className="w-full text-left">
        <span className="text-3xl sm:text-5xl lg:text-7xl font-semibold text-white">
          Projects
        </span>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="relative w-full lg:w-7/12 h-80 lg:h-96 mt-4 sm:mt-6">
          {showTodolist ? (
            <div className="absolute w-full h-full z-10 ease-in-out duration-300 rounded-3xl bg-black bg-opacity-80">
              <button
                className="absolute top-5 left-5"
                onClick={() => setShowTodolist(!showTodolist)}
              >
                <ChevronUpIcon className="h-8 w-8 text-white" />
              </button>
              <div className="absolute flex flex-col top-5 px-2 right-5 text-md text-right text-white gap-2">
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    TypeScript
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Next.js
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Express.js
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    MongoDB
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Tailwind
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    GCP
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Netlify
                  </span>
                </div>
              </div>
              <div className="absolute flex flex-col bottom-5 left-5 p-2 text-xl sm:text-3xl text-white">
                <span>Todolist</span>
              </div>
              <div className="hidden absolute xl:flex flex-col bottom-5 right-5 p-3 text-md text-right text-white">
                <span>A full stack web application</span>
                <span>featuring JWT Authentication,</span>
                <span>priority flags, task editing, and</span>
                <span>task creating capabilities.</span>
              </div>
            </div>
          ) : (
            <div className="absolute top-5 left-5 z-10 rounded-2xl">
              <button onClick={() => setShowTodolist(!showTodolist)}>
                <ChevronDownIcon className="h-8 w-8 text-white" />
              </button>
            </div>
          )}
          <Image
            className="rounded-3xl h-full object-cover"
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
          {showPomodoro ? (
            <div className="absolute w-full h-full z-10 ease-in-out duration-300 rounded-3xl bg-black bg-opacity-80">
              <button
                className="absolute top-5 left-5"
                onClick={() => setShowPomodoro(!showPomodoro)}
              >
                <ChevronUpIcon className="h-8 w-8 text-white" />
              </button>
              <div className="absolute flex flex-col top-5 px-2 right-5 text-md text-right text-white gap-2">
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    TypeScript
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Vite.js
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Tailwind
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Netlify
                  </span>
                </div>
              </div>
              <div className="absolute flex flex-col bottom-5 left-5 p-2 text-xl sm:text-3xl text-white">
                <span>Pomodoro</span>
                <span>Timer</span>
              </div>
              <div className="hidden absolute xl:flex flex-col bottom-5 right-5 p-3 text-md text-right text-white">
                <span>A productivity tool utlizing</span>
                <span>the pomodoro technique</span>
                <span>featuring a soothing alarm</span>
                <span>to keep you focused.</span>
              </div>
            </div>
          ) : (
            <div className="absolute top-5 left-5 z-10 rounded-3xl">
              <button onClick={() => setShowPomodoro(!showPomodoro)}>
                <ChevronDownIcon className="h-8 w-8 text-white" />
              </button>
            </div>
          )}
          <Image
            className="rounded-3xl h-full object-cover"
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
          {showInvite ? (
            <div className="absolute w-full h-full z-10 ease-in-out duration-300 rounded-3xl bg-black bg-opacity-80">
              <button
                className="absolute top-5 left-5"
                onClick={() => setShowInvite(!showInvite)}
              >
                <ChevronUpIcon className="h-8 w-8 text-white" />
              </button>
              <div className="absolute flex flex-col top-5 px-2 right-5 text-md text-right text-white gap-2">
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Python
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Django
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    PostgreSQL
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Tailwind
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Docker
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    GCP
                  </span>
                </div>
              </div>
              <div className="absolute flex flex-col bottom-5 left-5 p-2 text-xl sm:text-3xl text-white">
                <span>Invite</span>
              </div>
              <div className="hidden absolute xl:flex flex-col bottom-5 right-5 p-3 text-md text-right text-white">
                <span>A team-matcher project for</span>
                <span>the Software Engineering class</span>
                <span>for students to find teams to</span>
                <span>participate in a competition.</span>
              </div>
            </div>
          ) : (
            <div className="absolute top-5 left-5 z-10 rounded-3xl">
              <button onClick={() => setShowInvite(!showInvite)}>
                <ChevronDownIcon className="h-8 w-8 text-white" />
              </button>
            </div>
          )}
          <Image
            className="rounded-3xl h-full object-cover"
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
          {showNubengine ? (
            <div className="absolute w-full h-full z-10 ease-in-out duration-300 rounded-3xl bg-black bg-opacity-80">
              <button
                className="absolute top-5 left-5"
                onClick={() => setShowNubengine(!showNubengine)}
              >
                <ChevronUpIcon className="h-8 w-8 text-white" />
              </button>
              <div className="absolute flex flex-col top-5 px-2 right-5 text-md text-right text-white gap-2">
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Python
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Django
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Tailwind
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    GCP
                  </span>
                </div>
              </div>
              <div className="absolute flex flex-col bottom-5 left-5 p-2 text-xl sm:text-3xl text-white">
                <span>Nubengine</span>
              </div>
              <div className="hidden absolute xl:flex flex-col bottom-5 right-5 p-3 text-md text-right text-white">
                <span>A project for the Information</span>
                <span>Retrieval class utlizing TF-IDF</span>
                <span>for indexing and uses medical</span>
                <span>datasets from ir-datasets.</span>
              </div>
            </div>
          ) : (
            <div className="absolute top-5 left-5 z-10 rounded-3xl">
              <button onClick={() => setShowNubengine(!showNubengine)}>
                <ChevronDownIcon className="h-8 w-8 text-white" />
              </button>
            </div>
          )}
          <Image
            className="rounded-3xl h-full object-cover"
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
        <div className="relative w-full lg:w-7/12 h-80 lg:h-96 mt-4 sm:mt-6">
          {showPortoDaffa ? (
            <div className="absolute w-full h-full z-10 ease-in-out duration-300 rounded-3xl bg-black bg-opacity-80">
              <button
                className="absolute top-5 left-5"
                onClick={() => setShowPortoDaffa(!showPortoDaffa)}
              >
                <ChevronUpIcon className="h-8 w-8 text-white" />
              </button>
              <div className="absolute flex flex-col top-5 px-2 right-5 text-md text-right text-white gap-2">
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    TypeScript
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Vite.js
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Tailwind
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Netlify
                  </span>
                </div>
              </div>
              <div className="absolute flex flex-col bottom-5 left-5 p-2 text-xl sm:text-3xl text-white">
                <span>Daffa's</span>
                <span>Portfolio</span>
              </div>
              <div className="hidden absolute xl:flex flex-col bottom-5 right-5 p-3 text-md text-right text-white">
                <span>My first iteration of a</span>
                <span>portfolio website featuring</span>
                <span>finished projects, experiences,</span>
                <span>technologies, and socials.</span>
              </div>
            </div>
          ) : (
            <div className="absolute top-5 left-5 z-10 rounded-3xl">
              <button onClick={() => setShowPortoDaffa(!showPortoDaffa)}>
                <ChevronDownIcon className="h-8 w-8 text-white" />
              </button>
            </div>
          )}
          <Image
            className="rounded-3xl h-full object-cover"
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
                href="https://daffafaizan.netlify.app"
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
          {showPortoFahd ? (
            <div className="absolute w-full h-full z-10 ease-in-out duration-300 rounded-3xl bg-black bg-opacity-80">
              <button
                className="absolute top-5 left-5"
                onClick={() => setShowPortoFahd(!showPortoFahd)}
              >
                <ChevronUpIcon className="h-8 w-8 text-white" />
              </button>
              <div className="absolute flex flex-col top-5 px-2 right-5 text-md text-right text-white gap-2">
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    TypeScript
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
                    Netlify
                  </span>
                </div>
              </div>
              <div className="absolute flex flex-col bottom-5 left-5 p-2 text-xl sm:text-3xl text-white">
                <span>Fahd's</span>
                <span>Portfolio</span>
              </div>
              <div className="hidden absolute xl:flex flex-col bottom-5 right-5 p-3 text-md text-right text-white">
                <span>For my brother,</span>
                <span>a platform to share his</span>
                <span>achievements, experiences,</span>
                <span>and express himself.</span>
              </div>
            </div>
          ) : (
            <div className="absolute top-5 left-5 z-10 rounded-3xl">
              <button onClick={() => setShowPortoFahd(!showPortoFahd)}>
                <ChevronDownIcon className="h-8 w-8 text-white" />
              </button>
            </div>
          )}
          <Image
            className="rounded-3xl h-full object-cover"
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
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="relative w-full lg:w-5/12 h-80 lg:h-96 mt-4 sm:mt-6">
          {showBlogAPI ? (
            <div className="absolute w-full h-full z-10 ease-in-out duration-300 rounded-3xl bg-black bg-opacity-80">
              <button
                className="absolute top-5 left-5"
                onClick={() => setShowBlogAPI(!showBlogAPI)}
              >
                <ChevronUpIcon className="h-8 w-8 text-white" />
              </button>
              <div className="absolute flex flex-col top-5 px-2 right-5 text-md text-right text-white gap-2">
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Go
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Gin
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    MongoDB
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Atlas
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Koyeb
                  </span>
                </div>
              </div>
              <div className="absolute flex flex-col bottom-5 left-5 p-2 text-xl sm:text-3xl text-white">
                <span>Blog API</span>
              </div>
              <div className="hidden absolute xl:flex flex-col bottom-5 right-5 p-3 text-md text-right text-white">
                <span>The back end REST API for</span>
                <span>my portfolio's blog section</span>
                <span>that utilizes Gin-gonic.</span>
              </div>
            </div>
          ) : (
            <div className="absolute top-5 left-5 z-10 rounded-3xl">
              <button onClick={() => setShowBlogAPI(!showBlogAPI)}>
                <ChevronDownIcon className="h-8 w-8 text-white" />
              </button>
            </div>
          )}
          <Image
            className="rounded-3xl h-full object-cover"
            src={blogapi}
            alt="Blog API"
            quality={100}
            priority={true}
          />
          <div className="absolute bottom-5 right-5 px-3 py-2 sm:px-5 sm:py-3 bg-white rounded-2xl text-sm">
            <div className="flex flex-row justify-between items-center gap-3 sm:gap-4">
              <span className="text-base sm:text-xl font-medium">Blog API</span>
              <a
                className="flex flex-row justify-between items-center -mr-1 sm:-mr-2 px-2 py-1 sm:px-3 sm:py-2 gap-1 bg-[#45b8ac] hover:bg-[#3ea69b] duration-150 text-base sm:text-xl font-medium text-white rounded-xl"
                href="https://github.com/daffafaizan/blog-api"
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
          {showTodolistAPI ? (
            <div className="absolute w-full h-full z-10 ease-in-out duration-300 rounded-3xl bg-black bg-opacity-80">
              <button
                className="absolute top-5 left-5"
                onClick={() => setShowTodolistAPI(!showTodolistAPI)}
              >
                <ChevronUpIcon className="h-8 w-8 text-white" />
              </button>
              <div className="absolute flex flex-col top-5 px-2 right-5 text-md text-right text-white gap-2">
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    JavaScript
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Express.js
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    PostgreSQL
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    ElephantSQL
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    GCP
                  </span>
                </div>
              </div>
              <div className="absolute flex flex-col bottom-5 left-5 p-2 text-xl sm:text-3xl text-white">
                <span>Todolist API</span>
              </div>
              <div className="hidden absolute xl:flex flex-col bottom-5 right-5 p-3 text-md text-right text-white">
                <span>The back end REST</span>
                <span>API for my full stack</span>
                <span>app that utilizes JWT.</span>
              </div>
            </div>
          ) : (
            <div className="absolute top-5 left-5 z-10 rounded-3xl">
              <button onClick={() => setShowTodolistAPI(!showTodolistAPI)}>
                <ChevronDownIcon className="h-8 w-8 text-white" />
              </button>
            </div>
          )}
          <Image
            className="rounded-3xl h-full object-cover"
            src={todolistapi}
            alt="Todolist API"
            quality={100}
            priority={true}
          />
          <div className="absolute bottom-5 right-5 px-3 py-2 sm:px-5 sm:py-3 bg-white rounded-2xl text-sm">
            <div className="flex flex-row justify-between items-center gap-3 sm:gap-4">
              <span className="text-base sm:text-xl font-medium">
                Todolist API
              </span>
              <a
                className="flex flex-row justify-between items-center -mr-1 sm:-mr-2 px-2 py-1 sm:px-3 sm:py-2 gap-1 bg-[#45b8ac] hover:bg-[#3ea69b] duration-150 text-base sm:text-xl font-medium text-white rounded-xl"
                href="http://github.com/daffafaizan/todolist-be"
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
        <div className="relative w-full lg:w-7/12 h-80 lg:h-96 mt-4 sm:mt-6">
          {showNewPorto ? (
            <div className="absolute w-full h-full z-10 ease-in-out duration-300 rounded-3xl bg-black bg-opacity-80">
              <button
                className="absolute top-5 left-5"
                onClick={() => setShowNewPorto(!showNewPorto)}
              >
                <ChevronUpIcon className="h-8 w-8 text-white" />
              </button>
              <div className="absolute flex flex-col top-5 px-2 right-5 text-md text-right text-white gap-2">
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    TypeScript
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    JavaScript
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Next.js
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Express.js
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    MongoDB
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Tailwind
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Atlas
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Netlify
                  </span>
                </div>
              </div>
              <div className="absolute flex flex-col bottom-5 left-5 p-2 text-xl sm:text-3xl text-white">
                <span>Daffa's</span>
                <span>Portfolio</span>
              </div>
              <div className="hidden absolute xl:flex flex-col bottom-5 right-5 p-3 text-md text-right text-white">
                <span>My portfolio website featuring</span>
                <span>finished projects, technologies,</span>
                <span>a blog, and socials.</span>
              </div>
            </div>
          ) : (
            <div className="absolute top-5 left-5 z-10 rounded-3xl">
              <button onClick={() => setShowNewPorto(!showNewPorto)}>
                <ChevronDownIcon className="h-8 w-8 text-white" />
              </button>
            </div>
          )}
          <Image
            className="rounded-3xl h-full object-cover"
            src={portodaffanew}
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
        <div className="relative w-full lg:w-5/12 h-80 lg:h-96 lg:ml-6 mt-4 sm:mt-6">
          {showJWTTemplate ? (
            <div className="absolute w-full h-full z-10 ease-in-out duration-300 rounded-3xl bg-black bg-opacity-80">
              <button
                className="absolute top-5 left-5"
                onClick={() => setShowJWTTemplate(!showJWTTemplate)}
              >
                <ChevronUpIcon className="h-8 w-8 text-white" />
              </button>
              <div className="absolute flex flex-col top-5 px-2 right-5 text-md text-right text-white gap-2">
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    JavaScript
                  </span>
                </div>
                <div>
                  <span className="border border-white px-2 py-1 rounded-full">
                    Express.js
                  </span>
                </div>
              </div>
              <div className="absolute flex flex-col bottom-5 left-5 p-2 text-xl sm:text-3xl text-white">
                <span>JWT Express.js</span>
                <span>Template</span>
              </div>
              <div className="hidden absolute xl:flex flex-col bottom-5 right-5 p-3 text-md text-right text-white">
                <span>An Express.js template for</span>
                <span>JWT authentication and</span>
                <span>authorization featuring</span>
                <span>basic user management.</span>
              </div>
            </div>
          ) : (
            <div className="absolute top-5 left-5 z-10 rounded-3xl">
              <button onClick={() => setShowJWTTemplate(!showJWTTemplate)}>
                <ChevronDownIcon className="h-8 w-8 text-white" />
              </button>
            </div>
          )}
          <Image
            className="rounded-3xl h-full object-cover"
            src={jwtexpress}
            alt="JWT Express.js Template"
            quality={100}
            priority={true}
          />
          <div className="absolute bottom-5 right-5 px-3 py-2 sm:px-5 sm:py-3 bg-white rounded-2xl text-sm">
            <div className="flex flex-row justify-between items-center gap-3 sm:gap-4">
              <span className="text-base sm:text-xl font-medium">
                JWT Template
              </span>
              <a
                className="flex flex-row justify-between items-center -mr-1 sm:-mr-2 px-2 py-1 sm:px-3 sm:py-2 gap-1 bg-[#45b8ac] hover:bg-[#3ea69b] duration-150 text-base sm:text-xl font-medium text-white rounded-xl"
                href="https://github.com/daffafaizan/jwt-express"
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
        <div className="relative w-full lg:h-96 mt-4 sm:mt-6">
          <div className="absolute w-full h-full z-10 ease-in-out duration-300 rounded-3xl bg-black bg-opacity-80">
            <div className="absolute flex flex-col bottom-5 p-2 right-5 text-md sm:text-lg text-right text-white gap-2">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=daffamfzn@gmail.com"
                target="__blank"
                className="border hover:bg-[#45b8ac] hover:text-white hover:border-transparent px-2 py-1 lg:px-4 lg:py-3 rounded-full duration-150"
              >
                <span>Let's chat.</span>
              </a>
            </div>
            <div className="absolute flex flex-col bottom-5 left-5 p-2 text-lg sm:text-3xl text-white">
              <span>Interested to</span>
              <span>work with me?</span>
            </div>
            <div className="absolute flex flex-col top-5 right-5 p-3 text-[12px] sm:text-lg md:text-xl text-right break-normal text-white">
              <span>My to-do list is begging for partners.</span>
              <span>My calendar's open, my coffee's brewed,</span>
              <span>I'm ready to make magic happen - you in?</span>
            </div>
          </div>
          <Image
            className="rounded-3xl h-full object-cover"
            src={wallpaper}
            alt="Wallpaper"
            quality={100}
            priority={true}
          />
        </div>
      </div>
      <div className="w-full mt-4 sm:mt-6">
        <button
          onClick={() => setShowTools(!showTools)}
          className={`group flex flex-row justify-between items-center gap-4 border ${
            showTools
              ? "bg-[#45b8ac] text-white border-[#101820] hover:bg-[#3ea69b]"
              : "text-white border-white hover:bg-[#45b8ac] hover:text-white hover:border-[#101820]"
          } duration-150 rounded-full px-3 py-2 lg:px-5 lg:py-4 text-base sm:text-xl lg:text-3xl`}
        >
          <span>Tools I use.</span>
        </button>
      </div>
      {showTools ? (
        <div
          className={`w-full flex flex-row flex-wrap justify-center items-center gap-6 mt-8 transition transform ease-in-out duration-300 ${
            showTools ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {tools.map((tool) => (
            <div key={tool.id} className="flex justify-center items-center">
              <Icon className="h-14 w-14 lg:h-20 lg:w-20" icon={tool.icon} />
            </div>
          ))}
        </div>
      ) : (
        <div
          className={`w-full flex flex-row flex-wrap justify-center items-center gap-6 mr-[500px] mt-8 transition transform ease-in-out duration-300 ${
            showTools ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {tools.map((tool) => (
            <div key={tool.id} className="flex justify-center items-center">
              <Icon className="h-14 w-14 lg:h-20 lg:w-20" icon={tool.icon} />
            </div>
          ))}
        </div>
      )}
    </AnimatedDiv>
  );
}
