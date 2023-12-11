import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { MdOutlineContactMail } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {

  return(
    <div className="bg-[#131C31]  h-auto px-6 py-10 mr-1 rounded-full">
        <nav>
            <ul>
               <Link to='/'> <li className="border rounded-full w-14 h-14 text-center flex justify-center items-center text-white hover:bg-[#FFB505] duration-300 mt-5 cursor-pointer hover:animate-bounce"><FaHome fontSize={25} /></li></Link>

                <Link to='/projects'><li className="border rounded-full w-14 h-14 text-center flex justify-center items-center text-white hover:bg-[#FFB505] duration-300 mt-5 cursor-pointer hover:animate-bounce"><GrProjects fontSize={25} /></li></Link>

              <Link to='/skills'>  <li className="border rounded-full w-14 h-14 text-center flex justify-center items-center text-white hover:bg-[#FFB505] duration-300 mt-5 cursor-pointer hover:animate-bounce"><IoIosContact fontSize={25}  /></li></Link>

                <Link to='/contact'><li className="border rounded-full w-14 h-14 text-center flex justify-center items-center text-white hover:bg-[#FFB505] duration-300 mt-5 cursor-pointer hover:animate-bounce"> <MdOutlineContactMail fontSize={25} /></li></Link>
            </ul>
        </nav>
    </div>
  );
};

export default Header;
