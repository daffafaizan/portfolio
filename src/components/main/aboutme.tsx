export default function AboutMe() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center py-4">
      <div className="w-full text-left px-2">
        <span className="text-3xl font-semibold">About me</span>
      </div>
      <div className="w-full text-justify px-2 mt-6">
        <span className="text-lg">
          I was born in Bandung, raised in Cirebon, and currently in Depok
          pursuing my studies at the University of Indonesia as a computer
          science undergraduate
          <span className="text-cyan-500 scale-110">.</span>
          <p className="my-6" />
          Motivated by my interests in minimalism, I realized my passion in
          front-end development. I am currently building my back-end knowledge
          and combined with my front-end skills, I am working towards becoming a
          full-stack developer
          <span className="text-cyan-500 scale-110">.</span>
          <p className="my-6" />
          In my free time, I like to study, code, and read
          <span className="text-cyan-500 scale-110">.</span>
        </span>
      </div>
    </div>
  );
}
