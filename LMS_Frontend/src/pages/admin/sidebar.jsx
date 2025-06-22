import React from "react";
import { Link, Outlet } from "react-router-dom";
import { LayoutDashboard, Book } from "lucide-react"; // import icons

function Sidebar() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 text-black dark:bg-gray-800 dark:text-white fixed md:static h-full shadow-lg pt-5d">
        <nav className="flex flex-col p-4 space-y-4">
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
          <Link
            to="/admin/course"
            className="flex items-center gap-3 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition"
          >
            <Book size={20} />
            Course
          </Link>
        </nav>
      </div>

      {/* Outlet area */}
      <div className="ml-5 flex-1 p-2 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
