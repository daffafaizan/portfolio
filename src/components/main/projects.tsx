import Image from "next/image";
import pomodoro from "../../../public/Pomodoro/Shot.png";
import invite from "../../../public/Invite/Scene 1.png";
import nubengine from "../../../public/Nubengine/MacBook-Pro-16 (1).png";

export default function Projects() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center py-4">
      <div className="w-full text-left px-2">
        <span className="text-3xl font-semibold">Projects</span>
      </div>
      <div className="relative w-full px-2 mt-4">
        <Image
          className="rounded-2xl"
          src={pomodoro}
          alt="Pomodoro"
          width={500}
          height={500}
        />
        <div className="absolute bottom-5 right-5 px-3 py-2 bg-white rounded-2xl text-sm">
          <div className="flex flex-row justify-between items-center gap-2">
            <span className="font-semibold">Pomodoro</span>
            <button className="px-2 py-1 bg-green-400 font-medium text-white rounded-xl">
              <span>Open</span>
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full px-2 mt-4">
        <Image
          className="rounded-2xl"
          src={invite}
          alt="Invite"
          width={500}
          height={500}
        />
        <div className="absolute bottom-5 right-5 px-3 py-2 bg-white rounded-2xl text-sm">
          <div className="flex flex-row justify-between items-center gap-2">
            <span className="font-semibold">Invite</span>
            <button className="px-2 py-1 bg-green-400 font-medium text-white rounded-xl">
              <span>Open</span>
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full px-2 mt-4">
        <Image
          className="rounded-2xl"
          src={nubengine}
          alt="Nubengine"
          width={500}
          height={500}
        />
        <div className="absolute bottom-5 right-5 px-3 py-2 bg-white rounded-2xl text-sm">
          <div className="flex flex-row justify-between items-center gap-2">
            <span className="font-semibold">Nubengine</span>
            <button className="px-2 py-1 bg-green-400 font-medium text-white rounded-xl">
              <span>Open</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full px-2 mt-4">
        <button className="border border-black rounded-full px-3 py-2">
          See more projects.
        </button>
      </div>
    </div>
  );
}
