import React from 'react';
import '../styles/TodoSearch.css';
import { TodoContext } from '../contexts/TodoContext';

function TodoSearch() {

  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext);

  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  }

  const handleBlur = (event) => {
    if (event.target.value === '') {
      setIsFocused(false);
    }
  }

    return (
      <div className="SearchContainer">
      <input 
        placeholder = {isFocused ? '' : 'Busca un To-Do aquí...'}
        className="TodoSearch"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      </div>
    );
  }

  export { TodoSearch }; //Exportar el componente para poder importarlo en otro archivo.