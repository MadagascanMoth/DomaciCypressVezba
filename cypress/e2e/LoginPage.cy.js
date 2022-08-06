/// <reference types="Cypress" />


describe("Login test cases", ()=>{
    it("Visit gallery app page", ()=>{
        cy.visit("/");
    })

    it("Click on login button", ()=>{
        cy.get('a[href="/login"]').click();
    })

    it("Login without credentials", ()=>{
        cy.get('button[type="submit"]').click();
    })

    it("Login without valid credentials",()=>{
        cy.get('input[id="email"]').type("redgmail.com");
        cy.get('input[id="password"]').type("aaaaaa");
        cy.get('button[type="submit"]').click();
    })

    it("Login without required email", ()=>{
        cy.get('input[id="email"]').clear();
        cy.get('input[id="password"]').type("357753357");
        cy.get('button[type="submit"]').click();

    })

    it("Login without required password", ()=>{
        cy.get('input[id="email"]').type("red@gmail.com");
        cy.get('input[id="password"]').clear();
        cy.get('button[type="submit"]').click();

    })

    it("Login with invalid email", ()=>{
        cy.get('input[id="email"]').clear().type("redgmail.com");
        cy.get('input[id="password"]').type("357753357");
        cy.get('button[type="submit"]').click();

    })

    it("Login with invalid password", ()=>{
        cy.get('input[id="email"]').clear().type("red@gmail.com");
        cy.get('input[id="password"]').clear().type("aaaaaa");
        cy.get('button[type="submit"]').click();

    })


    it("Login with valid credentials",()=>{
        cy.get('input[id="email"]').clear().type("red@gmail.com");
        cy.get('input[id="password"]').clear().type("357753357");
        cy.get('button[type="submit"]').click();
    })
})