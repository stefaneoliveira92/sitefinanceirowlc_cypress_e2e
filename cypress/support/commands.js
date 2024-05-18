import 'cypress-iframe';

const urls = {
    'real-clp-page': 'https://sites.google.com/view/financeirowlc/r-clp'
}

Cypress.Commands.add('visitPage', (urlstring) => {
    const url = urls[urlstring.toLowerCase()];

    if(url) {
        cy.visit(url);
    }else{
        throw new Error(`The URL for "${urlstring}" was not found.`)
    }
});
  
