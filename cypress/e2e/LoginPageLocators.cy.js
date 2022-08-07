/// <reference types="Cypress" />

const locators = require("./../fixtures/locators.json");

describe("Login test cases", ()=>{
    beforeEach(()=>{
        cy.visit("/");
        cy.get(locators.header.loginButton).click();

    })
   
    it("Login without credentials", ()=>{
        cy.get(locators.login.submitButton).click();
    })

    it("Login without valid credentials",()=>{
        cy.get(locators.login.emailInput).type("redgmail.com");
        cy.get(locators.login.passwordInput).type("aaaaaa");
        cy.get(locators.login.submitButton).click();
    })

    it("Login without required email", ()=>{
        cy.get(locators.login.emailInput).clear();
        cy.get(locators.login.passwordInput).type("357753357");
        cy.get(locators.login.submitButton).click();

    })

    it("Login without required password", ()=>{
        cy.get(locators.login.emailInput).type("red@gmail.com");
        cy.get(locators.login.passwordInput).clear();
        cy.get(locators.login.submitButton).click();

    })

    it("Login with invalid email", ()=>{
        cy.get(locators.login.emailInput).clear().type("redgmail.com");
        cy.get(locators.login.passwordInput).type("357753357");
        cy.get(locators.login.submitButton).click();

    })

    it("Login with invalid password", ()=>{
        cy.get(locators.login.emailInput).clear().type("red@gmail.com");
        cy.get(locators.login.passwordInput).clear().type("aaaaaa");
        cy.get(locators.login.submitButton).click();

    })


    it("Login with valid credentials",()=>{
        cy.get(locators.login.emailInput).clear().type("red@gmail.com");
        cy.get(locators.login.passwordInput).clear().type("357753357");
        cy.get(locators.login.submitButton).click();
        cy.get(locators.header.logoutButton).click();
    })
})