import { useState } from "react";
import Command from "./command";
import History from "./history";
import { HistoryInterface } from "@/interfaces/history";
import Cookies from "js-cookie";
import {
  commands,
  defaultHistory,
  results,
  directories,
} from "@/data/commands";
import { projects } from "@/data/projects";

export default function Terminal() {
  const [command, setCommand] = useState("");
  const [storage, setStorage] = useState<HistoryInterface[]>(defaultHistory);
  const [currDir, setCurrDir] = useState("~");
  const commandResult = (input: string) => {
    switch (true) {
      case input === "help":
        return results.help;
      case input === "ls":
        return results.ls;
      case input === "aboutme":
        return results.aboutme;
      case input === "projects":
        return results.projects;
      case input.split(" ")[0] === "visit":
        const title = command.split(" ")[1];
        const project = projects.filter(
          (project) => project.code.toLowerCase() == title.toLowerCase(),
        );
        if (project.length > 0) {
          window.open(project[0].link, "_blank");
          return "visiting " + title + "...";
        } else {
          return "error: project " + title + " does not exist.";
        }
      case input.split(" ")[0] === "cd":
        if (input.split(" ").length === 1) {
          setCurrDir("~");
          return "";
        }
        const name = command.split(" ")[1];
        const directory = directories.filter(
          (dir) => dir.title.toLowerCase() == name.toLowerCase(),
        );
        if (directory.length > 0) {
          setCurrDir("~/" + name);
          return "";
        } else {
          return "cd: no such file or directory: " + name;
        }
    }
  };
  const checkCommand = (input: string) => {
    if (commands.includes(input.split(" ")[0])) {
      return commandResult(input);
    } else {
      return (
        "shell: command not found: " + command + ". Try 'help' to get started."
      );
    }
  };
  const handleEnter = (e: any) => {
    e.preventDefault();

    if (command !== "") {
      let result = checkCommand(command);
      if (command === "clear") {
        setStorage([]);
      } else if (command === "gui") {
        Cookies.set("ui", "gui");
        window.location.reload();
      } else {
        const line = {
          command,
          result: result ? result : "",
          currDir,
        };
        setStorage([...storage, line]);
      }
    }
    setCommand("");
  };

  return (
    <div className="w-screen h-screen flex flex-col p-2 text-xs md:text-sm">
      <div className="w-full h-full border-2 border-sky-800 rounded-md">
        <div className="w-full h-full p-3 md:p-5 overflow-x-scroll">
          {storage.map((history: any, index: any) => (
            <History key={index} history={history} />
          ))}
          <Command
            handleEnter={handleEnter}
            command={command}
            setCommand={setCommand}
            currDir={currDir}
          />
        </div>
      </div>
    </div>
  );
}
