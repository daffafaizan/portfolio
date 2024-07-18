import Command from "./command";

export default function Terminal() {
  return (
    <div className="w-screen h-screen flex flex-col p-5 text-sm">
      <Command />
    </div>
  );
}
