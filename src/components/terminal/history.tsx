import { HistoryInterface } from "@/interfaces/history";

export default function History({ history }: { history: HistoryInterface }) {
  return (
    <div className="w-full flex flex-col mb-4">
      <div className="flex flex-row gap-2">
        <div>
          <span className="text-sky-800">visitor</span>
          <span className="text-blue-300">@</span>
          <span className="text-emerald-800">daffafaizan.com</span>
          <span className="text-blue-300">:$ ~</span>
        </div>
        <span className="text-white">{history.command}</span>
      </div>
      <div className="flex flex-col">
        {history.result.split("\n").map((line, index) => (
          <span key={index} className="text-white">
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}
