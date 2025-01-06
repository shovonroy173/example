/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { sideBarButtons } from "../dummyData";
import { HiOutlineChevronDown } from "react-icons/hi2";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-10 w-[240px] h-screen bg-orange-500  fixed left-0 top-0 pt-24 p-5">
      {sideBarButtons.map((slug) => {

        return <SidebarSlugs key={slug.id} slug={slug} />;
      })}
    </div>
  );
};

const SidebarSlugs = ({ slug }) => {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState("down"); // "down" or "up"
  const dropdownRef = useRef(null);
  const [slugBoxDepth, setslugBoxDepth] = useState(0);
  const [slugBoxStatus, setSlugBoxStatus] = useState([slugBoxDepth]);

 const handleMouse = () =>{

 }

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
    <div className="relative " onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <div className="flex items-center gap-2">
        <img src={slug.icon} alt="" className="w-7" />
        <p className="font-semibold">{slug.title}</p>
        <HiOutlineChevronDown />
      </div>
      {show && (
        <div
        ref={dropdownRef}
          className={`absolute ${
            position === "down" ? "top-0" : "bottom-full"
          } w-full h-fit left-[190px]  bg-red-300   `}
        >
          {slug.subSlug.map((slug) => {
            return <SidebarSlugs key={slug.id} slug={slug} />;
          })}
        </div>
      )}
    </div>
  ) : (
    <div className="flex items-center gap-2">
      <img src={slug.icon} alt="" className="w-7" />
      <p className="font-semibold">{slug.title}</p>
    </div>
  );
};

export default Sidebar;
