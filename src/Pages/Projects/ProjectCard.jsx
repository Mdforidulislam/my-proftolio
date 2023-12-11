import React, { useState } from 'react';
import imgage from '../../assets/screencapture-preview-themeforest-net-item-genz-creative-personal-blog-portfolio-nextjs-template-full-screen-preview-42139590-2023-12-11-20_34_14.png'

const ProjectCard = () => {
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };
    return (
        <div className='  w-full md:w-[400px] h-[600px] bg-[#131c31] p-4 rounded-lg relative  cursor-pointer py-4'>
        <div
          className={`h-full  mt-0 overflow-hidden `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
            <img className={`mt-0 ${isHovered?'scrolling':''} hover:mb-0` } src={imgage} alt="" />
        </div>
      </div>
    
    );
};

export default ProjectCard;