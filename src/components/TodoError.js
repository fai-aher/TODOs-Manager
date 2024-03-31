import React from "react";
import '../styles/TodoError.css';

function TodoError() {
  return (
    <div className="TodoError-container">
      <p className="TodoError-text">Ocurrió un error al cargar los To-Dos!</p>
    </div>
  );
}

export { TodoError };