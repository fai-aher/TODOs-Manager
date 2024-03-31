import React from "react";
import {TodoCounter} from './components/TodoCounter';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import {TodoItem} from './components/TodoItem';
import {CreateTodoButton} from './components/CreateTodoButton';  
import {TodoLoading} from './components/TodoLoading';
import {TodoError} from './components/TodoError'; 
import {EmptyTodos} from './components/EmptyTodos'; 
import {TodoContext} from './contexts/TodoContext';
import {TodoForm} from './components/TodoForm';
import {Modal} from "./modals/Modal";

function AppUI() {

    const {
        loading,
        error,
        searchedTodos,
        completingTodo,
        deletingTodo,
        openModal,
        setOpenModal,
      } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter /> 
            <TodoSearch />

            <TodoList>
            {loading && (
                <>
                    <TodoLoading />
                    <TodoLoading />
                    <TodoLoading />
                    <TodoLoading />
                    <TodoLoading />
                </>
            )}

            {error && <TodoError />}

            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

            {searchedTodos.map(todo => (

                <TodoItem key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={
                () => completingTodo(todo.text)
                }
                onDelete={
                () => deletingTodo(todo.text)
                }
                />

            ))}

            </TodoList>

            <CreateTodoButton setOpenModal = {setOpenModal} />

            {openModal && (

            <Modal>
                <TodoForm />
            </Modal>
            )}

      </>
    );
}

export { AppUI };