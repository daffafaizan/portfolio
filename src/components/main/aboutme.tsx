export default function AboutMe() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center py-4">
      <div className="w-full text-left px-2">
        <span className="text-3xl font-semibold">About me</span>
      </div>
      <div className="w-full text-justify px-2 mt-4">
        <span className="text-lg">
          Daffa is a dedicated individual currently in his third year as a
          Computer Science Undergraduate student at the esteemed University of
          Indonesia. His educational journey has ignited a keen interest in
          Software Engineering, with a specific focus on Front End Development.
          Daffa approaches his studies and work with passion and enthusiasm.
        </span>
      </div>
      <div className="w-full px-2 mt-4">
        <button className="border border-black rounded-full px-3 py-2">
          Get to know me.
        </button>
      </div>
    </div>
  );
}
