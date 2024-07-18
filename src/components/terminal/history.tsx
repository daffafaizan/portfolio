import { HistoryInterface } from "@/interfaces/history";

export default function History({ history }: { history: HistoryInterface }) {
  return (
    <div className="w-full flex flex-col bg-blue-400 gap-1 mb-4">
      <div className="flex flex-row gap-2">
        <div>
          <span>visitor</span>
          <span>@</span>
          <span>daffafaizan.com</span>
          <span>:$ ~</span>
        </div>
        <span className="text-white">{history.command}</span>
      </div>
      <span className="text-white">{history.result}</span>
    </div>
  );
}
