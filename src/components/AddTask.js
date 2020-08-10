import React, { useState } from 'react';//Validado
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa';//Validado
import moment from 'moment';//Validado
import { firebase } from '../firebase';//Validado
import { useSelectedProjectValue } from '../context';//Validado
import { ProjectOverlay } from './ProjectOverlay';//Validado
import { TaskDate } from './TaskDate';//Validado

export const AddTask = ({
    showAddTaskMain = true,
    shouldShowMain = false,
    showQuickAddTask,
    setShowQuickAddTask,
}) => {
    const [task, setTask] = useState('');//Validado
    const [taskDate, setTaskDate] = useState('');//Validado
    const [project, setProject] = useState('');//Validado
    const [showMain, setShowMain] = useState(shouldShowMain);//Validado
    const [showProjectOverlay, setShowProjectOverlay] = useState(false);//Validado
    const [showTaskDate, setShowTaskDate] = useState(false);//Validado

    const {selectedProject} = useSelectedProjectValue();//Validado

    const addTask = () => {
        const projectid = project || selectedProject; //Validado
        let collatedDate = '';//Validado

        if(projectid === 'TODAY'){//Validado
            collatedDate = moment().format('DD/MM/YYYY');
        }else if(projectid === 'NEXT_7'){//Validado
            collatedDate = moment()
                .add(7, 'days')
                .format('DD/MM/YYYY');
        }

        return (
            task &&
            projectid &&
            firebase
                .firestore()
                .collection('tasks')
                .add({
                    archived: false,
                    projectid,
                    task,
                    date: collatedDate || taskDate,
                    userid: '$2y$10$XvdCaH3OTo7okUibz2DDv.a.uDnT.MZ0zfEXP2mM4vlr8bP3qZdhG'
                })
                .then(() => {
                    setTask('');
                    setProject('');
                    setShowMain('');
                    setShowProjectOverlay(false);
                })
            );
    };

    return(
        <div className={showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'}
             data-testid="add-task-comp">
                 {showAddTaskMain && (
                     <div
                        className="add-task__shallow"
                        data-testid="show-main-action"
                        onClick={() => setShowMain(!showMain)}
                        onKeyDown={() => setShowMain(!showMain)}
                        tabIndex={0}
                        role="button"
                        >
                            <span className="add-task__plus">+</span>
                            <span className="add-task__text">Add Task</span>
                     </div>
                 )}

                 {(showMain || showQuickAddTask) && (
                     <div className="add-task__main" data-testid="add-task-main">
                         {showQuickAddTask && (
                             <>
                                <div data-testid="quick-add-task">
                                    <h2 className="header">Quick Add Task</h2>
                                    <span
                                        className="add-task__cancel-x"
                                        data-testid="add-task-quick-cancel"
                                        onClick={() => {
                                            setShowMain(false);//Verificado
                                            setShowProjectOverlay(false);//Verificado
                                            setShowQuickAddTask(false);//Verificado
                                        }}
                                        onKeyDown={() => {
                                            setShowMain(false);//Verificado
                                            setShowProjectOverlay(false);//Verificado
                                            setShowQuickAddTask(false);//Verificado
                                        }}
                                        tabIndex={0}
                                        role="button"
                                    >
                                        X
                                    </span>
                                </div>
                             </>
                         )}
                         <ProjectOverlay 
                            setProject={setProject}
                            showProjectOverlay={showProjectOverlay}
                            setShowProjectOverlay={setShowProjectOverlay}
                         />
                         <TaskDate
                            setTaskDate={setTaskDate}
                            showTaskDate={showTaskDate}
                            setShowTaskDate={setShowTaskDate}
                         />
                         <input
                            className="add-task__content"
                            data-testid="add-task-content"
                            type="text"
                            value={task}
                            onChange={e => setTask(e.target.value)}
                         />
                         <button
                            type="button"
                            className="add-task__submit"
                            data-testid="add-task"
                            onClick={() => 
                                showQuickAddTask 
                                    ? addTask() && setShowQuickAddTask(false) 
                                    : addTask()
                            }
                            >
                             Add Task
                         </button>
                         {!showQuickAddTask && (
                             <span
                                className="add-task__cancel"
                                data-testid="add-task-main-cancel"
                                onClick={() => {
                                    setShowMain(false);
                                    setShowProjectOverlay(false);
                                }}
                                onKeyPress={() => {
                                    setShowMain(false);
                                    setShowProjectOverlay(false);
                                }}
                                tabIndex={0}
                                role="button"
                             >
                                 Cancel
                             </span>
                         )}
                         <span
                            className="add-task__project"
                            data-testid="show-project-overlay"
                            onClick={() => setShowProjectOverlay(!showProjectOverlay)}
                            onKeyDown={() => setShowProjectOverlay(!showProjectOverlay)}
                            tabIndex={0}
                            role="button"
                            >
                                <FaRegListAlt/>
                         </span>
                         <span
                            className="add-task__date"
                            data-testid="show-task-date-overlay"
                            onClick={() => setShowTaskDate(!showTaskDate)}
                            onKeyDown={() => setShowTaskDate(!showTaskDate)}
                            tabIndex={0}
                            role="button"
                         >
                             <FaRegCalendarAlt/>
                         </span>
                     </div>
                 )}
        </div>
    );
};