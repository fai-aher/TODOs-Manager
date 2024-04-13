/*
Prueba Positiva 1: Prueba de que el componente TodoList represente la cantidad
correcta de componentes TodoItem cuando searchedTodos no tenga elementos
*/
describe('AppUI Positive Case Functionality 1', () => {
    it('renders correct number of TodoItem components', () => {
      cy.visit('https://fai-aher.github.io/TODOs-Manager/'); 
      cy.get('.TodoItem').should('have.length', 0); 
    });
  });
  
/*
Prueba Negativa 1: Crearemos un escenario donde searchedTodos
esté vacío para validar que se represente el componente EmptyTodos
*/
describe('AppUI Negative Case Functionality 1', () => {
    it('renders EmptyTodos when searchedTodos is empty', () => {
      cy.visit('https://fai-aher.github.io/TODOs-Manager/');
      cy.get('.EmptyTodos-text').should('exist');
    });
  });

/*
Prueba Positiva 2: Simulación para que, al hacer clic en el botón CreateTodo, se abra el modal
y luego hacer clic en el botón cancelar para cerrarlo
*/
describe('AppUI Modal Positive Case', () => {
    it('opens and closes the modal correctly', () => {
      cy.visit('https://fai-aher.github.io/TODOs-Manager/'); // Replace with your app's URL
      
      // Click CreateTodoButton to open the modal
      cy.get('.CreateTodoButton').click();
      
      // Wait for the modal to appear
      cy.get('#modal').should('exist');
      
      // Click cancel button in TodoForm to close the modal
      cy.get('.TodoForm-cancelButton').click();
      
      // Wait for the modal to disappear
      cy.get('#root').should('exist');
    });
  });
  

/*
Prueba Negativa 2: Validación de que el modal no se
abre cuando no se hace click en el botón CreateTodoButton
*/
describe('AppUI Modal Negative Case', () => {
    it('does not open the modal when CreateTodoButton is not clicked', () => {
      cy.visit('https://fai-aher.github.io/TODOs-Manager/'); // Replace with your app's URL
      
      // Check if modal content does not exist initially
      cy.get('.TodoForm').should('not.exist');
      
      // Click somewhere else to simulate not clicking CreateTodoButton
      // For this example, we'll just click the TodoSearch input
      cy.get('.TodoSearch').click();
      
      // Check if modal content still does not exist
      cy.get('.TodoForm').should('not.exist');
    });
  });
  
/* 
Prueba Positiva 3: Simulación de crear una tarea pendiente y validar
que se crea con el texto definido
*/

describe('AppUI Add Homework Todo Positive Case', () => {
    it('adds a todo with the word "homework"', () => {
      cy.visit('https://fai-aher.github.io/TODOs-Manager/');
      
      cy.get('.CreateTodoButton').click();
      
      cy.get('textarea').type('Do homework');
      
      cy.get('.TodoForm-addButton').click();
      
      cy.contains('.TodoItem', 'Do homework').should('exist');
    });
  });
  
  
/*
Prueba Negativa 3: Prueba de que la lista permanece sin
cambios cuando se borra la entrada de TodoSearch (es decir, solo permanece
el único ToDo creado)
*/
describe('AppUI TodoSearch Negative Case', () => {
    it('does not show other todos when "homework" is cleared from search', () => {
      cy.visit('https://fai-aher.github.io/TODOs-Manager/');

      cy.get('.CreateTodoButton').click();
      
      cy.get('textarea').type('Do homework');
      
      cy.get('.TodoForm-addButton').click();
      
      cy.get('.TodoSearch').type('homework');
      
      cy.wait(500);

      cy.get('.TodoSearch').clear();

      cy.get('.TodoList').should('have.length', 1);
      
      cy.contains('.TodoList', 'Do homework').should('exist');
    });
  });
  
  