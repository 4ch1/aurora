const FIRSTNAME = 'fname';
const LASTNAME = 'lname';
const DATE_OF_BIRTH = 'dob';
const ADDRESS = 'address';
const POSTCODE = 'postcode';
const CONTRACT = 'contract';
const PRICE = 'price';
const SUBMIT = 'submit';

export const mobileContractOrder = {

    inputFirstName(name) {
       return  cy.getById(FIRSTNAME).fillInput(name);
    },
    inputLastName(name) {
        return  cy.getById(LASTNAME).fillInput(name);
    },
    inputDateOfBirth(bithDate) {
        return  cy.getById(DATE_OF_BIRTH).fillInput(bithDate);
    },
    inputAddress(address) {
        return  cy.getById(ADDRESS).fillInput(address);
    },
    inputPostcode(postcode) {
        return  cy.getById(POSTCODE).fillInput(postcode);
    },
    inputContract(duration) {
        return  cy.getById(CONTRACT).fillInput(duration);
    },
    inputPrice(price) {
        return  cy.getById(PRICE).fillInput(price);
    },
    clickOnSubmit() {
        return  cy.getByType(SUBMIT).click();
    },
}