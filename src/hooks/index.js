import { useState, useEffect } from 'react';//Verificado
import moment from 'moment';//Verificado
import { firebase } from '../firebase';//Verificado
import { collatedTasksExist } from '../helpers';//Verificado

export const useTasks = selectedProject => {
  const [tasks, setTasks] = useState([]);//Verificado
  const [archivedTasks, setArchivedTasks] = useState([]);//Verificado

  useEffect(() => { //Verificado
    let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userid', '==', '$2y$10$XvdCaH3OTo7okUibz2DDv.a.uDnT.MZ0zfEXP2mM4vlr8bP3qZdhG');
    //Verificado
    unsubscribe =  
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where('projectid', '==', selectedProject))
        : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where(
            'date',
            '==',
            moment().format('DD/MM/YYYY')
          ))
        : selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==', ''))
        : unsubscribe; 
    /* Verificado */
    unsubscribe = unsubscribe.onSnapshot(snapshot => {
      const newTasks = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data(),
      }));

      setTasks(
        selectedProject === 'NEXT_7'
          ? newTasks.filter(
              task =>
                moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                task.archived !== true
            )
          : newTasks.filter(task => task.archived !== true)
      );
      setArchivedTasks(newTasks.filter(task => task.archived !== false));//Verificado
    });

    return () => unsubscribe();//Verificado
  }, [selectedProject]); //Fin de useState Verificado

  return { tasks, archivedTasks };//Verificado
};

//Verificado
export const useProjects = () => {
  const [projects, setProjects] = useState([]);//Verificado

  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .where('userid', '==', '$2y$10$XvdCaH3OTo7okUibz2DDv.a.uDnT.MZ0zfEXP2mM4vlr8bP3qZdhG')
      .orderBy('projectid')
      .get()
      .then(snapshot => {
        const allProjects = snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id,
        }));//Verificado

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);//Verificado

  return { projects, setProjects };
};