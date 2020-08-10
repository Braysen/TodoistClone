import React, {useState} from 'react';//Verificado
import {useSelectedProjectValue, useProjectsValue} from '../context';//Verificado
import { IndividualProject } from './IndividualProject';

export const Projects = ({activeValue = null}) => {
    const [active,setActive] = useState(activeValue);//Verificado
    const {setSelectedProject} = useSelectedProjectValue();//Verificado
    const {projects} = useProjectsValue();//Verificado

    console.log('projects', projects.length);

    return(
        projects &&
        projects.map(project => (
            <li 
                key={project.projectid} 
                data-doc-id={project.docid}
                data-testid="project-action"
                className={
                    active === project.projectid
                      ? 'active sidebar__project'
                      : 'sidebar__project'
                }
                
                >
                    <div 
                        role="button"
                        tabIndex={0}
                        onKeyDown={() => {
                            setActive(project.projectid);
                            setSelectedProject(project.projectid);
                        }}
                        onClick={() => {
                            setActive(project.projectid);
                            setSelectedProject(project.projectid);
                        }}
                    >
                        <IndividualProject project={project}/>
                    </div>
            </li>
        ))
    );
};