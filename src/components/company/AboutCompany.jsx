import { useSelector } from "react-redux";
import SuggestBtn from "./SuggestBtn";

const AboutCompany = () => {
  const companyState = useSelector((state) => state.companySlice);
  const { name, website_url, size, description, founded_year, type } =
    companyState.selectedCompany;
  return (
    <div className="w-11/12 m-auto mt-4">
      <h1 className="text-xl font-semibold capitalize">{name} Overview</h1>
      <table className="table-auto w-full text-gray-700 mt-4">
        <tbody className="flex flex-wrap justify-between leading-8">
          <tr className="w-full lg:w-[48%]">
            <td className="font-bold pr-4">Website:</td>
            <td>
              <a
                href="https://www.microsoft.com/en-in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold"
              >
                {website_url}
              </a>
            </td>
          </tr>
          <tr className="w-full lg:w-[48%]">
            <td className="font-bold pr-4">Size:</td>
            <td>{size}+ Employees</td>
          </tr>
          <tr className="w-full lg:w-[48%]">
            <td className="font-bold pr-4 ">Founded Year:</td>
            <td>{founded_year}</td>
          </tr>
          <tr className="w-full lg:w-[48%]">
            <td className="font-bold pr-4">Type:</td>
            <td>{type}</td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-700 mt-4">{description}</p>
    </div>
  );
};

export default AboutCompany;
