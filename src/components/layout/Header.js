import React, { useState } from 'react';//Validado
import {FaPizzaSlice} from 'react-icons/fa';//Verificado
import { AddTask } from '../AddTask';//Validado
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
                        >
                            <button
                                type="button"
                                onClick={() => {
                                    setShowQuickAddTask(true);
                                    setShouldShowMain(true)
                                }}
                                onKeyDown={() => {
                                    setShowQuickAddTask(true);
                                    setShouldShowMain(true)
                                }}
                                >
                                +
                            </button>
                        </li>
                        <li 
                            data-testid="dark-mode-action"
                            className="settings__dark-mode">
                                <button
                                    type="button"
                                    onClick={() => setDarkMode(!darkMode)}
                                    onKeyDown={() => setDarkMode(!darkMode)}
                                >
                                    <FaPizzaSlice/>
                                </button>
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