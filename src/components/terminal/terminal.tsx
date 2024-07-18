import { useState } from "react";
import Command from "./command";
import History from "./history";
import { HistoryInterface } from "@/interfaces/history";
import { commands } from "@/data/commands";

export default function Terminal() {
  const [command, setCommand] = useState("");
  const [storage, setStorage] = useState<HistoryInterface[]>([]);
  const commandResult = (input: string) => {
    switch (true) {
      case input === "help":
        return "halo";
      case input === "aboutme":
        return "i am daffa";
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
      } else {
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
    <div className="w-screen h-screen flex flex-col p-5 text-sm">
      {storage.map((history: any, index: any) => (
        <History key={index} history={history} />
      ))}
      <Command
        handleEnter={handleEnter}
        command={command}
        setCommand={setCommand}
      />
    </div>
  );
}
