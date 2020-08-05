import React,{useState} from 'react';//Verificado
import {FaTrashAlt} from 'react-icons/fa';//Verificado
import {useProjectsValue, useSelectedProjectValue} from '../context';//Verificado
import {firebase} from '../firebase';//Verificado

export const IndividualProject = ({project}) => {
    const [showConfirm, setShowConfirm] = useState(false);//Verificado
    const {projects, setProjects} = useProjectsValue();//Verificado
    const {setSelectedProject} = useSelectedProjectValue();//Verificado

    //Verificado
    const deleteProject = (docId) => {
        firebase
          .firestore()
          .collection('projects')
          .doc(docId)
          .delete()
          .then(() => {
              setProjects([...projects]);
              setSelectedProject('INBOX');
          });
    };

    //Verificado
    return(
        <>
            <span className="sidebar__dot">*</span>
            <span className="sidebar__project-name">{project.name}</span>
            <span className="sidebar__project-delete" data-testid="delete-project"
                  onClick={() => setShowConfirm(!showConfirm)}>
                      <FaTrashAlt/>
                      {showConfirm && (
                          <div className="project-delete-modal">
                              <div className="project-delete-modal__inner">
                                  <p>Are you sure you want to delete this project</p>
                                  <button type="button" onClick={() => deleteProject(project.docId)}>
                                      Delete
                                  </button>
                                  <span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span>
                              </div>
                          </div>
                      )}
            </span>
        </>
    );
};