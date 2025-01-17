
import { FiSearch } from "react-icons/fi";
const Searchbar = () => {
  return (
    <div className="flex items-center h-8 ">
      <input
        type="text"
        className="bg-gray-100 outline-none text-sm rounded-l-md w-full h-full px-5 py-1"
        placeholder="Search.."
      />
      <div className=" rounded-r-md h-full  px-5 py-1 content-center bg-gray-100">
        <FiSearch className="text-center text-xl text-gray-400" />
      </div>
    </div>
  );
};

export default Searchbar;
