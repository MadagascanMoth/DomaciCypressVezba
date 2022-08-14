/// <reference types="Cypress" />

import {navigation} from "../../page_objects/navigation";
import{createGallery } from "../../page_objects/GalleryPomPage"
import { faker } from '@faker-js/faker';
import {loginPOMPage} from "../../page_objects/LoginPOMPage";
import { general } from "../../page_objects/GeneralPage";






describe("Create Gallery test cases", ()=>{



    beforeEach("Login through BE",()=>{

        cy.validLogin(Cypress.env("validEmail"), Cypress.env("validPassword"));
        cy.visit("/");
        navigation.clickOnCreateGalleryButton();
        cy.url().should("contain","/create");
        general.headerTitle.should("have.text","Create Gallery");
        navigation.cancelButton.should("exist");
        navigation.createGallerySubmitButton.should("exist");
        

        
    }) 
      


    // beforeEach(()=>{

    //     cy.visit("/");
    //     navigation.clickOnCreateGalleryButton();
    //     cy.url().should("contain","/create");
    //     //navigation.clickOnLoginButton();
    //     //cy.url().should("contain", "/login");
    //     //general.headerTitle.should("have.text", "Please login");     
    //     //loginPOMPage.login("red@gmail.com","357753357"); 
    //     navigation.createGalleryButton.should("exist");
    //     navigation.myGalleryButton.should("exist");
    //     navigation.logoutButton.should("exist");
    //     //navigation.clickOnCreateGalleryButton();
    //     //cy.url().should("contain", "/create");
    //     general.headerTitle.should("have.text","Create Gallery");
    //     navigation.cancelButton.should("exist");
    //     navigation.createGallerySubmitButton.should("exist");

    // })
    

    //meni ovo sranje od fejkera ne radi , ili pak radi i posle par puta testiranja pukne :D
    let user = {
        title: faker.lorem.lines(),
        description:faker.lorem.sentence() ,
    }

   
    //Negative test cases

    it("All required fields are empty",()=>{


       
        navigation.clickOnCreateGallerySubmitButton();
        general.headerTitle.should("have.text","Create Gallery");
        navigation.cancelButton.should("exist");
        navigation.createGallerySubmitButton.should("exist");

    })

    it("Create gallery with invalid URL - without //https:", ()=>{

        createGallery.create("naslov"," ","'i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg'" );
        navigation.clickOnCreateGallerySubmitButton();
        general.headerTitle.should("have.text","Create Gallery");
        navigation.cancelButton.should("exist");
        navigation.createGallerySubmitButton.should("exist");

    })

      

    it("Create gallery with invalid URL -missing .jpg, .png, .jpeg",()=>{

        createGallery.create("naslov", " ", "https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3");
        navigation.clickOnCreateGallerySubmitButton();
        general.errorMessage.should("exist");
        general.errorMessage.should("have.text","Wrong format of image")
        .and("have.css","background-color","rgb(248, 215, 218)")
        .and("have.css","color","rgb(114, 28, 36)")

    })

    it("Create gallery with invalid title- less than 2 characters",()=>{

        createGallery.create("n", " ", "https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        navigation.clickOnCreateGallerySubmitButton();
        general.errorMessage.should("have.text","The title must be at least 2 characters.")
        .and("have.css","background-color","rgb(248, 215, 218)")
        .and("have.css","color","rgb(114, 28, 36)")
        

        
    })

    it("Create gallery with invalid title- more than 255 characters",()=>{
        createGallery.create("JIzuzg22D5VLlquBMfp7ZxLK3QZDNOCWtsyGMWGOJlKrqzbZZjTI2SZyniGLAvyro9qtVCKPUBwXgavwTijZW69XdlFTY5tUffG9FvIe74ScIGiG9WwyXEKWG7vtGNNW1exTImti1yUIGVB5xQLHski28sPxhaI4IQSU55mrcjwxnlxujh4WMclQFZLhjUPfcGQVxeZaoIlLZ3h9YztQhRaxXjslRgKGx0S3213DMkIVTsbibguf8PyWN6fZ0coe", " ", "https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        navigation.clickOnCreateGallerySubmitButton();
        general.errorMessage.should("have.text","The title may not be greater than 255 characters.")
        .and("have.css","background-color","rgb(248, 215, 218)")
        .and("have.css","color","rgb(114, 28, 36)")


    })

    it("Create gallery with description  more than 1000 characters",()=>{
        createGallery.create("ti",
                           "08BT01WMMDQCS3aWrQy33sgYELuzP8Mr2ScktanrvQI7v218J0,m,m,m,mF7wUMDwfdfdfdfdfdfdJaf6qTSdAanUjppW2nV4lkSY4aTgKPMMvhHwCBVXIu9znj5hkLlGXNUSQNy2ik9G6LuucmPsuFzEMHnGInAyw9DvDdwPAlZIzv4jCI5vX70uyqwc2Mix0nmeydtYYXukgcvXJu1tGS9P5dCFvr7jhGhNObnIHVKSfhpOfbeplUbdMsHkqNS7BxZdaVElaopgHqxKRRpgCgyeHY2P85kk9yYW1jDXJXbGCkFdPCLT1crWk3NImDo3f2p7D2bfitANTMyZI5LnjE1a2lkpa6uQFFjk9vjd7mCv3wicQ7e2CX1qlHGGTvWbHSpt1clJzzV33QqgtgAmvzYBHgMBKmx7pYe1iTM3rMLVtd2EMsYooTFTB9En00MnxrtFKOrCoXIUrZLMUl46T5XyDX9p8Z1aGl2MlzeLf09VCZnGOA1322wNOnZn56rDFYkKDb4mi3wOYwmQXDqI184asGzmPs4GBRL8upX5wkdCm64A8Z3cTVgpeubBsmbjJFHq5uBjzVlgnh1DK88nn8B0bDJ2IsnSqnh1cynKmkHugEzG8tqhLDjdR5stdxdQhJIBKu2u8Bire0SsXlZ14LaGZ60FcunvAHXQy2RVcaHtAssC8JeoWCrrBbmXoWYINsh2IgBeZEazaJl2Xwq4XrPk6xlQMPXOZT0aVU3tIyiQEFLwCpf4gejqEIDhBfXS9QkDc5ccarkzC8Edbv4Br2gEN3o6MM5PPEjBe0hUN78zHK6ytdVAwirS8BC9yUGYTbVNu2vPzGDfqHfb78Gf3ue7XbJwVP0Grnybnz72KBbm7FVeIruohQWqK3Lzu55MMcR1E0DzlcPe8YNkgFG4gRKZXb0Ui2IAEuVGCx1rYWAklWFAcR8tgpMsWQnW1WvX5qur8CB5HcWgBIyKPQk0ST0vakgV8X87xKdoxohxXjvVxjlUzU0v799uft3tgfgf",
        "https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg")
        
        navigation.clickOnCreateGallerySubmitButton();
        general.errorMessage.should("have.text","The description may not be greater than 1000 characters.")
        .and("have.css","background-color","rgb(248, 215, 218)")
        .and("have.css","color","rgb(114, 28, 36)")
        
    })

    it("Create gallery with wrong URL placement", ()=>{
        createGallery.create("naslov", "https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg",faker.lorem.lines());
        navigation.clickOnCreateGallerySubmitButton();


    })

    it("Create gallery and click cancel button",()=>{


        createGallery.create("naslov", "opis","https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        navigation.clickOnCancelButton();
        cy.url().should("contain","gallery-app.vivifyideas.com");
        general.headerTitle.should("have.text","All Galleries");
        navigation.createGalleryButton.should("exist");
        
        
        
    }) 

    it("Delete image", ()=>{
        createGallery.create("pa pa", "e neces","https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        navigation.clickOnDeleteButton();


    })
    
    
    //positive test cases


    it("Create gallery with all required requirements", ()=>{   
        createGallery.create("title", " ","https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        cy.intercept ("POST","https://gallery-api.vivifyideas.com/api/galleries").as("createdGallery")
        navigation.clickOnCreateGallerySubmitButton();
        cy.wait("@createdGallery").then((intercept)=>{
            expect(intercept.response.statusCode).to.eq(201)
            expect(intercept.response.url).to.eq("https://gallery-api.vivifyideas.com/api/galleries")
            expect(intercept.response.statusMessage).to.eq("Created")
            expect(intercept.response.body.user_id).to.eq(46)
            expect(intercept.response.body.title).to.eq("title")
            expect(intercept.response.body.description).to.eq(null)
            //cy.log(JSON.stringify(intercept.response))
        })
        
        cy.url().should("contain","gallery-app.vivifyideas.com");
        general.headerTitle.should("have.text","All Galleries");
        navigation.createGalleryButton.should("exist")
        


    })

    it
    ("Create gallery with description field", ()=>{   

        createGallery.create("title", "opis","https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        cy.intercept ("POST","https://gallery-api.vivifyideas.com/api/galleries").as("createdGallery");
        navigation.clickOnCreateGallerySubmitButton();
        cy.wait("@createdGallery").then((intercept)=>{
            expect(intercept.response.statusCode).to.eq(201)
            expect(intercept.response.url).to.eq("https://gallery-api.vivifyideas.com/api/galleries")
            expect(intercept.response.statusMessage).to.eq("Created")
            expect(intercept.response.body.user_id).to.eq(46)
            expect(intercept.response.body.title).to.eq("title")
            expect(intercept.response.body.description).to.eq("opis")

        })
       
        cy.url().should("contain","gallery-app.vivifyideas.com");
        general.headerTitle.should("have.text","All Galleries");
        navigation.createGalleryButton.should("exist");


    
        
    })

        
        
        
   

    it("Create gallery with description field that has less than 1000", ()=>{     


        createGallery.create ("naslov", 'Uqz2G5jbYeUI3ngLw0YbpqjSqEEKbHgFXPLMNre7Qh7wkfbNyGH1Yh8q7QLTi10WwsF417dHllC1klmClzqHdMMBjWRmtZPEqCzoYZXzLT6idPQavPt10VoAlbXMlHYZzTWAWk3oentQkS8MRq9D0406mWu0NvXcdiBPSwGO8haNbNkFAhibQFgn7WGpu6UYMwagd8w5KnZkn76NWIFIsr8m7KsFGn6XtDb87tFH4kUtoARIfmVdTrzyqj4bG1FFon58tpoKeu14p8BKAey2RBbMzgsfo1dNKlWlCSn5gZPiiwIRijf5vhUsNnhMbftYrYyM06Em2d2HLTahqP3RMfsvrm9WvsigBQHmh7NBUifU45EzJK031LV5mFtdOZBFzW7h3RRmSvYFiAF7YLsThDsgBWlpGRll2sdi9quhZjb10OEzyhf8iYM3cYvxX3ZIhYgfnzzCE6gIciDoW4wp79IjKhfasEiXZA2I85FawE5c7EOkYbZwj0s1x1yJmErudpjt8fE3goNyNICT9f1m1kCmdm49RlIpGk519mAUkUPOBz8IVppBYKugw1UAN0mcLHqIPHdBQTDvAT0vNfh8jgpcaKLDAsrnF7GDLfS3DtwsQLLCIBDs6AbHbzBLz4uIEqeK4X7OFpF6mI766GkaVPfE6zHRFxPul4yxw6z3zIdV9sa5ZRoJnmhTdGAsLa7SVOjLmH2Nv6GGPhGNvbmmezETJfxT07cs9XF60HB5WhbMwAuWHxXxKyrPvEK8n5IwUVkw2x0mt0UeZMh8jMEPVYcbESltGaC54c0tVk6ahQw2gYWCXhpMgBrX8YOWddCT6AQ8UqCz5CmbJFxB1zxyCRjdSeo7TKukYyhUwKZ99vwt8rpYGwLzqcvYx8GL4j2lOyShwZrRktdAitaVENO3p8Jpssj1lCIclgS380nx0ghV659gjreCg0Zn9ux7u1gF0HSLKEnadLqlxgPUbzQwZsnDzWUEyHztqi6W2kK',"https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg" );
        cy.intercept ("POST","https://gallery-api.vivifyideas.com/api/galleries").as("createdGallery");
        navigation.clickOnCreateGallerySubmitButton(); 

        cy.wait("@createdGallery").then((intercept)=>{
            expect(intercept.response.statusCode).to.eq(201)
            expect(intercept.response.url).to.eq("https://gallery-api.vivifyideas.com/api/galleries")
            expect(intercept.response.statusMessage).to.eq("Created")
            expect(intercept.response.body.user_id).to.eq(46)
            expect(intercept.response.body.title).to.eq("title")
            expect(intercept.response.body.description).to.eq("opis")

        })
        cy.url().should("contain","gallery-app.vivifyideas.com");
        general.headerTitle.should("have.text","All Galleries");
        navigation.createGalleryButton.should("exist");
       
        

        
    })

    it("Create gallery - adding more images", ()=>{     

        createGallery.create2("naslov", "opis","https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg","https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        navigation.clickOnCreateGallerySubmitButton();
        cy.url().should("contain","gallery-app.vivifyideas.com");
        general.headerTitle.should("have.text","All Galleries");
        navigation.createGalleryButton.should("exist");
    
     

        
    })

    it("Create gallery with title and description- using unicode", ()=>{     

        createGallery.create("naslovŠšš", " oŠšš ","https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        navigation.clickOnCreateGallerySubmitButton(); 
        cy.url().should("contain","gallery-app.vivifyideas.com");
        general.headerTitle.should("have.text","All Galleries");
        navigation.createGalleryButton.should("exist");
        
        


       
    })

    it("Create gallery with description and title using digits", ()=>{   
        
        createGallery.create("naslovŠš111", " 222 ","https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        navigation.clickOnCreateGallerySubmitButton(); 
        cy.url().should("contain","gallery-app.vivifyideas.com");
        general.headerTitle.should("have.text","All Galleries");
        navigation.createGalleryButton.should("exist");
        
        
        
    })

    it("Create gallery with description and title using special characters", ()=>{ 
        createGallery.create("naslovŠš111%%", " 222^^ ","https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        navigation.clickOnCreateGallerySubmitButton();  
        cy.url().should("contain","gallery-app.vivifyideas.com");
        general.headerTitle.should("have.text","All Galleries");
        navigation.createGalleryButton.should("exist");
        

    
    })

    it("Create gallery with png files", ()=>{    
        createGallery.create("opisni title", "description","https://cdn.pixabay.com/photo/2017/02/09/21/08/wings-2053515__340.png");
        navigation.clickOnCreateGallerySubmitButton();
        cy.url().should("contain","gallery-app.vivifyideas.com");
        general.headerTitle.should("have.text","All Galleries");
        navigation.createGalleryButton.should("exist");
        
        
    })
})    