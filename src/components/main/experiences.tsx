import Slider from "./slider";

export default function Experiences() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-full sm:w-5/6 text-left px-2 py-4">
        <span className="text-3xl sm:text-5xl lg:text-7xl font-semibold text-white">
          Experiences
        </span>
      </div>
      <Slider />
    </div>
  );
}
