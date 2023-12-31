import { Icon } from "@iconify/react";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen w-full sm:w-5/6 flex flex-col justify-center items-center px-2 py-4">
      <div>
        <span>Work in progress!</span>
      </div>
      <div>
        <Icon
          icon="fluent-emoji:construction"
          className="h-36 w-36 xxs:h-36 xxs:w-36 xxxs:h-36 xxxs:w-36 hover:scale-110 duration-150"
        />
      </div>
    </div>
  );
}
