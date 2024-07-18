import { useState } from "react";
import Command from "./command";
import History from "./history";
import { HistoryInterface } from "@/interfaces/history";

export default function Terminal() {
  const [command, setCommand] = useState("");
  const [storage, setStorage] = useState<HistoryInterface[]>([]);
  const handleEnter = (e: any) => {
    e.preventDefault();

    if (command !== "") {
      const line = {
        command,
        result: "Test",
      };
      setStorage([...storage, line]);
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
