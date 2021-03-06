  import React, { useEffect } from 'react';
import { Checkbox } from './Checkbox';//Verificado*
import { useTasks } from '../hooks';//Verificado*
import { collatedTasks } from '../constants';//Verificado
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers';//Verificado
import { useSelectedProjectValue, useProjectsValue } from '../context';//Verificado
import { AddTask } from './AddTask';

export const Tasks = () => {
    const { selectedProject } = useSelectedProjectValue();//Verificado
    const {projects} = useProjectsValue();//Verificado
    const {tasks} = useTasks(selectedProject);//Verificado

    let projectName = '';//Verificado
    
    if(projects.length > 0 && selectedProject && !collatedTasksExist(selectedProject)){//Verificado
        projectName = getTitle(projects, selectedProject).name;//Verificado
    }

    if(collatedTasksExist(selectedProject) && selectedProject){//Verificado
        projectName = getCollatedTitle(collatedTasks, selectedProject).name;//Verificado
    }
    
    //Verificado
    useEffect(() => {
        document.title = `${projectName}: Todoist`;
    });

    console.log('tasks',tasks);
    //Verificado
    return(
        <div className="tasks" data-testid="tasks">
            <h2 data-testid="project-name">{projectName}</h2>

            <ul className="tasks__list">
                {tasks.map((task) => (
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id}/>
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
            <AddTask/>
        </div>
    );
};