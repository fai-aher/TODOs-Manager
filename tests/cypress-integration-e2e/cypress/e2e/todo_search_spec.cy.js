
/* 1. Test positivo para probar que la entrada de búsqueda actualiza
   correctamente el valor de búsqueda en el contexto.
*/

describe('TodoSearch Positive Case', () => {
  it('updates searchValue correctly', () => {
    cy.visit('https://fai-aher.github.io/TODOs-Manager/');
    cy.get('.TodoSearch').type('Test Search');
    cy.get('.TodoSearch').should('have.value', 'Test Search');
  });
});


/* 2. Test negativo: Probar el comportamiento cuando la entrada está vacía después
   de enfocar y luego desenfocar.
*/

describe('TodoSearch Negative Case', () => {
  it('handles empty input after focus and blur', () => {
    cy.visit('https://fai-aher.github.io/TODOs-Manager/');
    cy.get('.TodoSearch').focus();
    cy.get('.TodoSearch').blur();
    cy.get('.TodoSearch').should('have.attr', 'placeholder', 'Busca un To-Do aquí...');
  });
});
