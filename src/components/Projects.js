import React, {useState} from 'react';
import {useSelectedProjectValue, useProjectsValue} from '../context';

export const Projects = ({activeValue = null}) => {
    const [active,setActive] = useState(activeValue);
    const {setSelectedProject} = useSelectedProjectValue();
    const {projects} = useProjectsValue();

    console.log(projects);

    return(
        projects &&
        projects.map(project => (
            <li key={project.projectid} 
                data-doc-id={project.docid}
                data-testid="project-action"
                className={
                    active === project.projectid
                      ? 'active sidebar__project'
                      : 'sidebar__project'
                }
                onKeyDown={() => {
                    setActive(project.projectid);
                    setSelectedProject(project.projectid)
                }}
                onClick={() => {
                    setActive(project.projectid);
                    setSelectedProject(project.projectid);
                }}
                >
                    {('Project',JSON.stringify(project))}
            </li>
        ))
    );
};