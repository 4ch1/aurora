declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Custom command to login to brand id.
         * Returns xAuthToken as an alias @xauthToken
         * @example cy.login()
         */
        isCentenarian(age: any): Chainable<any>
        fillInput(prevSubject: any, subject: any, text: any): Chainable<any>
        getById(id: any): Chainable<any>
        getByType(type: any): Chainable<any>
        urlValidation(url: any): Chainable<any>
    }
}