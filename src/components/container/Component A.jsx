import React from 'react';
import { Task } from '../../models/task.class';
import ComponentB from '../pure/Component B';

const ComponentA = () => {

    const defaultT = new Task('FirstName', 'LastName', "example@example.com", false)
    return (
        <div>
            <div>
                <h1>

                Start Tasks
                </h1>
            </div>
            <ComponentB task={defaultT}></ComponentB>
        </div>
    );
}

export default ComponentA;

