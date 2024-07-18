import { HistoryInterface } from "@/interfaces/history";

export default function History({ history }: { history: HistoryInterface }) {
  return (
    <div className="w-full flex flex-col gap-1 mb-4">
      <div className="flex flex-row gap-2">
        <div>
          <span className="text-sky-800">visitor</span>
          <span className="text-blue-300">@</span>
          <span className="text-emerald-800">daffafaizan.com</span>
          <span className="text-blue-300">:$ ~</span>
        </div>
        <span className="text-white">{history.command}</span>
      </div>
      <span className="text-white">{history.result}</span>
    </div>
  );
}
