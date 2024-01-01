import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center p-4">
      <div className="w-full mt-auto border border-gray-200" />
      <div className="w-full flex flex-row justify-between items-center p-4 mt-4">
        <div className="text-left text-[11px] sm:text-sm">
          <span className="">
            &copy; {new Date().getFullYear()} Daffa Muhammad Faizan.
          </span>
          <br />
          <span>All rights reserved.</span>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 md:gap-6 md:text-xl">
          <a
            className="hover:text-[#45b8ac] duration-150"
            href="https://github.com/daffafaizan"
            target="__blank"
          >
            <FiGithub />
          </a>
          <a
            className="hover:text-[#45b8ac] duration-150"
            href="https://linkedin.com/in/daffa-muhammad-faizan"
            target="__blank"
          >
            <FiLinkedin />
          </a>
          <a
            className="hover:text-[#45b8ac] duration-150"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=daffamfzn@gmail.com"
            target="__blank"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </div>
  );
}
