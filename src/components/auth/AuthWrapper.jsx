import Navbar from "../Navbar";
import Footer from "../Footer";

const AuthWrapper = ({ children, img, heading, sub_heading, img_w }) => {
  window.scroll(0, 0);
  return (
    <>
      <Navbar />
      <div className="flex justify-between pb-20 w-11/12 m-auto">
        <div className="w-2/6 pt-36 hidden md:block flex-shrink-0">
          <img
            alt="auth-img"
            src={img}
            className={`translate -scale-x-100 mt-12 ml-8 ${
              img_w ? img_w : "w-full"
            }`}
          />
        </div>
        <div className="md:pt-28 w-full md:w-1/2">
          <div className=" w-11/12 m-auto">
            <h1 className="mt-8 text-2xl font-bold text-indigo-600">
              {heading}
            </h1>
            <h3>{sub_heading}</h3>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AuthWrapper;
