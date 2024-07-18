import { HistoryInterface } from "@/interfaces/history";

const commands = ["help", "clear", "ls", "aboutme", "projects"];
const defaultHistory: HistoryInterface[] = [
  {
    command: "Welcome",
    result: "Welcome! 👋\nType 'help' for a list of available commands.",
  },
];
const results = {
  help: "help\n\xa0\xa0-> available commands\nclear\n\xa0\xa0-> clear the terminal\nls\n\xa0\xa0-> list of directories\naboutme\n\xa0\xa0-> about daffa\nprojects\n\xa0\xa0-> daffa's projects\ngui\n\xa0\xa0-> back to GUI mode",
  ls: "these\nare\nfake\ndirectories",
  aboutme:
    "My name is Daffa. I am a Full-stack Developer and currently a Computer Science Undergraduate at the University of Indonesia",
  projects:
    "dermatify\n\xa0\xa0-> skin analysis application\nvlecture\n\xa0\xa0-> lecture and note-taking companion\ntodolist\n\xa0\xa0-> full-stack task management app\npomotimer\n\xa0\xa0-> pomodoro timer for productivity\ninvite\n\xa0\xa0-> team-matching app\nnubengine\n\xa0\xa0-> medical dataset search engine\nnubengine\n\xa0\xa0-> medical dataset search engine\ndaffa's old portfolio\n\xa0\xa0-> my first iteration of a portfolio\nfahd's portfolio\n\xa0\xa0-> a personal website for my brother\ncurrent portfolio\n\xa0\xa0-> the website you're accessing now!\nblogAPI\n\xa0\xa0-> back-end for the blog section\ntodolistAPI\n\xa0\xa0-> back-end for the todolist app",
};

export { commands, results, defaultHistory };
