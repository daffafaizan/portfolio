import { Icon } from "@iconify/react";

export default function Error404() {
  return (
    <div className="min-h-screen w-full sm:w-5/6 flex flex-col justify-center items-center px-2 py-4">
      <div>
        <span className="text-3xl sm:text-5xl lg:text-7xl font-semibold">
          Oops!
        </span>
      </div>
      <div>
        <Icon icon="nonicons:error-16" className="h-36 w-36" />
      </div>
    </div>
  );
}
