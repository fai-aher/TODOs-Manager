import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider( {children} ) {

    //Estados para lista de To-Dos
    const {items: todos,
        updateTodos,
        loading,
        error
    } = useLocalStorage(
    'TODOs_v1', [] //Valor inicial de la lista de To-Dos
    );

    //Estados derivados de la lista de To-Dos
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    //Estados para SearchValue
    const [searchValue, setSearchValue] = React.useState('');
    React.useEffect(() => {
    console.log('Se está buscando el siguiente To-Do: ', searchValue);
    }, [searchValue]);

    //Estado derivado de SearchValue
    const searchedTodos = todos.filter(
    (todo) => {

        //Funcion para filtrar texto con tildes
        const noTildesFunction = (textoConTildes) => (textoConTildes.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));

        //Normalización a texto sin tíldes y lowercase para cada ToDo y el SearchValue
        const textoToDoNormalizado = noTildesFunction(todo.text.toLowerCase());
        const textoSearchValueNormalizado = noTildesFunction(searchValue.toLowerCase());

        //Retorno de los To-Do que cumplen con el filtrado
        return textoToDoNormalizado.includes(textoSearchValueNormalizado);
    }
    );

    //AddTodo function
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        });
        updateTodos(newTodos);
    };

    //Estado derivado de CompletingTodo
    const completingTodo = (searchingText) => {
    const newTodos = [...todos];
    const toDoIndex = newTodos.findIndex(
        (todo) => todo.text === searchingText
    );
    newTodos[toDoIndex].completed = true;
    updateTodos(newTodos);
    };

    //Estado derivado de DeletingTodo
    const deletingTodo = (searchingText) => {
    const newTodos = [...todos];
    const toDoIndex = newTodos.findIndex(
        (todo) => todo.text === searchingText
    );
    newTodos.splice(toDoIndex, 1);
    updateTodos(newTodos);
    };

    //Modals states
    const [openModal, setOpenModal] = React.useState(false);

    return (
        <TodoContext.Provider value={
            {
                loading,
                error,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completingTodo,
                deletingTodo,
                openModal,
                setOpenModal,
                addTodo,
            }
        }>
            {children}  
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }