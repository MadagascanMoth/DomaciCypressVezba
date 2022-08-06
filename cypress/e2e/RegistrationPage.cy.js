/// <reference types="Cypress" />

describe ("Registration test cases",()=>{
    it("Visit gallery app page",()=>{
        cy.visit("/")
    })

    it("Click registration button",()=>{
        cy.get('a[href="/register"]').click();
    })


//Negative test cases


    it("Registration without required requirments",()=>{
        cy.get('button[type="submit"]').click();
    })

    it("Registration without accepted terms and conditions",()=>{
        cy.get('input[id="first-name"]').type("Havarija");
        cy.get('input[id="last-name"]').type("Havarija");
        cy.get('input[id="email"]').type("havarija@gmail.com");
        cy.get('input[id="password"]').type("havarija1");
        cy.get('input[id="password-confirmation"]').type("havarija1");
        cy.get('button[type="submit"]').click();

    })
    it("Registration without valid First Name-less than 2 characters",()=>{
        cy.get('input[id="first-name"]').clear().type("H");
        cy.get('input[id="last-name"]').clear().type("Havarija");
        cy.get('input[id="email"]').clear().type("havarija@gmail.com");
        cy.get('input[id="password"]').clear().type("havarija1");
        cy.get('input[id="password-confirmation"]').clear().type("havarija1");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();

    })

    it("Registration without valid First Name-more than 255 characters",()=>{
        cy.get('input[id="first-name"]').clear().type("lRGKLlWlZDilHd6LBnDf8XfV0cm4ajOjGUeaaxUpDgS6FJUGniYw6I0C1sigMRik2pfpvJdVn7xuCtTlFornvg8hcO2Nj8Law14en0xP8qHQrec9H9KlbFDKv6QzXtGHCotVrVr2Q4qWkwh4GCSyVNFpCnHnsjDN1WLX6JYrn9ygIFlmMBf2FSDn0DjnEas3obBqMrrWjwQprLuUCxejkjNX0y5VJpBIkeu8mDAQFRksCL2jnjAsbOQvjPQlUbD");
        cy.get('input[id="last-name"]').clear().type("Havarija");
        cy.get('input[id="email"]').clear().type("havarija@gmail.com");
        cy.get('input[id="password"]').clear().type("havarija1");
        cy.get('input[id="password-confirmation"]').clear().type("havarija1");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();

    })

    it("Registration without valid Last Name-less than 2 characters",()=>{
        cy.get('input[id="first-name"]').clear().type("Havarija");
        cy.get('input[id="last-name"]').clear().type("H");
        cy.get('input[id="email"]').clear().type("havarija@gmail.com");
        cy.get('input[id="password"]').clear().type("havarija1");
        cy.get('input[id="password-confirmation"]').clear().type("havarija1");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();

    })

    it("Registration without valid Last Name -more than 255 characters",()=>{
        cy.get('input[id="first-name"]').clear().type("Havarija");
        cy.get('input[id="last-name"]').clear().type("lRGKLlWlZDilHd6LBnDf8XfV0cm4ajOjGUeaaxUpDgS6FJUGniYw6I0C1sigMRik2pfpvJdVn7xuCtTlFornvg8hcO2Nj8Law14en0xP8qHQrec9H9KlbFDKv6QzXtGHCotVrVr2Q4qWkwh4GCSyVNFpCnHnsjDN1WLX6JYrn9ygIFlmMBf2FSDn0DjnEas3obBqMrrWjwQprLuUCxejkjNX0y5VJpBIkeu8mDAQFRksCL2jnjAsbOQvjPQlUbD");
        cy.get('input[id="email"]').clear().type("havarija@gmail.com");
        cy.get('input[id="password"]').clear().type("havarija1");
        cy.get('input[id="password-confirmation"]').clear().type("havarija1");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();

    })

    it("Registration without valid email-without @",()=>{
        cy.get('input[id="first-name"]').clear().type("Havarija");
        cy.get('input[id="last-name"]').clear().type("Havarija");
        cy.get('input[id="email"]').clear().type("havarijagmail.com");
        cy.get('input[id="password"]').clear().type("havarija1");
        cy.get('input[id="password-confirmation"]').clear().type("havarija1");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();

    })

    it("Registration without valid email-without .",()=>{
        cy.get('input[id="first-name"]').clear().type("Havarija");
        cy.get('input[id="last-name"]').clear().type("Havarija");
        cy.get('input[id="email"]').clear().type("havarija@gmailcom");
        cy.get('input[id="password"]').clear().type("havarija1");
        cy.get('input[id="password-confirmation"]').clear().type("havarija1");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();

    })

    it("Registration without valid email-with space",()=>{
        cy.get('input[id="first-name"]').clear().type("Havarija");
        cy.get('input[id="last-name"]').clear().type("Havarija");
        cy.get('input[id="email"]').clear().type("havarija @gmail.com");
        cy.get('input[id="password"]').clear().type("havarija1");
        cy.get('input[id="password-confirmation"]').clear().type("havarija1");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();

    })

    it("Registration without valid password - less than 8 characters",()=>{
        cy.get('input[id="first-name"]').clear().type("Havarija");
        cy.get('input[id="last-name"]').clear().type("Havarija");
        cy.get('input[id="email"]').clear().type("havarija@gmail.com");
        cy.get('input[id="password"]').clear().type("hava");
        cy.get('input[id="password-confirmation"]').clear().type("hava");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();

    })

    it("Registration without valid password - without at least one digit",()=>{
        cy.get('input[id="first-name"]').clear().type("Havarija");
        cy.get('input[id="last-name"]').clear().type("Havarija");
        cy.get('input[id="email"]').clear().type("havarija@gmail.com");
        cy.get('input[id="password"]').clear().type("havarija");
        cy.get('input[id="password-confirmation"]').clear().type("havarija");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();

    })

    it("Registration with wrong confirmed password",()=>{
        cy.get('input[id="first-name"]').clear().type("Havarija");
        cy.get('input[id="last-name"]').clear().type("Havarija");
        cy.get('input[id="email"]').clear().type("havarija@gmail.com");
        cy.get('input[id="password"]').clear().type("havarija1");
        cy.get('input[id="password-confirmation"]').clear().type("havarija");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();

    })

    it("Registration with already taken email",()=>{
        cy.get('input[id="first-name"]').clear().type("Havarija");
        cy.get('input[id="last-name"]').clear().type("Havarija");
        cy.get('input[id="email"]').clear().type("red@gmail.com");
        cy.get('input[id="password"]').clear().type("havarija1");
        cy.get('input[id="password-confirmation"]').clear().type("havarija");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })



//Positive test case

    it("Registration with required requirements",()=>{
        cy.get('input[id="first-name"]').clear().type("Havarija");
        cy.get('input[id="last-name"]').clear().type("Havarija");
        cy.get('input[id="email"]').clear().type("havarija@gmail.com");
        cy.get('input[id="password"]').clear().type("havarija1");
        cy.get('input[id="password-confirmation"]').clear().type("havarija1");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();

    })



   





})