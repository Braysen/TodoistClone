import React from 'react';
import {Header} from './components/layout/Header';//Verificado
import { Content } from './components/layout/Content';//Verificado
import {ProjectsProvider,SelectedProjectProvider} from './context';//Verificado

//Verificado
export const App = () => (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <Header></Header>
          <Content></Content>
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
);