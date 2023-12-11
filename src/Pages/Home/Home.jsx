import Slider from "../../Components/Slider/Slider";
import Button from "../../shareItem/Button/Button";


const Home = () => {
    return (
        <div className="mt-16 flex justify-center items-center h-[100vh] px-6">
            <div className="space-y-10">
                <h1 className=" text-2xl md:text-6xl font-semibold text-white robo ">Welcome to <span className="text-[#ffb505] font-bold ">My Portfolio</span> </h1>
                <br></br><br></br>
                <h1 className=" text-xl md:text-2xl text-white mt-4 leading-10 tracking-widest" >I'm Foridul Islam, a dedicated MERN stack developer, and this is my digital space <br></br></h1>
                <div className="flex gap-6 md:mt-24 mt-6 ">
                <Button title='About Here' width='200px'></Button>
                <Button title='Project Here' width='200px'></Button>
                </div>
            </div>
          
        </div>
    );
};

export default Home;