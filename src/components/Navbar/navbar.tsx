import { useContext } from "react";
import { ThemeContext } from "../../hooks/useTheme";
import { MdDarkMode } from "react-icons/md";
import { BsFillLightbulbFill } from "react-icons/bs";
import "./navbar.css";

export function Navbar() {
  let { theme, setTheme }: any = useContext(ThemeContext);

  return (
    <div className="flex items-center px-20 justify-between navbar dark:bg-slate-800 ">
      <div>
        <h1 className="font-bold text-2xl dark:text-white">
          Where in the world?
        </h1>
      </div>

      <div className="dark-mode-switch">
        <button
          id="theme-toggle"
          type="button"
          className="  text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
        >
          {theme === "light" ? (
            <div className="flex items-center px-4 justify-between" onClick={() => setTheme("dark")}>
              <MdDarkMode
                size={30}
                className="cursor-pointer mr-4 "
                
              />
              <span className="font-bold">Dark Mode</span>
            </div>
          ) : (
            <div className="flex items-center px-4 justify-between" onClick={() => setTheme("light")}>
              <BsFillLightbulbFill
                size={26}
                className="cursor-pointer mr-4"                
              />
             <span className="font-bold">Light Mode</span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
