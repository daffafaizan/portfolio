export default function Command({
  handleEnter,
  command,
  setCommand,
}: {
  handleEnter: any;
  command: any;
  setCommand: any;
}) {
  const handleClick = () => {
    document.getElementById("cmd")?.focus();
  };
  return (
    <div onClick={handleClick} className="h-full w-full flex flex-row gap-2">
      <div className="whitespace-nowrap">
        <span className="text-sky-800">visitor</span>
        <span className="text-blue-300">@</span>
        <span className="text-emerald-800">daffafaizan.com</span>
        <span className="text-blue-300">:$ ~</span>
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
