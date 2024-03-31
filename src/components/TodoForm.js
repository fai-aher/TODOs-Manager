import React from 'react';
import '../styles/TodoForm.css';
import {TodoContext} from '../contexts/TodoContext';

function TodoForm() {

    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    } 


    return (
        <form onSubmit = {onSubmit}>
            <label>Escribe un nuevo ToDo</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escribe un nuevo ToDo" 
            />
            <div className = "TodoForm-buttonContainer">
            <button 
                    className = "TodoForm-button TodoForm-cancelButton"
                    type="button"
                    onClick={onCancel}>
                    Cancelar
                </button>
                <button
                    type = "submit"
                    className = "TodoForm-button TodoForm-addButton">
                    Agregar
                </button>
            </div>
        </form>
    );
}

export { TodoForm }; 