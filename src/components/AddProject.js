import React, { useState } from 'react';//Validado
import {firebase} from '../firebase';//Validado
import {generatePushId} from '../helpers';//Validado
import {useProjectsValue} from '../context';//Verificado

export const AddProject = ({ shouldShow = false }) => {
    const [show, setShow] = useState(shouldShow);//Validado
    const [projectName, setProjectName] = useState('');//Validado

    const projectid = generatePushId();//Validado
    const {setProjects} = useProjectsValue();//Validado

    const addProject = () =>
       projectName &&
       firebase
         .firestore()
         .collection('projects')
         .add({
             projectid,
             name: projectName,
             userid: '$2y$10$XvdCaH3OTo7okUibz2DDv.a.uDnT.MZ0zfEXP2mM4vlr8bP3qZdhG'
         })
         .then(() => {
             setProjects([]);
             setProjectName('');
             setShow(false);
         });

         return(
             <div className="add-project" data-testid="add-project">
                 {show && (
                     <div className="add-project__input">
                         <input
                            value={projectName}
                            onChange={e => setProjectName(e.target.value)}
                            className="add-project__name"
                            data-testid="project-name"
                            type="text"
                            placeholder="Name your project"
                         />
                         <button
                            className="add-project__submit"
                            type="button"
                            onClick={() => addProject()}
                            data-testid="add-project-submit"
                            >
                                Add Project
                         </button>
                         <span
                            data-testid="hide-project-overlay"
                            className="add-project__cancel"
                            onClick={() => setShow(false)}
                         >
                             Cancel
                         </span>
                     </div>
                 )}
                     <span className="add-project__plus">+</span>
                     <span
                        data-testid="add-project-action"
                        className="add-project__text"
                        onClick={() => setShow(!show)}
                     >
                         Add Project
                     </span>
             </div>
         )
};