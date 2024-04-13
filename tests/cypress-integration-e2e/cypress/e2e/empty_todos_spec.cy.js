/*
1. Prueba positiva: Se simula el escenario en el que el componente EmptyTodos debería
renderizarse porque no hay todos
*/

describe('EmptyTodos Positive Case', () => {
    it('renders when there are no todos', () => {
      cy.visit('https://fai-aher.github.io/TODOs-Manager/');
      cy.contains('No se encontraron ToDos!').should('exist');
    });
  });

/*
2. Prueba negativa: Se crea un escenario donde el componente
EmptyTodos no debería renderizarse porque hay todos presentes
*/

describe('EmptyTodos Negative Case', () => {
    it('does not render when there are todos', () => {
      cy.visit('https://fai-aher.github.io/TODOs-Manager/');
      cy.get('.TodoList').should('exist');
      cy.contains('No se encontraron ToDos!').should('not.exist');
    });
  });
  
  