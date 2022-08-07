/// <reference types="Cypress" />

const locators = require("./../fixtures/locators.json")

describe ("Registration test cases",()=>{
    beforeEach( ()=>{
        cy.visit("/");
        cy.get(locators.header.registerButton).click();

    })
    
//Negative test cases


    it("Registration without required requirments",()=>{
        cy.get(locators.register.registerSubmitButton).click();
    })

    it("Registration without accepted terms and conditions",()=>{
        cy.get(locators.register.inputFirstName).type("Havarija");
        cy.get(locators.register.inputLastName).type("Havarija");
        cy.get(locators.register.inputRegisterEmail).type("havarija@gmail.com");
        cy.get(locators.register.inputRegisterPassword).type("havarija1");
        cy.get(locators.register.inputRegisterConfirmationPassword).type("havarija1");
        cy.get(locators.register.registerSubmitButton).click();

    })
    it("Registration without valid First Name-less than 2 characters",()=>{
        cy.get(locators.register.inputFirstName).type("H");
        cy.get(locators.register.inputLastName).type("Havarija");
        cy.get(locators.register.inputRegisterEmail).type("havarija@gmail.com");
        cy.get(locators.register.inputRegisterPassword).type("havarija1");
        cy.get(locators.register.inputRegisterConfirmationPassword).type("havarija1");
        cy.get(locators.register.registerCheckBox).check();
        cy.get(locators.register.registerSubmitButton).click();

    })

    it("Registration without valid First Name-more than 255 characters",()=>{
        cy.get(locators.register.inputFirstName).type("lRGKLlWlZDilHd6LBnDf8XfV0cm4ajOjGUeaaxUpDgS6FJUGniYw6I0C1sigMRik2pfpvJdVn7xuCtTlFornvg8hcO2Nj8Law14en0xP8qHQrec9H9KlbFDKv6QzXtGHCotVrVr2Q4qWkwh4GCSyVNFpCnHnsjDN1WLX6JYrn9ygIFlmMBf2FSDn0DjnEas3obBqMrrWjwQprLuUCxejkjNX0y5VJpBIkeu8mDAQFRksCL2jnjAsbOQvjPQlUbD");
        cy.get(locators.register.inputLastName).type("Havarija");
        cy.get(locators.register.inputRegisterEmail).type("havarija@gmail.com");
        cy.get(locators.register.inputRegisterPassword).type("havarija1");
        cy.get(locators.register.inputRegisterConfirmationPassword).type("havarija1");
        cy.get(locators.register.registerCheckBox).check();
        cy.get(locators.register.registerSubmitButton).click();

    })

    it("Registration without valid Last Name-less than 2 characters",()=>{
        cy.get(locators.register.inputFirstName).type("Havarija");
        cy.get(locators.register.inputLastName).type("H");
        cy.get(locators.register.inputRegisterEmail).type("havarija@gmail.com");
        cy.get(locators.register.inputRegisterPassword).type("havarija1");
        cy.get(locators.register.inputRegisterConfirmationPassword).type("havarija1");
        cy.get(locators.register.registerCheckBox).check();
        cy.get(locators.register.registerSubmitButton).click();

    })

    it("Registration without valid Last Name -more than 255 characters",()=>{
        cy.get(locators.register.inputFirstName).type("Havarija");
        cy.get(locators.register.inputLastName).type("lRGKLlWlZDilHd6LBnDf8XfV0cm4ajOjGUeaaxUpDgS6FJUGniYw6I0C1sigMRik2pfpvJdVn7xuCtTlFornvg8hcO2Nj8Law14en0xP8qHQrec9H9KlbFDKv6QzXtGHCotVrVr2Q4qWkwh4GCSyVNFpCnHnsjDN1WLX6JYrn9ygIFlmMBf2FSDn0DjnEas3obBqMrrWjwQprLuUCxejkjNX0y5VJpBIkeu8mDAQFRksCL2jnjAsbOQvjPQlUbD");
        cy.get(locators.register.inputRegisterEmail).type("havarija@gmail.com");
        cy.get(locators.register.inputRegisterPassword).type("havarija1");
        cy.get(locators.register.inputRegisterConfirmationPassword).type("havarija1");
        cy.get(locators.register.registerCheckBox).check();
        cy.get(locators.register.registerSubmitButton).click();

    })

    it("Registration without valid email-without @",()=>{
        cy.get(locators.register.inputFirstName).type("Havarija");
        cy.get(locators.register.inputLastName).type("Havarija");
        cy.get(locators.register.inputRegisterEmail).type("havarijagmail.com");
        cy.get(locators.register.inputRegisterPassword).type("havarija1");
        cy.get(locators.register.inputRegisterConfirmationPassword).type("havarija1");
        cy.get(locators.register.registerCheckBox).check();
        cy.get(locators.register.registerSubmitButton).click();

    })

    it("Registration without valid email-without .",()=>{
        cy.get(locators.register.inputFirstName).type("Havarija");
        cy.get(locators.register.inputLastName).type("Havarija");
        cy.get(locators.register.inputRegisterEmail).type("havarija@gmailcom");
        cy.get(locators.register.inputRegisterPassword).type("havarija1");
        cy.get(locators.register.inputRegisterConfirmationPassword).type("havarija1");
        cy.get(locators.register.registerCheckBox).check();
        cy.get(locators.register.registerSubmitButton).click();

    })

    it("Registration without valid email-with space",()=>{
        cy.get(locators.register.inputFirstName).type("Havarija");
        cy.get(locators.register.inputLastName).type("Havarija");
        cy.get(locators.register.inputRegisterEmail).type("havarija @gmail.com");
        cy.get(locators.register.inputRegisterPassword).type("havarija1");
        cy.get(locators.register.inputRegisterConfirmationPassword).type("havarija1");
        cy.get(locators.register.registerCheckBox).check();
        cy.get(locators.register.registerSubmitButton).click();

    })

    it("Registration without valid password - less than 8 characters",()=>{
        cy.get(locators.register.inputFirstName).type("Havarija");
        cy.get(locators.register.inputLastName).type("Havarija");
        cy.get(locators.register.inputRegisterEmail).type("havarija@gmail.com");
        cy.get(locators.register.inputRegisterPassword).type("hava");
        cy.get(locators.register.inputRegisterConfirmationPassword).type("hava");
        cy.get(locators.register.registerCheckBox).check();
        cy.get(locators.register.registerSubmitButton).click();

    })

    it("Registration without valid password - without at least one digit",()=>{
        cy.get(locators.register.inputFirstName).type("Havarija");
        cy.get(locators.register.inputLastName).type("Havarija");
        cy.get(locators.register.inputRegisterEmail).type("havarija@gmail.com");
        cy.get(locators.register.inputRegisterPassword).type("havarija");
        cy.get(locators.register.inputRegisterConfirmationPassword).type("havarija");
        cy.get(locators.register.registerCheckBox).check();
        cy.get(locators.register.registerSubmitButton).click();

    })

    it("Registration with wrong confirmed password",()=>{
        cy.get(locators.register.inputFirstName).type("Havarija");
        cy.get(locators.register.inputLastName).type("Havarija");
        cy.get(locators.register.inputRegisterEmail).type("havarija@gmail.com");
        cy.get(locators.register.inputRegisterPassword).type("havarija1");
        cy.get(locators.register.inputRegisterConfirmationPassword).type("havarija");
        cy.get(locators.register.registerCheckBox).check();
        cy.get(locators.register.registerSubmitButton).click();

    })

    it("Registration with already taken email",()=>{
        cy.get(locators.register.inputFirstName).type("Havarija");
        cy.get(locators.register.inputLastName).type("Havarija");
        cy.get(locators.register.inputRegisterEmail).type("red@gmail.com");
        cy.get(locators.register.inputRegisterPassword).type("havarija1");
        cy.get(locators.register.inputRegisterConfirmationPassword).type("havarija");
        cy.get(locators.register.registerCheckBox).check();
        cy.get(locators.register.registerSubmitButton).click();
    })



//Positive test case

    it("Registration with required requirements",()=>{
        cy.get(locators.register.inputFirstName).type("Havarija");
        cy.get(locators.register.inputLastName).type("Havarija");
        cy.get(locators.register.inputRegisterEmail).type("havarija@gmail.com");
        cy.get(locators.register.inputRegisterPassword).type("havarija1");
        cy.get(locators.register.inputRegisterConfirmationPassword).type("havarija1");
        cy.get(locators.register.registerCheckBox).check();
        cy.get(locators.register.registerSubmitButton).click();

    })



   





})