/*
1. Prueba positiva: Prueba para que el componente TodoCounter muestre
correctamente el número de todos completados y totales al no tener ToDos
*/
describe('TodoCounter Positive Case', () => {
    it('displays the correct todo counts', () => {
      cy.visit('https://fai-aher.github.io/TODOs-Manager/'); 
      cy.get('.TodoCounter').contains('Has completado').should('exist');
      cy.get('.TodoCounter span').eq(0).should('contain.text', '0'); // Expecting '0' for completed
      cy.get('.TodoCounter span').eq(1).should('contain.text', '0'); // Expecting '0' for total
    });
  });
  
/*
2. Prueba negativa: Escenario en el que el componente TodoCounter
no muestra los números correctos, por ejemplo, cuando un el contador es mayor que
el número total de ToDos
*/
describe('TodoCounter Negative Case', () => {
    it('validates completed todos count never exceeds total todos count', () => {
      cy.visit('https://fai-aher.github.io/TODOs-Manager/');
      cy.get('.TodoCounter').contains('Has completado').should('exist');
  
      cy.get('.TodoCounter span').then(($spans) => {
        const completedCount = parseInt($spans.eq(0).text(), 10);
        const totalCount = parseInt($spans.eq(1).text(), 10);
        
        expect(completedCount).to.be.at.most(totalCount);
      });
    });
  });
  
  