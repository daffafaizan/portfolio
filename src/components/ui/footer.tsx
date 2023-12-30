export default function Footer() {
  return (
    <div className="min-h-64 w-full flex flex-col items-center p-4">
      <div className="w-full mt-auto border border-gray-200" />
      <div className="w-full mt-4 text-left text-sm p-4">
        <span className="">
          &copy; {new Date().getFullYear()} Daffa Muhammad Faizan.
        </span>
        <br />
        <span>All rights reserved.</span>
      </div>
    </div>
  );
}
