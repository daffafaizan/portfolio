import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <div className="fixed flex flex-row items-center justify-between top-0 w-full px-7 py-5">
      <div className="flex flex-col justify-center items-center">
        <span className="text-sm">
          dmf<span className="text-sm text-[#45b8ac]">.</span>{" "}
        </span>
      </div>
      <div>
        <Bars3Icon className="block h-6 w-6" />
      </div>
    </div>
  );
}
