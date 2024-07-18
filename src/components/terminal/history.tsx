import { HistoryInterface } from "@/interfaces/history";

export default function History({ history }: { history: HistoryInterface }) {
  const zigZag = ["help", "projects"];
  return (
    <div className="w-full flex flex-col mb-4">
      <div className="flex flex-row gap-2">
        <div className="whitespace-nowrap">
          <span className="text-sky-800">visitor</span>
          <span className="text-blue-300">@</span>
          <span className="text-emerald-800">daffafaizan.com</span>
          <span className="text-blue-300">:$ ~</span>
        </div>
        <span className="text-white">{history.command}</span>
      </div>
      {zigZag.includes(history.command) ? (
        <div className="flex flex-col">
          {history.result.split("\n").map((line, index) => (
            <span
              key={index}
              className={`${index % 2 === 0 ? "text-white" : "text-gray-500"}`}
            >
              {line}
            </span>
          ))}
        </div>
      ) : (
        <div className="flex flex-col">
          {history.result.split("\n").map((line, index) => (
            <span key={index} className="text-white">
              {line}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
