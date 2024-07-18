import { useState } from "react";
import Command from "./command";
import History from "./history";
import { HistoryInterface } from "@/interfaces/history";
import Cookies from "js-cookie";
import { commands, results } from "@/data/commands";
import { useRouter } from "next/navigation";

export default function Terminal() {
  const router = useRouter();
  const [command, setCommand] = useState("");
  const [storage, setStorage] = useState<HistoryInterface[]>([]);

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
    }
  };
  const checkCommand = (input: string) => {
    if (commands.includes(input)) {
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
      const result = checkCommand(command);
      if (command === "clear") {
        setStorage([]);
      } else if (command === "gui") {
        Cookies.set("ui", "gui");
        window.location.reload();
      } else {
        console.log(result);
        const line = {
          command,
          result: result ? result : "",
        };
        setStorage([...storage, line]);
      }
    }
    setCommand("");
  };

  return (
    <div className="w-screen h-screen flex flex-col p-2 text-sm">
      <div className="w-full h-full p-5 border-2 border-sky-800 rounded-md">
        {storage.map((history: any, index: any) => (
          <History key={index} history={history} />
        ))}
        <Command
          handleEnter={handleEnter}
          command={command}
          setCommand={setCommand}
        />
      </div>
    </div>
  );
}
