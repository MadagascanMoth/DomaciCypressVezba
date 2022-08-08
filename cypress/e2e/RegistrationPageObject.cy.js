/// <reference types="Cypress" />

import {navigation} from "../../page_objects/navigation";
import{registerPomPage} from "../../page_objects/registerPomPage";
import { faker } from '@faker-js/faker';


let user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
}


describe ("Registration test cases",()=>{
    beforeEach( ()=>{
        cy.visit("/");
        navigation.clickOnRegisterButton();

    })
    
//Negative test cases


    it("Registration without required requirments",()=>{
        navigation.clickOnRegisterSubmitButton();
    })

    it("Registration without accepted terms and conditions",()=>{
        registerPomPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), user.password, user.password);
        navigation.clickOnRegisterSubmitButton();

    })
    it("Registration without valid First Name-less than 2 characters",()=>{

        registerPomPage.registration("h", faker.name.lastName(), faker.internet.email(), user.password, user.password);
        navigation.checkOnRegisterCheckboxButton();
        navigation.clickOnRegisterSubmitButton();
    })

    

    it("Registration without valid Last Name-less than 2 characters",()=>{

        registerPomPage.registration(faker.name.firstName(), "H", faker.internet.email(), user.password, user.password);
        navigation.checkOnRegisterCheckboxButton();
        navigation.clickOnRegisterSubmitButton();

    })


    it("Registration without valid email-without @",()=>{


        registerPomPage.registration(faker.name.firstName(), faker.name.lastName(), "havarijagmail.com", user.password, user.password);
        navigation.checkOnRegisterCheckboxButton();
        navigation.clickOnRegisterSubmitButton();

        
    })

    it("Registration without valid email-without .",()=>{


        registerPomPage.registration(faker.name.firstName(), faker.name.lastName(), "havarija@gmailcom", user.password, user.password);
        navigation.checkOnRegisterCheckboxButton();
        navigation.clickOnRegisterSubmitButton();

       
    })

    it("Registration without valid email-with space",()=>{

        registerPomPage.registration(faker.name.firstName(), faker.name.lastName(), "havarija @gmailcom", user.password, user.password);
        navigation.checkOnRegisterCheckboxButton();
        navigation.clickOnRegisterSubmitButton();
        

    })

    it("Registration without valid password - less than 8 characters",()=>{

        registerPomPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), "hava","hava");
        navigation.checkOnRegisterCheckboxButton();
        navigation.clickOnRegisterSubmitButton();
    })

    it("Registration without valid password - without at least one digit",()=>{


        registerPomPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), "havarijaa","havarijaa");
        navigation.checkOnRegisterCheckboxButton();
        navigation.clickOnRegisterSubmitButton();
        

    })

    it("Registration with wrong confirmed password",()=>{

        registerPomPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), user.password, faker.internet.password());
        navigation.checkOnRegisterCheckboxButton();
        navigation.clickOnRegisterSubmitButton();
        

    })

    it("Registration with already taken email",()=>{

        registerPomPage.registration(faker.name.firstName(),faker.name.lastName(), "red@gmailcom", user.password, user.password);
        navigation.checkOnRegisterCheckboxButton();
        navigation.clickOnRegisterSubmitButton();
        
    })



//Positive test case

    it("Registration with required requirements",()=>{

        registerPomPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), user.password, user.password);
        navigation.checkOnRegisterCheckboxButton();
        navigation.clickOnRegisterSubmitButton();
       
    })

    it("Registration with minimum (2) characters First name",()=>{

        registerPomPage.registration("ha", faker.name.lastName(), faker.internet.email(), user.password, user.password);
        navigation.checkOnRegisterCheckboxButton();
        navigation.clickOnRegisterSubmitButton();
        
    })


    it("Registration with minimum (2) characters Flast name",()=>{

        registerPomPage.registration(faker.name.firstName(), "Ha", faker.internet.email(), user.password, user.password);
        navigation.checkOnRegisterCheckboxButton();
        navigation.clickOnRegisterSubmitButton();

        
    })

    it("Registration with special characters First and Last Name",()=>{
        registerPomPage.registration("%%%", "^^^", faker.internet.email(), user.password, user.password);
        navigation.checkOnRegisterCheckboxButton();
        navigation.clickOnRegisterSubmitButton();

    
    })

    it("Registration with unicode characters First and Last Name",()=>{
        registerPomPage.registration("ššš", "šđđđ", faker.internet.email(), user.password, user.password);
        navigation.checkOnRegisterCheckboxButton();
        navigation.clickOnRegisterSubmitButton();
    })

    it("Registration with password using space",()=>{

        registerPomPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), "havarija1 ","havarija1 ");
        navigation.checkOnRegisterCheckboxButton();
        navigation.clickOnRegisterSubmitButton();
       
    })
       



    it("Registration with password using all digits",()=>{

        registerPomPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), "123456789 ","123456789");
        navigation.checkOnRegisterCheckboxButton();
        navigation.clickOnRegisterSubmitButton();
       
    })


})