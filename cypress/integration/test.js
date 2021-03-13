
import { mobileContractOrder } from '../page-objects/testPage/mobileContractOrder'
import {confirm_url, test_url} from "../support/routs";

describe('Testing Example Page ', () => {
     beforeEach(() => {
         cy.visit('./test.html')
     })
    it('test isCenturion function - [1] [2]', () => {
        cy.isCentenarian(100).then((got) => {
            expect(got).to.be.eq(true, 'if age 100 or more  should return true');
        })
        cy.isCentenarian(666).then((got) => {
            expect(got).to.be.eq(true, 'if age 100 or more  should return true');
        })
        cy.isCentenarian(99).then((got) => {
            expect(got).to.be.eq(false), 'if age less than 100 should return false';
        })
    });
    it('test test.html page - [1]', () => {
        mobileContractOrder.inputFirstName('Jan')
        mobileContractOrder.inputLastName('Novak')
        mobileContractOrder.inputDateOfBirth('01/01/2002')
        mobileContractOrder.inputAddress('Ulice 9')
        mobileContractOrder.inputPostcode(16000)
        mobileContractOrder.inputContract(24);
        mobileContractOrder.inputPrice(666)
        mobileContractOrder.clickOnSubmit();
        cy.urlValidation(confirm_url);
    });
    it('test test.html page - [2]', () => {
        mobileContractOrder.inputFirstName('Jan')
        // mobileContractOrder.inputLastName('Novak')
        mobileContractOrder.inputDateOfBirth('01/01/2003')
        mobileContractOrder.inputAddress('Ulice 9')
        mobileContractOrder.inputPostcode(16000)
        mobileContractOrder.inputContract(24);
        mobileContractOrder.inputPrice(666)
        mobileContractOrder.clickOnSubmit();
        cy.urlValidation(test_url);
    });
    it('test test.html page - [3]', () => {
        mobileContractOrder.inputFirstName('Jan')
        mobileContractOrder.inputLastName('Novak')
        mobileContractOrder.inputDateOfBirth('01/01/2010')
        mobileContractOrder.inputAddress('Ulice 9')
        mobileContractOrder.inputPostcode(16000)
        mobileContractOrder.inputContract(24);
        mobileContractOrder.inputPrice(666)
        mobileContractOrder.clickOnSubmit();
        cy.urlValidation(test_url);
    });
});
