import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';


const ComponentB = ({task}) => {
    return (
        <div>
            
            <h2>
                TODO Task
            </h2>
            <h3>
                Nombre: { task.name }
            </h3>
            <h3>
                Apellido: { task.lastName }
            </h3>
            <h3>
                Correo: { task.email }
            </h3>
            <h4>
                Contacto: { task.completed ? 'En Línea' : 'No Disponible'}
            </h4>
        </div>
    );
};


ComponentB.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default ComponentB;
