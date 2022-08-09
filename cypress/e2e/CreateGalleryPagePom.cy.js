/// <reference types="Cypress" />

import {navigation} from "../../page_objects/navigation";
import{createGallery } from "../../page_objects/GalleryPomPage"
import { faker } from '@faker-js/faker';
import {loginPOMPage} from "../../page_objects/LoginPOMPage";


describe("Create Gallery test cases", ()=>{
    beforeEach(()=>{

        cy.visit("/");
        navigation.clickOnLoginButton();
        loginPOMPage.login("red@gmail.com","357753357");
        navigation.clickOnCreateGalleryButton()

    })

    let user = {
        title: faker.lorem.lines(),
        description:faker.lorem.sentence() ,
    }

   
    //Negative test cases

    it("All required fields are empty",()=>{



        navigation.clickOnCreateGallerySubmitButton();
    })

    it ("Create gallery with invalid URL - without //https:", ()=>{
        createGallery.create(faker.lorem.lines()," ","'i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg'" );
        navigation.clickOnCreateGallerySubmitButton();

    })

    it("Create gallery with invalid URL - without domain name", ()=>{

        createGallery.create(faker.lorem.lines(), " ", "https://i.natgeofe/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        navigation.clickOnCreateGallerySubmitButton();
    })
    

    it("Create gallery with invalid URL -missing .jpg, .png, .jpeg",()=>{
        createGallery.create(faker.lorem.lines(), " ", "https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3");
        navigation.clickOnCreateGallerySubmitButton();

    })

    it ("Create gallery with invalid title- less than 2 characters",()=>{

        createGallery.create("n", " ", "https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        navigation.clickOnCreateGallerySubmitButton();

        
    })

    it ("Create gallery with invalid title- more than 255 characters",()=>{
        createGallery.create("JIzuzg22D5VLlquBMfp7ZxLK3QZDNOCWtsyGMWGOJlKrqzbZZjTI2SZyniGLAvyro9qtVCKPUBwXgavwTijZW69XdlFTY5tUffG9FvIe74ScIGiG9WwyXEKWG7vtGNNW1exTImti1yUIGVB5xQLHski28sPxhaI4IQSU55mrcjwxnlxujh4WMclQFZLhjUPfcGQVxeZaoIlLZ3h9YztQhRaxXjslRgKGx0S3213DMkIVTsbibguf8PyWN6fZ0coe", " ", "https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        navigation.clickOnCreateGallerySubmitButton();


    })

    it ("Create gallery with description  more than 1000 characters",()=>{
        createGallery.create(faker.lorem.lines(),"JIzuzg22D5VLlquBMfp7ZxLK3QZDNOCWtsyGMWGOJlKrqzbZZjTI2SZyniGLAvyro9qtVCKPUBwXgavwTijZW69XdlFTY5tUffG9FvIe74ScIGiG9WwyXEKWG7vtGNNW1exTImti1yUIGVB5xQLHski28sPxhaI4IQSU55mrcjwxnlxujh4WMclQFZLhjUPfcGQVxeZaoIlLZ3h9YztQhRaxXjslRgKGx0S3213DMkIVTsbibguf8PyWN6fZ0coe", "https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        navigation.clickOnCreateGallerySubmitButton();
        
    })

    it("Create gallery with wrong URL placement", ()=>{
        createGallery.create(faker.lorem.lines(), "https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg",faker.lorem.lines());
        navigation.clickOnCreateGallerySubmitButton();

    })

    it("Create gallery and click cancel button",()=>{


        createGallery.create(faker.lorem.lines(), faker.lorem.sentence(),"https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        navigation.clickOnCreateGallerySubmitButton();
        
    }) 

    it ("Delete gallery", ()=>{
        createGallery.create(faker.lorem.lines(), faker.lorem.sentence(),"https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        navigation.clickOnDeleteButton();

    })
    
    
    //positive test cases


    it("Create gallery with all required requirements", ()=>{   
        createGallery.create(faker.lorem.lines(), " ","https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        navigation.clickOnCreateGallerySubmitButton();  

         


    })

    it("Create gallery with description field", ()=>{   

        createGallery.create(faker.lorem.lines(), faker.lorem.sentence(),"https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        navigation.clickOnCreateGallerySubmitButton();  
        
        
        
   })

    it("Create gallery with description field that has less than 1000", ()=>{     


        createGallery.create (faker.lorem.lines(), 'Uqz2G5jbYeUI3ngLw0YbpqjSqEEKbHgFXPLMNre7Qh7wkfbNyGH1Yh8q7QLTi10WwsF417dHllC1klmClzqHdMMBjWRmtZPEqCzoYZXzLT6idPQavPt10VoAlbXMlHYZzTWAWk3oentQkS8MRq9D0406mWu0NvXcdiBPSwGO8haNbNkFAhibQFgn7WGpu6UYMwagd8w5KnZkn76NWIFIsr8m7KsFGn6XtDb87tFH4kUtoARIfmVdTrzyqj4bG1FFon58tpoKeu14p8BKAey2RBbMzgsfo1dNKlWlCSn5gZPiiwIRijf5vhUsNnhMbftYrYyM06Em2d2HLTahqP3RMfsvrm9WvsigBQHmh7NBUifU45EzJK031LV5mFtdOZBFzW7h3RRmSvYFiAF7YLsThDsgBWlpGRll2sdi9quhZjb10OEzyhf8iYM3cYvxX3ZIhYgfnzzCE6gIciDoW4wp79IjKhfasEiXZA2I85FawE5c7EOkYbZwj0s1x1yJmErudpjt8fE3goNyNICT9f1m1kCmdm49RlIpGk519mAUkUPOBz8IVppBYKugw1UAN0mcLHqIPHdBQTDvAT0vNfh8jgpcaKLDAsrnF7GDLfS3DtwsQLLCIBDs6AbHbzBLz4uIEqeK4X7OFpF6mI766GkaVPfE6zHRFxPul4yxw6z3zIdV9sa5ZRoJnmhTdGAsLa7SVOjLmH2Nv6GGPhGNvbmmezETJfxT07cs9XF60HB5WhbMwAuWHxXxKyrPvEK8n5IwUVkw2x0mt0UeZMh8jMEPVYcbESltGaC54c0tVk6ahQw2gYWCXhpMgBrX8YOWddCT6AQ8UqCz5CmbJFxB1zxyCRjdSeo7TKukYyhUwKZ99vwt8rpYGwLzqcvYx8GL4j2lOyShwZrRktdAitaVENO3p8Jpssj1lCIclgS380nx0ghV659gjreCg0Zn9ux7u1gF0HSLKEnadLqlxgPUbzQwZsnDzWUEyHztqi6W2kK',"https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg" )
        navigation.clickOnCreateGallerySubmitButton();  

        
    })

    it("Create gallery - adding more images", ()=>{     

        createGallery.create("naslov", " opis ","https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        navigation.clickOnAddButton();
        createGallery.create(" "," ", " ", "https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg")
        navigation.clickOnCreateGallerySubmitButton();  

        
    })

    it("Create gallery with title and description- using unicode", ()=>{     

        createGallery.create("naslovŠšš", " oŠšš ","https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        navigation.clickOnCreateGallerySubmitButton();  


       
    })

    it("Create gallery with description and title using digits", ()=>{   
        
        createGallery.create("naslovŠš111", " 222 ","https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        navigation.clickOnCreateGallerySubmitButton();  
        
    })

    it("Create gallery with description and title using special characters", ()=>{ 
        createGallery.create("naslovŠš111%%", " 222^^ ","https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        navigation.clickOnCreateGallerySubmitButton();  

    
    })

    it("Create gallery with png files", ()=>{    
        createGallery.create(faker.lorem.lines(), faker.lorem.sentence(),"https://cdn.pixabay.com/photo/2017/02/09/21/08/wings-2053515__340.png");
        navigation.clickOnCreateGallerySubmitButton();   
        
    })
})    

