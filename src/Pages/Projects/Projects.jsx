import React from 'react';
import ProjectCard from './ProjectCard';
import './style.css'
import Overview from '../../shareItem/Overview/Overview';
  
const Projects = () => {
    return (
        <div className='mt-20'>
            <Overview title='Showcase My All project' description='This is my best Practice '></Overview>
           <div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 '>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
           </div>
        </div>
    );
};

export default Projects;