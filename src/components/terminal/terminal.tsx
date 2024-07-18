import { useState } from "react";
import Command from "./command";

export default function Terminal() {
  const [command, setCommand] = useState("");
  const [storage, setStorage] = useState<String[]>([]);
  const handleEnter = (e: any) => {
    e.preventDefault();
    if (command !== "") {
      setStorage([...storage, command]);
    }
    setCommand("");
  };
  return (
    <div className="w-screen h-screen flex flex-col p-5 text-sm">
      <Command
        handleEnter={handleEnter}
        command={command}
        setCommand={setCommand}
      />
    </div>
  );
}
