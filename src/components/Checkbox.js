import React from 'react';
import {firebase} from '../firebase';

export const Checkbox = ({ id }) => {
    //Verificado
    const archiveTask = () => {
        firebase
          .firestore()
          .collection('tasks')
          .doc(id)
          .update({
              archived: true,
          });
    };
    //Verificado
    return (
        <div className="checkbox-holder" data-testid="checkbox-action"
             onClick={() => archiveTask()}>
                 <span className="checkbox"></span>
        </div>
    );
};