/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { sidebarButtons, sideBarButtons } from "../dummyData";
import { HiOutlineChevronDown } from "react-icons/hi2";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-32 p-5 text-sm text-gray-500 font-medium bg-white ">
      <div className="flex flex-col gap-4">
        <Link href="/" className="flex items-center">
          <img src="/assets/logo.png" className="w-10 h-7" />
          <p className="text-orange-500 font-bold">Daraz</p>
        </Link>
        {sideBarButtons.map((slug) => {
          return <SidebarSlugs key={slug.id} slug={slug} />;
        })}
      </div>
      <div className="flex justify-between bg-gray-200 rounded-lg">
        {sidebarButtons.map((item) => (
          <NavButton key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const SidebarSlugs = ({ slug }) => {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState("down"); // "down" or "up"
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (show && dropdownRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const screenHeight = window.innerHeight;

      // Check if the dropdown would overflow the screen
      if (dropdownRect.bottom > screenHeight) {
        setPosition("up");
      } else {
        setPosition("down");
      }
    }
  }, [show]);
  return slug.subSlug ? (
    <div
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="flex items-center justify-between gap-5 rounded-lg px-2 py-1 hover:text-gray-800 hover:bg-gray-100 transition ease-in-out duration-300">
        <div className="flex items-center gap-2">
          <img src={slug.icon} alt="" className="w-7" />
          <p>{slug.title}</p>
        </div>

        <HiOutlineChevronDown
          className={`text-xs transition duration-300 ease-in-out ${
            show ? " -rotate-90" : " rotate-0"
          }`}
        />
      </div>
      {show && (
        <div
          ref={dropdownRef}
          className={`absolute ${
            position === "down" ? "top-0" : "bottom-full"
          } w-full h-fit left-[calc(100%-0px)]  p-2 rounded-lg bg-white`}
        >
          {slug.subSlug.map((slug) => {
            return <SidebarSlugs key={slug.id} slug={slug} />;
          })}
        </div>
      )}
    </div>
  ) : (
    <div className="flex items-center gap-2 hover:text-gray-800 hover:bg-gray-100  rounded-lg px-2 py-1 transition duration-300 ease-in-out">
      <img src={slug.icon} alt="" className="w-7" />
      <p>{slug.title}</p>
    </div>
  );
};

export default Sidebar;
