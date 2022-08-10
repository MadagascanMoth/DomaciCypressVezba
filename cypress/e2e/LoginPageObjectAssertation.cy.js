/// <reference types="Cypress" />

import {navigation} from "../../page_objects/navigation";
import {loginPOMPage} from  "../../page_objects/LoginPOMPage";
import { faker } from '@faker-js/faker';
import{general} from "../../page_objects/GeneralPage"

let user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
}


describe("Login test cases", ()=>{
    beforeEach(()=>{
        cy.visit("/");
        cy.url().should("contain", "gallery-app.vivifyideas");
        general.headerTitle.should("have.text", "All Galleries");
        navigation.loginButton.should("exist");
        navigation.clickOnLoginButton();

    })


   
    it("Login without credentials", ()=>{
        cy.url().should("contain", "/login");
       general.headerTitle.should("have.text", "Please login");
       navigation.clickOnLoginSubmitButton;
       navigation.loginButton.should("exist");
       navigation.loginSubmitButton.should("exist");

    })



    it.only("Login without valid credentials",()=>{
        cy.url().should("contain", "/login");
        general.headerTitle.should("have.text", "Please login");
        loginPOMPage.login(faker.internet.email(), faker.internet.password());
        general.errorMessage.should("have.text", "Bad Credentials")
        .and("have.css", "background-color","rgb(248, 215, 218)" )
        .and("have.css", "color","rgb(114, 28, 36)" );
        navigation.loginSubmitButton.should("exist");
        navigation.loginButton.should("exist");

    })



    it("Login without required email", ()=>{
        cy.url().should("contain", "/login");
        general.headerTitle.should("have.text", "Please login");
        loginPOMPage.login("{backspace}", faker.internet.password());
        navigation.loginSubmitButton.should("exist"); 
        navigation.loginButton.should("exist");    
    })



    it("Login without required password", ()=>{
        cy.url().should("contain", "/login");
        general.headerTitle.should("have.text", "Please login");
        loginPOMPage.login(faker.internet.email(), "{backspace}"); 
        navigation.loginSubmitButton.should("exist"); 
        navigation.loginButton.should("exist");    

    })



    it("Login with invalid email", ()=>{
        cy.url().should("contain", "/login");
        general.headerTitle.should("have.text", "Please login");
        loginPOMPage.login("redgmail.com", faker.internet.password());
        navigation.loginSubmitButton.should("exist"); 
        navigation.loginButton.should("exist");   
        
        
    })



    it("Login with invalid password", ()=>{
        cy.url().should("contain", "/login");
        general.headerTitle.should("have.text", "Please login");
        loginPOMPage.login("red@gmail.com","aa2");
        navigation.loginButton.should("exist");   
        general.errorMessage.should("have.text", "Bad Credentials")
        .and("have.css", "background-color","rgb(248, 215, 218)" )
        .and("have.css", "color","rgb(114, 28, 36)" ); 

    })



    it("Login with valid credentials",()=>{
        cy.url().should("contain", "/login");
        general.headerTitle.should("have.text", "Please login");
        navigation.loginButton.should("exist");
        loginPOMPage.login("red@gmail.com","357753357");
        navigation.loginButton.should("not.exist");
        navigation.logoutButton.should("exist");
        navigation.createGalleryButton.should("exist");
        cy.url().should("contain", "gallery-app.vivifyideas");
        navigation.clickOnLogoutButton();

    })

})