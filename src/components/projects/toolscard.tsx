import { useState } from "react";
import tools from "@/data/tools";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ToolsCard({
  showTools,
  setShowTools,
}: {
  showTools: any;
  setShowTools: any;
}) {
  return (
    <>
      {showTools ? (
        <div
          className={`w-full flex flex-row flex-wrap justify-center items-center gap-6 mt-8 transition transform ease-in-out duration-300 ${
            showTools ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {tools.map((tool) => (
            <div key={tool.id} className="flex justify-center items-center">
              <Icon className="h-14 w-14 lg:h-20 lg:w-20" icon={tool.icon} />
            </div>
          ))}
        </div>
      ) : (
        <div
          className={`w-full flex flex-row flex-wrap justify-center items-center gap-6 mr-[500px] mt-8 transition transform ease-in-out duration-300 ${
            showTools ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {tools.map((tool) => (
            <div key={tool.id} className="flex justify-center items-center">
              <Icon className="h-14 w-14 lg:h-20 lg:w-20" icon={tool.icon} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
