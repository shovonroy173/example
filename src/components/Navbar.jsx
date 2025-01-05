import { Link } from "react-router-dom"
import {navLinks} from "./dummyData";
const Navbar = () => {
  return (
    <div>
        <div className="">
            <Link href="/">
            <img src="/assets/logo.png"/>
            Restaurant
            </Link>
            {navLinks.map((item)=>(
                <Link key={item.id} to={item.url}>{item.title}</Link>
            ))}
        </div>
        <div></div>
    </div>
  )
}

export default Navbar