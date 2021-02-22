import React from 'react';

const Project = ({project}) => {
    
    return (
        
        <figure className="projectCard">
            
            <div className="projectText">
            
                <div >
                
                <a href={project.deploy} target="_blank"><h3>Deployed Link</h3></a>
                
                
                </div>
                
                <p>{project.desc}</p>

                <a href={project.repo} target="_blank">Github Link</a>
            </div>
            <img className="projectBackground" alt={project.name} src={require(`../../assets/images/${project.image}`).default} />
           
        </figure>
    )
}

export default Project;