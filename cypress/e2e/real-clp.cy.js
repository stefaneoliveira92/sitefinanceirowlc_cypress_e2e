import '../support/commands';

describe('Page Rendenring Check', () => {

beforeEach(() => {
  cy.visit('/conversor-real-pesochileno.html');
});

  it('Verify if the page loads correctly with all elements', () => {
    cy.get('body > div > h2').should('have.text', 'R$ - CLP');
    cy.get('body > div > p:nth-child(2)').should('have.text', 'Cotação: CLP 155');
    cy.get('#valorReais').should('be.visible');
    cy.get('body > div > button:nth-child(4)').should('have.text', 'Converter');

  })

  it('Verify if the page style is applied correctly', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(232, 104, 80)');
    cy.get('.container').should('have.css', 'background-color', 'rgb(255, 255, 255)');
  })
})