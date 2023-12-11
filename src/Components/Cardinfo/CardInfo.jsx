import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import image from "../../assets/Black, Purple and Cyan, Neon Circular Frame Instagram Profile Picture.jpg";
import Button from "../../shareItem/Button/Button";
import "./style.css";
import { motion } from "framer-motion";


const CardInfo = () => {
  return (
    <motion.div 
    drag 
     dragConstraints={{
      left: -10,
      right: 20,
      top:10,
      bottom:10
     }}
    >
   <div className="rounded-2xl sticky top-5 border shadow-md shadow-[#1A253A] border-[#1A253A] h-[670px] w-[400px] p-6  mt-9  justify-center flex">
      <div className="absolute space-y-4">
        <div>
          <img
            className=" rounded-full w-[300px] h-auto flex justify-center items-center mt-6 cursor-pointer "
            src={image}
            alt=""
          />
        </div>
        <div>
          <h2 className="text-[#6B7A93] text-xl">Email: example@gmail.com</h2>
          <h3 className="text-[#6B7A93] text-xl">Name: Md. Foridul Islam</h3>
        </div>

        <div>
          <span className="text-[#6B7A93]">
            © 2023 Developer Foridul. All Rights Reserved{" "}
          </span>
        </div>
        <div className="flex justify-around">
          <span className="text-white text-2xl border-2 rounded-full p-3 hover:bg-[#FFB505] duration-200 hover:animate-bounce cursor-pointer">
            <FaLinkedin />
          </span>

          <span className="text-white text-2xl border-2 rounded-full p-3 hover:bg-[#FFB505] duration-200 hover:animate-bounce cursor-pointer">
            <FaGithub />
          </span>

          <span className="text-white text-2xl border-2 rounded-full p-3 hover:bg-[#FFB505] duration-200 hover:animate-bounce cursor-pointer">
            <FaFacebook />
          </span>

          <span className="text-white text-2xl border-2 rounded-full p-3 hover:bg-[#FFB505] duration-200 hover:animate-bounce cursor-pointer">
            <FaTwitter />
          </span>
        </div>
        <div>
          <Button title="HIRE ME!" width="100%" ></Button>
        </div>
      </div>
    </div>
    </motion.div>
 
  );
};

export default CardInfo;
