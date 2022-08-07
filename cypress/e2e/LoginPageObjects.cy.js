/// <reference types="Cypress" />

import {navigation} from "./../../page_objects/navigation";
import {loginPOMPage} from  "./../../page_objects/LoginPOMPage";
import { faker } from '@faker-js/faker';

let user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
}


describe("Login test cases", ()=>{
    beforeEach(()=>{
        cy.visit("/");
        navigation.clickOnLoginButton();

    })


   
    it("Login without credentials", ()=>{
       navigation.clickOnLoginSubmitButton;
    })



    it("Login without valid credentials",()=>{
        loginPOMPage.login(faker.internet.email(), faker.internet.password());
    })



    it("Login without required email", ()=>{
        loginPOMPage.login("{backspace}", faker.internet.password());      
    })



    it("Login without required password", ()=>{
        loginPOMPage.login(faker.internet.email(), "{backspace}");      
    })



    it("Login with invalid email", ()=>{
        loginPOMPage.login("redgmail.com", faker.internet.password());
        
    })



    it("Login with invalid password", ()=>{
        loginPOMPage.login("red@gmail.com","aa2");

    })



    it("Login with valid credentials",()=>{
        loginPOMPage.login("red@gmail.com","357753357");
        cy.wait(1000);
        navigation.clickOnLogoutButton();

    })

})