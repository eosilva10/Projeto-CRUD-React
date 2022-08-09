import React from 'react';
// IMPORT ICONES
import { FaEdit, FaWindowClose } from 'react-icons/fa';
// IMPORT DA LIB PROP-TYPES
import PropTypes from 'prop-types';

// IMPORT CSS
import './Tarefas.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <div>
            <FaEdit
              className="edit"
              onClick={(e) => handleEdit(e, index)}
            />
            <FaWindowClose
              className="delete"
              onClick={(e) => handleDelete(e, index)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

// VALIDANDO AS PROPS COM PROPTYPES
Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
