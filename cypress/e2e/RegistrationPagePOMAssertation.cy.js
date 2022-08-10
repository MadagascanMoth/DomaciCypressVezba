/// <reference types="Cypress" />

import {navigation} from "../../page_objects/navigation";
import{registerPomPage} from "../../page_objects/registerPomPage";
import { faker } from '@faker-js/faker';
import { general } from "../../page_objects/GeneralPage";


let user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
}


describe ("Registration test cases",()=>{
    beforeEach( ()=>{
        cy.visit("/");
        cy.url().should("contain","https://gallery-app.vivifyideas.com/")
        navigation.clickOnRegisterButton();
        cy.url().should("contain","/register");
        general.headerTitle.should("have.text", "Register");
        navigation.loginButton.should("exist");
        navigation.registerButton.should("exist");
        navigation.registerSubmitButton.should("exist");

    })
    
//Negative test cases


    it("Registration without required requirments",()=>{
        navigation.clickOnRegisterSubmitButton();
        navigation.loginButton.should("exist");
        navigation.registerButton.should("exist");
        navigation.registerSubmitButton.should("exist");
    })

    it("Registration without accepted terms and conditions",()=>{
        registerPomPage.registrationUncheck(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), "357753357", "357753357");

        general.errorMessage.should("have.text", "The terms and conditions must be accepted.")
        .and("have.css","background-color", "rgb(248, 215, 218)")
        .and("have.css", "color", "rgb(114, 28, 36)");
        navigation.loginButton.should("exist");
        navigation.registerButton.should("exist");
        navigation.registerSubmitButton.should("exist");

    })
    // it("Registration without valid First Name-less than 2 characters",()=>{

    //     registerPomPage.registration("h", faker.name.lastName(), faker.internet.email(), "357753357", "357753357");
    //     navigation.checkOnRegisterCheckboxButton();
    //     navigation.clickOnRegisterSubmitButton();
    // }) 

    //u proslosti ovo nije prolazilo sada i sa 2 karaktera mozemo da se registrujemo

    

    // it("Registration without valid Last Name-less than 2 characters",()=>{

    //     registerPomPage.registration(faker.name.firstName(), "H", faker.internet.email(), "357753357", "357753357");
    //     navigation.checkOnRegisterCheckboxButton();
    //     navigation.clickOnRegisterSubmitButton();

    // })
     //u proslosti ovo nije prolazilo sada i sa 2 karaktera mozemo da se registrujemo


    it("Registration without valid email-without @",()=>{


        registerPomPage.registration(faker.name.firstName(), faker.name.lastName(), "havarijagmail.com", "357753357", "357753357");
       
        navigation.loginButton.should("exist");
        navigation.registerButton.should("exist");
        navigation.registerSubmitButton.should("exist");

        
    })

    it("Registration without valid email-without .",()=>{


        registerPomPage.registration(faker.name.firstName(), faker.name.lastName(), "havarija@gmailcom","357753357", "357753357");
        
        navigation.loginButton.should("exist");
        navigation.registerButton.should("exist");
        navigation.registerSubmitButton.should("exist");
        general.errorMessage.should("have.text", "The email must be a valid email address.")
        .and("have.css","background-color", "rgb(248, 215, 218)")
        .and("have.css", "color", "rgb(114, 28, 36)");


       
    })

    it("Registration without valid email-with space",()=>{

        registerPomPage.registration(faker.name.firstName(), faker.name.lastName(), "havarija @gmailcom", "357753357", "357753357");
        
        navigation.loginButton.should("exist");
        navigation.registerButton.should("exist");
        navigation.registerSubmitButton.should("exist");
        

    })

    it("Registration without valid password - less than 8 characters",()=>{

        registerPomPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), "hava","hava");
       
        general.errorMessage.should("have.text","The password must be at least 8 characters.")
        .and("have.css","background-color", "rgb(248, 215, 218)")
        .and("have.css", "color", "rgb(114, 28, 36)");
        navigation.loginButton.should("exist");
        navigation.registerButton.should("exist");
        navigation.registerSubmitButton.should("exist");
    })

    it("Registration without valid password - without at least one digit",()=>{


        registerPomPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), "havarijaa","havarijaa");
        
        general.errorMessage.should("have.text","The password format is invalid.");
        navigation.loginButton.should("exist");
        navigation.registerButton.should("exist");
        navigation.registerSubmitButton.should("exist");
        

    })

    it("Registration with wrong confirmed password",()=>{

        registerPomPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), "357753357", faker.internet.password());
        
        general.errorMessage.should("have.text","The password confirmation does not match.");
        navigation.loginButton.should("exist");
        navigation.registerButton.should("exist");
        navigation.registerSubmitButton.should("exist");
        

    })

    it("Registration with already taken email",()=>{

        registerPomPage.registration(faker.name.firstName(),faker.name.lastName(), "red@gmail.com", "357753357", "357753357");
        
        general.errorMessage.should("have.text","The email has already been taken.");
        navigation.loginButton.should("exist");
        navigation.registerButton.should("exist");
        navigation.registerSubmitButton.should("exist");
        
    })

    

