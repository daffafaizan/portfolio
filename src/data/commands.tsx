import { HistoryInterface } from "@/interfaces/history";

const commands = [
  "help",
  "clear",
  "ls",
  "cd",
  "visit",
  "blog",
  "aboutme",
  "projects",
  "socials",
];
const rootDirectories = [
  {
    title: "welcome",
    content: "test1",
  },
  {
    title: "classified",
    content: "test2",
  },
  {
    title: "mp4",
    content: "test3",
  },
];
const socials = [
  {
    title: "instagram",
    link: "https://instagram.com/",
  },
  {
    title: "linkedin",
    link: "https://linkedin.com/in/daffafaizan",
  },
  {
    title: "github",
    link: "https://github.com/daffafaizan",
  },
];
const defaultHistory: HistoryInterface[] = [
  {
    command: "Welcome",
    result: "Welcome! 👋\nType 'help' for a list of available commands.",
    currDir: "~",
  },
];
const results = {
  help: "help\n\xa0\xa0-> available commands\nclear\n\xa0\xa0-> clear the terminal\nls\n\xa0\xa0-> list of directories\ncd\n\xa0\xa0->change to a directory\nvisit\n\xa0\xa0-> visit a project or social media\nblog\n\xa0\xa0-> daffa's blogs\naboutme\n\xa0\xa0-> about daffa\nprojects\n\xa0\xa0-> daffa's projects\nsocials\n\xa0\xa0-> daffa's socials\ngui\n\xa0\xa0-> back to GUI mode",
  ls: "welcome\nclassified\nmp4\nwhatrulookingfor.txt",
  aboutme:
    "My name is Daffa. I am a Full-stack Developer and currently a Computer Science Undergraduate at the University of Indonesia",
  projects:
    "dermatify\n\xa0\xa0-> skin analysis application\nvlecture\n\xa0\xa0-> lecture and note-taking companion\ntodolist\n\xa0\xa0-> full-stack task management app\npomotimer\n\xa0\xa0-> pomodoro timer for productivity\ninvite\n\xa0\xa0-> team-matching app\nnubengine\n\xa0\xa0-> medical dataset search engine\noldportfolio\n\xa0\xa0-> my first iteration of a portfolio\nfahdsportfolio\n\xa0\xa0-> a personal website for my brother\nportfolio\n\xa0\xa0-> the website you're accessing now!\nblogapi\n\xa0\xa0-> back-end for the blog section\ntodolistapi\n\xa0\xa0-> back-end for the todolist app\njwttemplate\n\xa0\xa0-> expressjs jwt template",
  socials: "instagram\nlinkedin\ngithub",
  blog: "currently only available on GUI mode",
};

export { commands, results, defaultHistory, rootDirectories, socials };
