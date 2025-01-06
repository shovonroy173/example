import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { navButtons } from "../dummyData.jsx";
const Navbar = () => {
  return (

      <div className="flex items-center justify-between px-10 py-5 bg-orange-500 fixed w-full z-20">
        <Link href="/" className="flex items-center gap-5">
          <img src="/assets/logo.png" className="w-7 h-7"/>
          Restaurant
        </Link>
        <div className="flex items-center w-1/3 h-8">
          <input type="text" className="border-l border-t border-b border-gray-300 outline-none text-sm rounded-l-md w-full h-full px-5 py-2" placeholder="Search.."/>
          <div className="border border-gray-300 rounded-r-md h-full bg-white px-5 content-center">
          <FiSearch className="text-center text-xl"/>

          </div>
        </div>
        <div className="flex gap-5">
          {navButtons.map((btn) => (
            <Link key={btn.id} href={btn.url} className="text-xl">
              {btn.icon}
            </Link>
          ))}
        </div>
      </div>

  );
};

export default Navbar;
