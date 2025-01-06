import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative ">
      <Navbar />
      {/* <div className="fixed left-0 top-0"> */}
      <Sidebar />
      {/* </div> */}
      <div className="relative -z-20 bg-gray-50">{children}</div>
    </div>
  );
};

export default Layout;
