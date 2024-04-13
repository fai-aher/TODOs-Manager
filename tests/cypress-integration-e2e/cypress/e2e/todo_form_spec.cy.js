/* 
1. Prueba positiva: Se va a simular hacer clic en el botón CreateTodo,
ingresar una tarea pendiente y enviar el formulario.
*/

describe('TodoForm Positive Case', () => {
    it('adds a new todo correctly', () => {
      cy.visit('https://fai-aher.github.io/TODOs-Manager/');
      cy.get('.CreateTodoButton').click();
      cy.get('textarea').type('New Todo Item');
      cy.get('.TodoForm-addButton').click();
      cy.contains('New Todo Item').should('exist');
    });
  });
  
/*
2. Prueba negativa: Verificación del comportamiento al
intentar agregar una tarea vacía.
*/

describe('TodoForm Negative Case', () => {
    it('handles adding an empty todo', () => {
      cy.visit('https://fai-aher.github.io/TODOs-Manager/');
      cy.get('.CreateTodoButton').click();
      cy.get('.TodoForm-addButton').click();
      cy.contains('Escribe un nuevo ToDo').should('not.exist');
    });
  });
  
  