import { Icon } from "@iconify/react";
import AnimatedDiv from "../animations/animateddiv";

export default function UnderConstruction() {
  return (
    <AnimatedDiv className="min-h-screen w-full sm:w-5/6 flex flex-col justify-center items-center px-2 py-4">
      <div>
        <span className="text-3xl text-white sm:text-5xl lg:text-7xl font-semibold">
          Work in progress!
        </span>
      </div>
      <div>
        <Icon icon="fluent-emoji:construction" className="h-36 w-36" />
      </div>
    </AnimatedDiv>
  );
}
