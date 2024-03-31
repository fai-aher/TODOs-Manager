import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [items, setItems] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    React.useEffect( () => {
      setTimeout(() => {
        try {
          const localStorageItems = window.localStorage.getItem(itemName);

          let parsedItems;

          if (!localStorageItems) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItems = initialValue;
          } else {
            parsedItems = JSON.parse(localStorageItems);
          }

          setLoading(false);
          setItems(parsedItems);

        } catch(error) {
          setLoading(false);
          setError(true);
        }
      }, 2000);
    }, []);
  
    //Función para actualizar el estado de los ToDo y guardar información en el localStorage
    const updateTodos = (updatedTodos) => {
      window.localStorage.setItem(itemName, JSON.stringify(updatedTodos));
      setItems(updatedTodos);
    };
    
    return {items, updateTodos, loading, error};
  
  }

export {useLocalStorage};

  /* Esta parte se Copia y Pega en la consola del navegador web para crear el localStorage con los To-Dos por defecto

const defaultTodos = [
  {text: 'Crear mi primer To-Do!', completed: false},
  {text: 'Sonreir', completed: true},
  {text: 'Terminar la clase de Redes - Lunes 04 de marzo', completed: false},
  {text: 'Realizar el Quiz 3 de MOS', completed: false},
  {text: 'Estudiar para Parcial 1 de MOS', completed: false},
  {text: 'Hacer Quiz 3 de MOS', completed: false}
];

const stringifiedDefaultTodos = JSON.stringify(defaultTodos);
localStorage.setItem('TODOs_v1', stringifiedDefaultTodos);

*/