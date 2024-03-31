import React from "react";
import '../styles/EmptyTodos.css';

function EmptyTodos() {
  return (
    <div className="EmptyTodos-container">
      <p className="EmptyTodos-text">No se encontraron ToDos!</p>
    </div>
  );
}

export { EmptyTodos };