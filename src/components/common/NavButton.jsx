/* eslint-disable react/prop-types */
const NavButton = ({item}) => {
  return (
    <div className="flex items-center justify-between  gap-2 rounded-lg px-5 py-2 text-gray-500 hover:text-gray-800  hover:bg-gray-100  font-medium transition duration-300 ease-in-out">
        <div className="text-md">
        {item.icon}
        </div>
        <div className="text-sm">
            {item.title}
        </div>
    </div>
  )
}

export default NavButton