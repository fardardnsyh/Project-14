import { useState } from "react";
import { EnvelopeAtFill, Git, Github, Linkedin } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  let date = new Date();
  let { loggedin } = useSelector((state) => state.authSlice);
  const [isLoggedIn, setIsLoggedIn] = useState(loggedin);
  return (
    <footer className="py-12  border-t-2">
      <div className="w-11/12 flex flex-col md:flex-row justify-between font-semibold m-auto">
        <div className=" md:w-1/3 text-gray-500 ">
          <h1 className="text-black text-xl">Opportunex</h1>
          <p className="mt-2 text-[17px] mb-2">
            Opportunex is dedicated to placing job seekers in control of their
            future through its ultimate job search tool. The platform is
            designed with advanced functionality, such as a tracker and curated
            company exploration, to offer a seamless and efficient job search
            experience.
          </p>
          <h1>© {date.getFullYear()}, All rights reserved.</h1>
        </div>

        <div className="flex md:w-1/2 items-start justify-between mt-8 md:mt-0">
          <div>
            <h1 className="text-lg">Navigation</h1>
            <ul className="text-gray-500 flex flex-col gap-2 mt-2">
              <li>
                <NavLink to="/"> Home </NavLink>
              </li>
              <li>
                <NavLink to="/companies"> Companies </NavLink>
              </li>
              {isLoggedIn ? (
                <>
                  <li>
                    <NavLink to="/tracker">Tracker </NavLink>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <Link to="/signup">Signup</Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h1 className="text-lg">Let's Connect</h1>
            <ul className="text-gray-500 flex items-center gap-6 mt-4">
              <li>
                <a href="https://github.com/KunalRajput-git" target="_blank">
                  <Github size="22" />
                </a>
              </li>
              <li>
                <a href="mailto:kunalrajput742894@gmail.com">
                  <EnvelopeAtFill size="22" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kunal-rajput-6a82092b9/"
                  target="_blank"
                >
                  <Linkedin size="22" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-12 text-gray-500 text-lg w-11/12 m-auto text-center">
        Made with ❤ by{" "}
        <span className="text-black font-semibold">Kunal Rajput</span>.
        Illustrations from Glazestock
      </p>
    </footer>
  );
};

export default Footer;
