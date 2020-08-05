import React, {createContext, useContext, useState} from 'react';//Verificado

export const SelectedProjectContext = createContext();//Verificado
export const SelectedProjectProvider = ({children}) => {
    const [selectedProject, setSelectedProject] = useState('INBOX');//Verificado
    
    //Verificado
    return(
        <SelectedProjectContext.Provider value={{selectedProject, setSelectedProject}}>
            {children}
        </SelectedProjectContext.Provider>
    );
};

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);//Verificado