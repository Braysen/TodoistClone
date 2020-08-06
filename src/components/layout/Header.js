import React, { useState } from 'react';
import {FaPizzaSlice} from 'react-icons/fa';//Verificado
import { AddTask } from '../AddTask';
//Verificado
export const Header = ({darkMode, setDarkMode}) => {
    const [shouldShowMain, setShouldShowMain] = useState(false);//Validado
    const [showQuickAddTask, setShowQuickAddTask]= useState(false);//Validado

    return(
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="Todoist"></img>
                </div>
                <div className="settings">
                    <ul>
                        <li
                            data-testid="quick-add-task-action"
                            className="settings__add"
                            onClick={() => {
                                            setShowQuickAddTask(true);
                                            setShouldShowMain(true)

                                            /*setShowProjectOverlay(false);*/
                                            /*setShowQuickAddTask(false);*/
                                    }}
                        >
                            +
                        </li>
                        <li 
                            data-testid="dark-mode-action"
                            className="settings__dark-mode"
                            onClick={() => setDarkMode(!darkMode)}>
                            <FaPizzaSlice/>
                        </li>
                    </ul>
                </div>
            </nav>
            <AddTask
                showAddTaskMain={false}
                shouldShowMain={shouldShowMain}
                showQuickAddTask={showQuickAddTask}
                setShowQuickAddTask={setShowQuickAddTask}
            />
        </header>
    );
};