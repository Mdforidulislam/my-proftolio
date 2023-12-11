import Button from "../../shareItem/Button/Button";

const CardHome = ({ title, description, btnText, img }) => {
    return (
      <div className=" overflow-hidden shadow-lg rounded-lg mb-10 ">
    
  
        <div className="p-10 bg-[#131C31] ">
        
          <h1 className="text-[#3D6B93] text-2xl font-semibold mb-2">{title}</h1>
          <p className="text-gray-400 text-sm mb-4">{description}</p>
  
          {/* <button className="bg-[#3D6B93] text-white py-2 px-4 rounded hover:bg-[#2A4365] transition duration-300">
            {btnText}
          </button> */}
          <Button title={btnText} width='160px'></Button>
        </div>
      </div>
    );
  };
  

export default CardHome;