import React from 'react';
import Project from '../Project';
import projectList from "../../projectList.json";

const Portfolio = () => {
        
    return (
        // Single project component goes here
        <section>
            <h1>Portfolio</h1>
            <div id="projectCards">
                {projectList.map(project => (
                    <Project project={project}
                    />
                ))}
            </div>
        </section>
    )
};

export default Portfolio;