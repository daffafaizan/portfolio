export default function AboutMe() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center px-2 py-4">
      <div className="w-full sm:w-4/5 text-left">
        <span className="text-3xl sm:text-5xl font-semibold">About me</span>
      </div>
      <div className="w-full sm:w-4/5 text-justify mt-4">
        <span className="text-lg sm:text-2xl">
          Daffa, currently a third-year Computer Science Undergraduate at the
          University of Indonesia, has developed a strong interest in Software
          Engineering, specifically focusing on Front End Development. Known for
          his passionate and enthusiastic approach to both his studies and work,
          Daffa is committed to continuously expanding his skill set. While
          specializing in Front End Development, he is also actively delving
          into Back End Development to achieve a well-rounded proficiency.
        </span>
      </div>
      <div className="w-full sm:w-4/5 mt-4">
        <button className="border border-black rounded-full px-3 py-2 text-base sm:text-xl">
          Get to know me.
        </button>
      </div>
    </div>
  );
}
