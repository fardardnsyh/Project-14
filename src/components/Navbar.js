import { useEffect, useState } from "react";
import { ArrowRightShort, BoxArrowInRight, List } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { MOBILE_DEVICE_WIDTH } from "../store/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  let { loggedin } = useSelector((state) => state.authSlice);
  const [isLoggedIn, setIsLoggedIn] = useState(loggedin);
  const { user } = useSelector((state) => state.authSlice);

  let menuToggleHandler = () => {
    if (MOBILE_DEVICE_WIDTH < window.innerWidth) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    menuToggleHandler();
  }, []);

  window.addEventListener("resize", menuToggleHandler);

  return (
    <nav className="duration-500 md:flex w-full md:justify-between md:items-center bg-white  px-6 py-4  md:py-5 md:fixed top-0 left-0 z-10 border-b-2">
      <div className="flex justify-between items-center ">
        <Link to="/">
          <button className="text-2xl md:text-4xl font-bold text-indigo-600">
            Opportunex {/* navigatorx careerque opportunex */}
          </button>
        </Link>
        <div className="flex md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-gray-800 hover:border-gray-800 outline-none focus:outline-none"
            onClick={() => {
              setIsOpen((isOpen) => !isOpen);
            }}
          >
            <List />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center md:gap-6 space-y-5 md:space-y-0">
          <NavLink
            to="/companies"
            className={({ isActive }) =>
              isActive
                ? `text-blue-700 font-bold ${
                    isLoggedIn ? "text-xl" : "lg:text-xl"
                  }`
                : `hover:text-indigo-600  tracking-wider ${
                    isLoggedIn ? "text-xl" : "lg:text-xl"
                  } text-gray-700`
            }
          >
            Companies
          </NavLink>{" "}
          {isLoggedIn ? (
            <>
              <NavLink
                to="/tracker"
                className={({ isActive }) =>
                  isActive
                    ? `text-blue-700 font-bold ${
                        isLoggedIn ? "text-xl" : "lg:text-xl"
                      }`
                    : `hover:text-indigo-600  tracking-wider ${
                        isLoggedIn ? "text-xl" : "lg:text-xl"
                      } text-gray-700`
                }
              >
                Tracker
              </NavLink>
              <NavLink
                to="/profile"
                className="border p-4 rounded-full font-semibold  text-gray-700 flex items-center justify-center  bg-center bg-no-repeat bg-cover w-12 h-12"
              >
                <h1>{user.name[0].toUpperCase()}</h1>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="bg-indigo-200 text-indigo-600 py-2 px-4 rounded-md duration-200 lg:text-xl outline-none focus:ring focus:ring-indigo-750 focus:border-transparent flex items-center gap-4"
              >
                Login
                <BoxArrowInRight size="24" />
              </NavLink>

              <NavLink to="/signup">
                <button
                  href="#about"
                  className=" bg-indigo-600 text-white  py-2 px-4 rounded-md duration-200 lg:text-xl outline-none focus:ring focus:ring-indigo-750 focus:border-transparent flex items-center gap-4"
                >
                  Get Started
                  <ArrowRightShort size={32} />
                </button>
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
