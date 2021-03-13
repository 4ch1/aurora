
Cypress.Commands.add("isCentenarian", (age) => {
    let years = 100;
    return age >= years;
})
Cypress.Commands.add('fillInput', { prevSubject: true }, (subject, text) => {
    return cy.wrap(subject).click().clear().type(text);
});
Cypress.Commands.add('getById', (id) => {
    cy.get(`[id='${id}']`);
});
Cypress.Commands.add('getByType', (type) => {
    cy.get(`[type='${type}']`);
});
Cypress.Commands.add('urlValidation', (url) => {
    cy.url({ timeout: 60000 }).should('contain', url);
});