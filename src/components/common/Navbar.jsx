import { Link } from "react-router-dom";
import { navButtons } from "../dummyData.jsx";
import Searchbar from "./Searchbar.jsx";
import NavButton from "./NavButton.jsx";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4  bg-white">
      <div className="h-8">
        <Searchbar />
      </div>
      <div className="flex gap-5">
        {navButtons.map((btn) => (
          <Link key={btn.id} href={btn.url} className="text-xl">
            <NavButton item={btn} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
