import { useState } from "react";
import { Moon, Sun, BrainCircuit, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "../../theme/ThemeContext.jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
 const { darkMode, setDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const user = true;
  const role = "instructor";

  return (
  <>
   <nav className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md">
        <div className="max-w-screen-2xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <BrainCircuit
              size={30}
              className="text-blue-600 dark:text-blue-400"
            />
            <span className="text-xl font-bold">GrowSkill</span>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Login/Signup or Avatar – Hidden on Mobile */}
            <div className="hidden md:flex items-center gap-2">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-70" align="start">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>My Learning</DropdownMenuItem>
                      <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                      <DropdownMenuItem>Log out</DropdownMenuItem>
                      {role === "instructor" && (
                        <DropdownMenuItem>Dashboard</DropdownMenuItem>
                      )}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button variant="outline">Login</Button>
                  <Button>Signup</Button>
                </>
              )}
            </div>

            {/* Dark Mode Toggle */}
         <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
       {menuOpen && (
  <ul className="md:hidden px-6 pb-4 flex flex-col gap-3 font-medium bg-white dark:bg-gray-900 absolute top-[64px] left-0 w-full z-50 shadow-md">
    <li className="hover:text-blue-500 cursor-pointer">My Learning</li>
    <li className="hover:text-blue-500 cursor-pointer">Edit Profile</li>
    <li className="hover:text-blue-500 cursor-pointer">Log out</li>
    {role === "instructor" && (
      <li className="hover:text-blue-500 cursor-pointer">Dashboard</li>
    )}
  </ul>
)}

      </nav>
  </>
     
     
   
  );
}
