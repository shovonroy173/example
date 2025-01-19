/* eslint-disable react/prop-types */

import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <div className="w-1/6 z-30">
        <Sidebar />
      </div>

      <div className="flex w-5/6 flex-col ">
        <Navbar />
        <main
          className="overflow-y-auto transition-all duration-300 ease-in-out
            p-4 bg-gray-100 rounded-tl-lg"
        >
          <div className="mx-auto h-screen">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
