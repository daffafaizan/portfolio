import { socials } from "@/data/socials";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center text-white p-4">
      <hr className="w-full mt-auto" />
      <div className="w-full flex flex-row justify-between items-center p-4 mt-4">
        <div className="text-left text-[11px] sm:text-sm">
          <span className="">
            &copy; {new Date().getFullYear()} Daffa Muhammad Faizan.
          </span>
          <br />
          <span>All rights reserved.</span>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 md:gap-6 md:text-xl">
          {socials.map((data) => (
            <a
              key={data.href}
              className="hover:text-[#45b8ac] duration-150"
              href={data.href}
              target="__blank"
            >
              {data.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
