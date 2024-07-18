export default function Command({
  handleEnter,
  command,
  setCommand,
}: {
  handleEnter: any;
  command: any;
  setCommand: any;
}) {
  return (
    <div className="w-full flex flex-row bg-blue-400 gap-4">
      <div>
        <span>visitor</span>
        <span>@</span>
        <span>daffafaizan.com</span>
        <span>:$ ~</span>
      </div>
      <form onSubmit={(e) => handleEnter(e)}>
        <input
          type="text"
          className="bg-white"
          value={command}
          onChange={(e) => setCommand(e.currentTarget.value)}
        />
      </form>
    </div>
  );
}
