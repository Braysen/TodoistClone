import React from 'react';
import {Sidebar} from './Sidebar';//Verificado
import {Tasks} from '../Tasks';//Verificado
//Verificado
export const Content = () => (
    <section className="content">
        <Sidebar/>
        <Tasks/>
    </section>
);