import React, {createContext, useContext} from 'react';//Verificado
import {useProjects} from '../hooks';//Verificado

export const ProjectsContext = createContext();//Verificado
export const ProjectsProvider = ({children}) => {
    const {projects, setProjects} = useProjects();//Verificado
    //Verificado
    return(
        <ProjectsContext.Provider value={{projects, setProjects}}>
            {children}
        </ProjectsContext.Provider>
    );
};

export const useProjectsValue = () => useContext(ProjectsContext);//Verificado