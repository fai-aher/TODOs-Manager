import '../styles/TodoList.css';

function TodoList({ children }) {
    return (
        <ul className="TodoList">
            {children}
        </ul>
    );
  }

  export { TodoList }; //Exportar el componente para poder importarlo en otro archivo.