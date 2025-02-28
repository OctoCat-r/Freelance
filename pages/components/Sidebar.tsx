import { PlusIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-6 left-4 z-50 p-2 text-white rounded-lg transition-colors"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-10 h-10" stroke="#49F5DF" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static h-screen w-80 bg-[#081012] rounded-tr-[150px] border border-r-[#00FED8] border-l-0 border-b-0 border-t-0 p-10 pt-16 z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <p className="font-poppins text-primary font-bold text-2xl">
          Voice <span className="font-normal text-white">AI</span>
        </p>

        <div className="relative mx-auto max-w-md rounded-full bg-gradient-to-tr from-black to-[#27A897] p-[1px] shadow-lg mt-10">
          <button
            className="flex bg-[#0D1719] rounded-full p-3 w-full justify-center gap-3 text-white items-center text-sm"
            disabled
          >
            <PlusIcon className="w-5 h-5" />
            <p className="flex flex-col">
              Add Agent{" "}
              <span className="text-gray-600 text-xs">Coming soon</span>
            </p>
          </button>
        </div>

        <div className="mt-auto flex gap-2 text-xs text-zinc-600 absolute bottom-4 font-poppins">
          <Link href="#" className="hover:text-zinc-400">
            Privacy Policy
          </Link>
          <span>·</span>
          <Link href="#" className="hover:text-zinc-400">
            Terms of Services
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
