import React, { useState } from 'react';
import {Header} from './components/layout/Header';//Verificado
import { Content } from './components/layout/Content';//Verificado
import {ProjectsProvider,SelectedProjectProvider} from './context';//Verificado

//Verificado
export const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);//Validado


  return(
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main data-testid="application" className={darkMode ? 'darkmode' : undefined}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Content></Content>
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};