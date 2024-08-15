import Navbar from "./Navbar";
import Footer from "./Footer";
import HEADER_IMG from "../assets/header_img.png";
import { ArrowRightShort, Binoculars } from "react-bootstrap-icons";
import CompaniesFeatures from "./landing/CompaniesFeatures";
import TrackerFeatures from "./landing/TrackerFeatures";
import { NavLink } from "react-router-dom";
import { getFromLocalStorage } from "../utils/localstorage";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Home = () => {
  let { loggedin, user } = useSelector((state) => state.authSlice);
  const [isLoggedIn, setIsLoggedIn] = useState(loggedin);
  useEffect(() => {
    setIsLoggedIn(loggedin);
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center w-11/12 m-auto mt-6 md:mt-28">
        <div className="w-full md:w-11/12">
          <h1 className="text-left text-3xl md:text-6xl font-bold  text-gray-800 mb-4 md:mb-6">
            Boost Your Job Search with Opportunex.
          </h1>
          <p className="pb-2 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
            Ultimate tool for job seekers, equipped with the tracker and
            advanced functionality to streamline your job search process.
          </p>

          <div className="mt-4 flex flex-col md:flex-row gap-4 md:items-center justify-start">
            {!isLoggedIn && (
              <NavLink
                to="/signup"
                className=" bg-indigo-600  text-white  py-5 px-6 rounded-md  tracking-wider duration-200 lg:text-xl focus:outline-none focus:ring-2 focus:ring-indigo-750 focus:border-transparent flex items-center gap-2 font-medium"
              >
                Get Started
                <ArrowRightShort size={32} />
              </NavLink>
            )}

            <NavLink
              to="/companies"
              className="bg-indigo-200  text-indigo-600 py-5 px-6 rounded-md tracking-wider duration-200 lg:text-xl focus:outline-none focus:ring-2 focus:ring-indigo-750 focus:border-transparent flex items-center gap-2 font-medium"
            >
              <Binoculars />
              Explore Companies
            </NavLink>
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <img
            alt="header-img"
            src={HEADER_IMG}
            className="mt-12 w-96 h-96 m-auto"
          />
        </div>
      </div>

      <div className="w-11/12 m-auto  mt-20 mb-28">
        <div className="w-full md:w-2/3 m-auto">
          <h3 className=" text-indigo-600 font-bold text-center text-lg">
            STREAMLINE WITH OPPORTUNEX
          </h3>

          <h1 className="mt-6 text-3xl text-center font-bold  m-auto">
            Tired of searching through countless company career pages and
            dealing with disorganized job applications?
          </h1>

          <p className="m-auto mt-6 text-xl">
            Finding the right job involves sifting through countless companies
            and job postings. Keeping track of which companies you've applied
            to, their application processes and follow-ups can be tedious and
            time-consuming. This is where a tool like Opportunex can help
            streamline your job search.
          </p>
        </div>
      </div>

      <CompaniesFeatures />
      <TrackerFeatures />
      <Footer />
    </>
  );
};

export default Home;
