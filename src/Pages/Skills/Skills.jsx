
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Overview from '../../shareItem/Overview/Overview';

const Skills = () => {
    const skillBar = [
        {percentage:70,skillName: 'https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/JavaScript.svg'},
        {percentage:70,skillName: 'https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg'},
        {percentage:70,skillName: 'https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Firebase-Dark.svg'},
        {percentage:70,skillName: 'https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/TailwindCSS-Dark.svg'},
        {percentage:60,skillName: 'https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/NodeJS-Dark.svg'},
        {percentage:60,skillName: 'https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/MongoDB.svg'},
    ]
    return (
        <div>
            {/* skill add here  */}
           
            <Overview title='All Skills Radious
            '></Overview>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

            {
                skillBar.map( (item ,index)=>
                    <div key={index} style={{width:'200px',height:'auto'}}>
                    <CircularProgressbar value={item.percentage} styles={buildStyles({
                        pathColor: `#edaa09`,
                        trailColor: '#191B51',
       
                    })}  text={`${item.percentage}%`} />;
                    <div className='flex justify-center '>
                       <img className='w-[50px] h-[50px]' src={item?.skillName} alt="" />
                    </div>
                 </div>
                    )
            }
         </div>
         <div>
            <Overview title='Education Qualification'></Overview>
            <div>

          <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-white">Bachelor's Commmerce Accounting (BBA)</h3>
                    <p className=" mb-2 text-white">University of Hizi mohasing goverment Collage</p>
                    <p className="text-white">Graduated: 2018 - Present</p>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-white">Collage of In fo</h3>
                    <p className="text-white mb-2">collage Name of </p>
                    <p className="text-white">Graduated: 2016 - 2018</p>
                </div>
            </div>


            </div>
         </div>
        </div>
           
    );
};

export default Skills;