// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./project.css"
import projectData from '../assets/assets';
import ProjectItem from '../components/projectItems';
function Projects() {

    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <p>These are some of the projects Ive worked in an effort to better myself through practical experience.</p>
            <div className="item-container">
                {projectData.map((item,index)=>(<ProjectItem key={index} title={item.title} image={item.image} url={item.url} disc={item.disc} id={item.id}/> ))}
            </div>
        </div>
    );
}
export default Projects;