//Positive test case

    it("Registration with required requirements",()=>{

        registerPomPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), "357753357", "357753357");
        
        navigation.registerButton.should("not.exist");
        navigation.logoutButton.should("exist");
        cy.url().should("contain", "gallery-app.vivifyideas");
        navigation.createGalleryButton.should("exist");
        navigation.myGalleryButton.should("exist")
       
    })

    it("Registration with minimum (2) characters First name",()=>{

        registerPomPage.registration("ha", faker.name.lastName(), faker.internet.email(), "357753357", "357753357");
        
        navigation.registerButton.should("not.exist");
        navigation.logoutButton.should("exist");
        cy.url().should("contain", "gallery-app.vivifyideas");
        navigation.createGalleryButton.should("exist");
        navigation.myGalleryButton.should("exist")
        
    })


    it("Registration with minimum (2) characters Flast name",()=>{

        registerPomPage.registration(faker.name.firstName(), "Ha", faker.internet.email(), "357753357", "357753357");
        
        navigation.registerButton.should("not.exist");
        navigation.logoutButton.should("exist");
        cy.url().should("contain", "gallery-app.vivifyideas");
        navigation.createGalleryButton.should("exist");
        navigation.myGalleryButton.should("exist")

        
    })

    it("Registration with special characters First and Last Name",()=>{
        registerPomPage.registration("%%%", "^^^", faker.internet.email(), "357753357", "357753357");
        
        navigation.registerButton.should("not.exist");
        navigation.logoutButton.should("exist");
        cy.url().should("contain", "gallery-app.vivifyideas");
        navigation.createGalleryButton.should("exist");
        navigation.myGalleryButton.should("exist")

    
    })

    it("Registration with unicode characters First and Last Name",()=>{
        registerPomPage.registration("ššš", "šđđđ", faker.internet.email(), "357753357", "357753357");
       
        navigation.registerButton.should("not.exist");
        navigation.logoutButton.should("exist");
        cy.url().should("contain", "gallery-app.vivifyideas");
        navigation.createGalleryButton.should("exist");
        navigation.myGalleryButton.should("exist")
    })

    it("Registration with password using space",()=>{

        registerPomPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), "havarija1 ","havarija1 ");
        navigation.registerButton.should("not.exist");
        navigation.logoutButton.should("exist");
        cy.url().should("contain", "gallery-app.vivifyideas");
        navigation.createGalleryButton.should("exist");
        navigation.myGalleryButton.should("exist")
       
    })
       



    it("Registration with password using all digits",()=>{

        registerPomPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), "357753357","357753357");
        cy.wait(1000);
        navigation.logoutButton.should("exist");
        cy.url().should("contain", "gallery-app.vivifyideas");
        navigation.createGalleryButton.should("exist");
        navigation.myGalleryButton.should("exist");
        navigation.registerButton.should("not.exist");
       
    })


})