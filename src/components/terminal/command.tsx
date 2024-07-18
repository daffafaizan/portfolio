export default function Command({
  handleEnter,
  command,
  setCommand,
  currDir,
}: {
  handleEnter: any;
  command: string;
  setCommand: any;
  currDir: string;
}) {
  const handleClick = () => {
    document.getElementById("cmd")?.focus();
  };
  return (
    <div onClick={handleClick} className="h-full w-full flex flex-row gap-2">
      <div className="whitespace-nowrap">
        <span className="text-sky-600">visitor</span>
        <span className="text-blue-300">@</span>
        <span className="text-green-500">daffafaizan.com</span>
        <span className="text-blue-300">:$ {currDir}</span>
      </div>
      <form className="w-full" onSubmit={(e) => handleEnter(e)}>
        <input
          autoFocus
          id="cmd"
          type="text"
          className="w-full bg-transparent text-red-300 !outline-none"
          value={command}
          onChange={(e) => setCommand(e.currentTarget.value)}
        />
      </form>
    </div>
  );
}
