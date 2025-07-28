import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function SidePanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 text-black bg-white p-2 rounded-md shadow-md focus:outline-none"
      >
        <Menu size={24} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Side Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <X size={24} />
        </button>

        <nav className="mt-16 flex flex-col items-start gap-6 pl-6 pr-4 mb-5">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-800 hover:text-black">
            Home
          </Link>
        </nav>
        <h2 className="text-lg font-medium text-gray-400  px-4 ">Properties</h2>
        <nav className="mt-2 flex flex-col items-start gap-6 pl-6 pr-4">
          <Link to="/explore" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-800 hover:text-black">
            - Aranyam
          </Link>
        </nav>
        
      </div>
    </>
  );
}
