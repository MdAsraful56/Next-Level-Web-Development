import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  return (
    <div className="">
      <nav className="bg-gray-800 px-4">
        <div className="flex justify-between items-center">
          <div className="text-white text-lg font-bold">Quiz App</div>
          <div className="space-x-4">
            <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
