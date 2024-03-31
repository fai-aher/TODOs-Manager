import { TodoContext } from '../contexts/TodoContext';
import '../styles/TodoCounter.css';
import React from 'react';

function TodoCounter() { //Las props son un objeto de React que permite pasar información entre componentes: props.X (X es el nombre de la propiedad)

  const {
    totalTodos: total,
    completedTodos: completed
  } = React.useContext(TodoContext);

    return (
      <h1 className="TodoCounter">
        Has completado <span>{completed}</span> de
        tus <span>{total}</span> To-Do {/* {} no es un objeto, es la forma de incluir código Javascript en JSX*/} 
      </h1>
    );
  }

  export { TodoCounter }; //Exportar el componente para poder importarlo en otro archivo.