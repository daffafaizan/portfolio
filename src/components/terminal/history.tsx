import { HistoryInterface } from "@/interfaces/history";
import { directories } from "@/data/commands";

export default function History({ history }: { history: HistoryInterface }) {
  const zigZag = ["help", "projects"];
  return (
    <div className="w-full flex flex-col mb-4">
      <div className="flex flex-row gap-2">
        <div className="whitespace-nowrap">
          <span className="text-sky-600">visitor</span>
          <span className="text-blue-300">@</span>
          <span className="text-green-500">daffafaizan.com</span>
          <span className="text-blue-300">:$ {history.currDir}</span>
        </div>
        {history.result.includes("command not found") ||
        history.result.includes("error") ? (
          <span className="text-red-700">{history.command}</span>
        ) : (
          <>
            {history.command.length > 1 ? (
              <>
                <span className="text-green-500">
                  {history.command.split(" ")[0]}
                </span>
                <span className="text-white">
                  {history.command.split(" ")[1]}
                </span>
              </>
            ) : (
              <span className="text-green-500">
                {history.command.split(" ")[0]}
              </span>
            )}
          </>
        )}
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
            <span
              key={index}
              className={`${
                directories.filter((dir) => dir.title === line).length > 0
                  ? "text-blue-300"
                  : "text-white"
              }`}
            >
              {line}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
