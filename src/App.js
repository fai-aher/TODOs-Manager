import React from 'react';
import { TodoProvider } from './contexts/TodoContext';
import { AppUI } from './AppUI';

function App() { //Convención para crear un componente en React: Iniciar con mayúscula
  return ( //Esto es la sintaxis JSX, que es una extensión de JavaScript que permite escribir HTML(XML) dentro de un archivo .js en React
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
