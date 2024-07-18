export default function History({ command }: { command: String }) {
  return (
    <div className="w-full flex flex-row bg-blue-400 gap-4">
      <div>
        <span>visitor</span>
        <span>@</span>
        <span>daffafaizan.com</span>
        <span>:$ ~</span>
      </div>
      <span className="text-white">{command}</span>
    </div>
  );
}
