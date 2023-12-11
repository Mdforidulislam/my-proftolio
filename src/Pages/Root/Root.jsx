import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Container from "../../shareItem/Container/Container";
import CardInfo from "../../Components/Cardinfo/CardInfo";
import './style.css'
import { motion } from "framer-motion";
const Root = () => {
  return (
<div
  // style={{
  //   backgroundImage:
  //     "url(https://portm-html.vercel.app/assets/img/bg/hero_bg.svg)",
  //   height: "100vh",
  //   backgroundPosition: "cover",
  //   overflow: "hidden", // Hide scrolling on the outer container
  //   position: "relative",
  // }}
  className="background-boyd w-full"
>
  <div className="bg-[#0F172A] bg-opacity-50 overflow-y-auto h-screen"> {/* Simplified the height setting */}
    <Container className="h-full">
      {/* Outlet (Full-width) */}
      <div className=" flex gap-6">
        <div className="md:sticky top-10 h-screen md:h-[100vh]"> {/* Adjusted the sticky height */}
          <CardInfo />
        </div>
         {/* Header Section (Visible on lg screens and sticky to the top right) */}
       <motion.div
       drag
       dragConstraints={{
        left:'500px',
        right:'500px',
        top:'100px'
       }}
       className="cursor-pointer overflow-hidden inset-3 z-20"
       >
       <div className="hidden static xl:flex items-center h-screen  w-[100px] "> {/* Adjusted the height */}
          <div className="flex items-center">
            <Header />
          </div>
        </div>
       </motion.div>
        <div className=" visible flex-1 md:w-[1000px] w-full overflow-hidden overflow-y-auto md:h-screen"> {/* Adjusted overflow styles */}
          <div className="w-full h-full">
            <Outlet />
          </div>
        </div>
       
      </div>
    </Container>
  </div>
</div>

  );
};

export default Root;
