import { useContext } from "react";
import { ThemeContext } from "../../hooks/useTheme";
import { MdDarkMode } from "react-icons/md";
import { BsFillLightbulbFill } from "react-icons/bs";
import "./navbar.css";
import { Col } from "react-bootstrap";

export function Navbar() {
  let { theme, setTheme }: any = useContext(ThemeContext);

  return (
    <div className="flex items-center px-10 justify-between navbar dark:bg-slate-800 ">
      <Col md={5} xs={6}>
        <h1 className="font-bold text-2xl dark:text-white navbar-title">
          Where in the world?
        </h1>
      </Col>

      <Col lg={1} md={1} xs={1}>
        <button
          id="theme-toggle"
          type="button"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 rounded-lg text-sm p-2"
        >
          {theme === "light" ? (
            <div className="flex items-center px-2 justify-center" onClick={() => setTheme("dark")}>
              <MdDarkMode
                size={30}
                className="cursor-pointer"
                
              />           
            </div>
          ) : (
            <div className="flex items-center px-2 justify-center" onClick={() => setTheme("light")}>
              <BsFillLightbulbFill
                size={26}
                className="cursor-pointer"
                color="white"                
              />          
            </div>
          )}
        </button>
      </Col>
    </div>
  );
}
