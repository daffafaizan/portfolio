import CarouselDefault from "./carousel";

export default function Projects() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center py-4">
      <div className="w-full text-left px-2">
        <span className="text-3xl font-semibold">Projects</span>
      </div>
      <div className="w-full px-2 mt-4">
        <button className="border border-black rounded-full px-3 py-2">
          See more projects.
        </button>
      </div>
    </div>
  );
}
