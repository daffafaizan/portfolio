import Image from "next/image";
import { wallpaper } from "../../../public";

export default function Interested() {
  return (
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
  );
}
