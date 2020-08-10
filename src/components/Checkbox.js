import React from 'react';
import {firebase} from '../firebase';//Verificado

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
    };//Verificado
    
    return (
        <div
            className="checkbox-holder"
            data-testid="checkbox-action"
            onClick={() => archiveTask()}
            onKeyDown={() => archiveTask()}
            role="button"
            tabIndex={0}
        >
            <span className="checkbox"></span>
        </div>
    );//Verificado
};