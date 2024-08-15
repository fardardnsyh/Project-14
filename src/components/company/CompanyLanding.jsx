import Navbar from "../Navbar";
import COMP1 from "../../assets/companies_filter.png";
import COMP2 from "../../assets/actions.png";
import COMP3 from "../../assets/overview.png";

import Footer from "../Footer";
import FeatureItem from "../landing/FeatureItem";
import { Link } from "react-router-dom";

const CompanyLanding = () => {
  // window.scroll(0, 0);
  return (
    <>
      <Navbar />

      <div className="w-full pt-20 md:pt-24 pb-20">
        <div className="w-11/12 m-auto  md:mt-12">
          <div className="w-full md:w-2/3 text-center m-auto">
            <h3 className=" text-indigo-600 font-bold  text-lg">
              UNIFIED PLATFORM
            </h3>

            <h1 className="mt-6 text-3xl  font-bold  m-auto">
              Career pages of over 300+ companies in one place.
            </h1>

            <p className="m-auto mt-6 text-xl">
              Access targeted companies career pages through a centralized
              talent platform, streamlining your job search process and saving
              you time scouring individual company careers pages.
            </p>
          </div>

          <div className="m-auto  mt-20 flex justify-between border p-8 rounded-md shadow-md">
            <div className="md:w-1/2">
              <h1 className="text-indigo-600 font-bold text-2xl">
                300+ Companies for Job Seekers
              </h1>
              <FeatureItem
                svg={
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-7 h-7 text-indigo-50"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                }
                heading="Comprehensive company listing"
                content=" Browse over 300 pre-vetted companies representing a diverse
              range of industries and sectors."
              />

              <FeatureItem
                svg={
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-7 h-7 text-indigo-50"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                }
                heading="Comprehensive company listing"
                content=" Browse over 300 pre-vetted companies representing a diverse
              range of industries and sectors."
              />
            </div>
            <div className="p-4 border w-fit rounded-md shadow-md h-fit hidden md:block">
              <img src={COMP1} />
            </div>
          </div>

          <div className="m-auto  mt-20 flex justify-between border p-8 rounded-md shadow-md">
            <div className="hidden md:block p-4 border w-1/2 rounded-md shadow-md h-fit">
              <img src={COMP2} />
            </div>
            <div className="md:w-2/5 ml-auto">
              <h1 className="text-indigo-600 font-bold text-2xl">
                {" "}
                Comprehensive company listing
              </h1>
              <FeatureItem
                svg={
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-7 h-7 text-indigo-50"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                }
                heading="Comprehensive company listing"
                content=" Browse over 300 pre-vetted companies representing a diverse
              range of industries and sectors."
              />

              <FeatureItem
                svg={
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-7 h-7 text-indigo-50"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                }
                heading="Comprehensive company listing"
                content=" Browse over 300 pre-vetted companies representing a diverse
              range of industries and sectors."
              />
            </div>
          </div>

          <div className="m-auto  mt-20 flex justify-between border p-8 rounded-md shadow-md">
            <div className="md:w-2/5">
              <h1 className="text-indigo-600 font-bold text-2xl">
                {" "}
                Comprehensive company listing
              </h1>
              <FeatureItem
                svg={
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-7 h-7 text-indigo-50"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                }
                heading="Comprehensive company listing"
                content=" Browse over 300 pre-vetted companies representing a diverse
              range of industries and sectors."
              />

              <FeatureItem
                svg={
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-7 h-7 text-indigo-50"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                }
                heading="Comprehensive company listing"
                content=" Browse over 300 pre-vetted companies representing a diverse
              range of industries and sectors."
              />
            </div>

            <div className="hidden md:block p-4 border w-1/2 rounded-md shadow-md h-fit">
              <img src={COMP3} />
            </div>
          </div>

          <div className="bg-indigo-600 mt-20 p-10 md:p-20 rounded-md flex flex-col md:flex-row justify-between items-center md:w-3/4 m-auto">
            <div>
              <h1 className="text-white font-bold text-2xl ">
                Ready to make your life easier?{" "}
              </h1>
              <p className="text-white">
                Register on opportunex today and get started
              </p>
            </div>

            <Link to="/signup">
              <button className="text-indigo-600 bg-white p-3 md:p-4 px-6 md:px-12 rounded-md font-bold  mt-6 md:mt-0">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CompanyLanding;
