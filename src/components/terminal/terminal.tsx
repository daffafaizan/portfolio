import { useState } from "react";
import Command from "./command";
import History from "./history";
import { HistoryInterface } from "@/interfaces/history";
import Cookies from "js-cookie";
import {
  commands,
  defaultHistory,
  results,
  rootDirectories,
  socials,
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
        const dir = currDir.split("/")[1];
        if (!dir) {
          return results.ls;
        }
        let directory: any[] = [];
        switch (true) {
          case dir === "~":
            directory = rootDirectories.filter(
              (dir) => dir.title.toLowerCase() == name.toLowerCase(),
            );
          case dir === "welcome":
            return "hello.txt";
          case dir === "classified":
            return "secret.txt";
          case dir === "mp4":
            return "link.txt";
        }
        return directory[0].content;
      case input === "aboutme":
        return results.aboutme;
      case input === "projects":
        return results.projects;
      case input.split(" ")[0] === "visit":
        const title = command.split(" ")[1];
        const project = projects.filter(
          (project) => project.code.toLowerCase() == title.toLowerCase(),
        );
        const socmed = socials.filter(
          (soc) => soc.title.toLowerCase() == title.toLowerCase(),
        );
        if (project.length > 0) {
          window.open(project[0].link, "_blank");
          return "visiting " + title + "...";
        } else if (socmed.length > 0) {
          window.open(socmed[0].link, "_blank");
          return "visiting " + title + "...";
        } else {
          return "error: project or social media " + title + " does not exist.";
        }
      case input.split(" ")[0] === "cd":
        if (input.split(" ").length === 1) {
          setCurrDir("~");
          return "";
        }
        const cur = currDir.length === 1 ? "~" : currDir.split("/")[1];
        const name = command.split(" ")[1];
        switch (true) {
          case cur === "~":
            const dire = rootDirectories.filter(
              (dir) => dir.title.toLowerCase() == name.toLowerCase(),
            );
            if (dire.length > 0) {
              setCurrDir("~/" + name);
              return "";
            }
            return "cd: no such file or directory: " + name;
          default:
            return "cd: no such file or directory: " + name;
        }
      case input === "socials":
        return results.socials;
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
