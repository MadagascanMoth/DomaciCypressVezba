/// <reference types="Cypress" />


describe("Create Gallery test cases", ()=>{
    it("Visit galery app page",()=>{
        cy.visit("/");
    })

    it("Click login button",()=>{
        cy.get('a[href="/login"]').click();
    })
    it("Login with valid credentials",()=>{
        cy.get ('input[id="email"]').type ("red@gmail.com");
        cy.get('input[id="password"]').type ("357753357");
        cy.get ('form > button:nth-of-type(1)').click();
    })
    it ("Click create button",()=>{
        cy.get('a[href="/create"]').click();
    })
    

    //Negative test cases

    it("All required fields are empty",()=>{
        cy.get ('form > button:nth-of-type(1)').click();
    })

    it ("Create gallery with invalid URL - without //https:", ()=>{
        cy.get('input[id="title"]').type("naslov");
        cy.get('input[type="url"]').type('i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg');
        cy.get ('form > button:nth-of-type(1)').click();

    })

    it("Create gallery with invalid URL - without domain name", ()=>{
        cy.get('input[id="title"]').clear().type("naslov");
        cy.get('input[type="url"]').type("https://i.natgeofe/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        cy.get ('form > button:nth-of-type(1)').click();

    })
    

    it("Create gallery with invalid URL -missing .jpg, .png, .jpeg",()=>{

        cy.get('input[id="title"]').clear().type("naslov");
        cy.get('input[type="url"]').clear().type("https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3");
        cy.get ('form > button:nth-of-type(1)').click();

    })

    it ("Create gallery with invalid title- less than 2 characters",()=>{
        cy.get('input[id="title"]').clear().type("n");
        cy.get('input[type="url"]').clear().type("https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        cy.get ('form > button:nth-of-type(1)').click();

    })

    it ("Create gallery with invalid title- more than 255 characters",()=>{
        cy.get('input[id="title"]').clear().type("JIzuzg22D5VLlquBMfp7ZxLK3QZDNOCWtsyGMWGOJlKrqzbZZjTI2SZyniGLAvyro9qtVCKPUBwXgavwTijZW69XdlFTY5tUffG9FvIe74ScIGiG9WwyXEKWG7vtGNNW1exTImti1yUIGVB5xQLHski28sPxhaI4IQSU55mrcjwxnlxujh4WMclQFZLhjUPfcGQVxeZaoIlLZ3h9YztQhRaxXjslRgKGx0S3213DMkIVTsbibguf8PyWN6fZ0coe");
        cy.get('input[type="url"]').clear().type("https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        cy.get ('form > button:nth-of-type(1)').click();
    })

    it ("Create gallery with description  more than 1000 characters",()=>{
        cy.get('input[id="title"]').clear().type("naslov");
        cy.get ('input#description').type("vTVVKO47pnk9HQ62vQP3IPzLNlQtDZYuzmyqnMqZFZR0D8mjL7mB604dBtJlFKlpf85I6nHPDVyDEq3Mr1JCxjCn299Bm4PUwYXWT2Rxg6gWkyxCJciFYRCbTIi37rieL6N0FG9bB0SNri3E8x8OgZFs44hEj4d5IdWKyOOQSWg6tqvHXzznEBGYQ13XqMkPD1K23Sdn5BIn6Rj1CIlrS2ORVdgU5cqQrwOpWrRAcMlTWg2wrrRhfPE78o3hYr5TmhU5yNkiAqjHokMNiziw6fqa7lCJcmrGtjSKtE6USNQwhEQpxjr2N1rbenRd1tFrdpTZNv4b7ZmwYtKHG6ZISPlEwFMqnXS07uOQYxqFUY4PW7rVZWLubdU7jQfDKL86fT3GpUpTgTHOpPZJzF6wn8KyGK9GWmo6WS7FmxhsnDMTLTJIEYHkTOw0DwQzrxQfN9gXudX7jfLgoBXQdnKs98XGeoYExVQM4DEjmkUlzeBkN4xWNRwV5VIOiFL2pAJE1t2rygijsg5mX1Q48LsChu3irndX4DaMziMvWcuwMJqnECqDSlSqbUwLxaABToeYSpMhOXEcURaTT2XrWDTyElaYBwY72l1M0ITbzu68G1AWnkY9GHB1iqEND69b5whS5DAuIhn0LepfK3T5crKkiILzbiqrI2ukjpn97XVx0n7j45AbZhY2UV2eWoCEBWjyZRY3ujhquBA9bvaipK8hClYIrLx7xaYCfNvjeW54SxmfMpkjw5fqntegQS4UeyFHkSdVqQ92L0FgMZVtuggWHGPUIdmdogPJ4Esn2NXOIHF88lWrhRMz6cKt8A61MlQwSlGVSCplwOjkSVKTBFxic3AgCtBK5fLMwLMqb7TKoLI9clSCK5Q7nlqVQmIvUJHQ8DA0b4GJLYw9rFll0Uk5YOv06iyNbfuZndTZ65meKirm2THatbQMg90qPdm3HUS9hSSWK51BJupl0irZkTb1aet3ezZ1FHI09ta24ffoe");
        cy.get('input[type="url"]').clear().type("https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        cy.get ('form > button:nth-of-type(1)').click();
    })

    it("Create gallery with wrong URL placement", ()=>{
        cy.get('input[id="title"]').clear().type("naslov");
        cy.get ('input#description').clear().type("https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        cy.get('input[type="url"]').clear().type("naslov");
        cy.get ('form > button:nth-of-type(1)').click();

    })

    it("Create gallery and click cancel button",()=>{
        
        cy.get('input[id="title"]').clear().type("naslov");
        cy.get ('input#description').type("opis");
        cy.get('input[type="url"]').clear().type("https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        cy.get ("form > button:nth-of-type(2)").click();
    }) 
    
    
    //positive test cases


    it("Create gallery with all required requirements", ()=>{     
         cy.get('input[id="title"]').clear().type("naslov");
         cy.get('input[type="url"]').clear().type("https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
         cy.get ('form > button:nth-of-type(1)').click();
         


    })

    it("Create gallery with description field", ()=>{     
        cy.get('input[id="title"]').clear().type("naslov");
        cy.get ('input#description').clear().type("opis");
        cy.get('input[type="url"]').clear().type("https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        cy.get ('form > button:nth-of-type(1)').click();
       
   })

    it("Create gallery with description field that has less than 1000", ()=>{     
        cy.get('input[id="title"]').clear().type("naslov");
        cy.get ('input#description').clear().type("Uqz2G5jbYeUI3ngLw0YbpqjSqEEKbHgFXPLMNre7Qh7wkfbNyGH1Yh8q7QLTi10WwsF417dHllC1klmClzqHdMMBjWRmtZPEqCzoYZXzLT6idPQavPt10VoAlbXMlHYZzTWAWk3oentQkS8MRq9D0406mWu0NvXcdiBPSwGO8haNbNkFAhibQFgn7WGpu6UYMwagd8w5KnZkn76NWIFIsr8m7KsFGn6XtDb87tFH4kUtoARIfmVdTrzyqj4bG1FFon58tpoKeu14p8BKAey2RBbMzgsfo1dNKlWlCSn5gZPiiwIRijf5vhUsNnhMbftYrYyM06Em2d2HLTahqP3RMfsvrm9WvsigBQHmh7NBUifU45EzJK031LV5mFtdOZBFzW7h3RRmSvYFiAF7YLsThDsgBWlpGRll2sdi9quhZjb10OEzyhf8iYM3cYvxX3ZIhYgfnzzCE6gIciDoW4wp79IjKhfasEiXZA2I85FawE5c7EOkYbZwj0s1x1yJmErudpjt8fE3goNyNICT9f1m1kCmdm49RlIpGk519mAUkUPOBz8IVppBYKugw1UAN0mcLHqIPHdBQTDvAT0vNfh8jgpcaKLDAsrnF7GDLfS3DtwsQLLCIBDs6AbHbzBLz4uIEqeK4X7OFpF6mI766GkaVPfE6zHRFxPul4yxw6z3zIdV9sa5ZRoJnmhTdGAsLa7SVOjLmH2Nv6GGPhGNvbmmezETJfxT07cs9XF60HB5WhbMwAuWHxXxKyrPvEK8n5IwUVkw2x0mt0UeZMh8jMEPVYcbESltGaC54c0tVk6ahQw2gYWCXhpMgBrX8YOWddCT6AQ8UqCz5CmbJFxB1zxyCRjdSeo7TKukYyhUwKZ99vwt8rpYGwLzqcvYx8GL4j2lOyShwZrRktdAitaVENO3p8Jpssj1lCIclgS380nx0ghV659gjreCg0Zn9ux7u1gF0HSLKEnadLqlxgPUbzQwZsnDzWUEyHztqi6W2kK");
        cy.get('input[type="url"]').clear().type("https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        cy.get ('form > button:nth-of-type(1)').click();
        
    })

    it("Create gallery - adding more images", ()=>{     
        cy.get('input[id="title"]').clear().type("naslov");
        cy.get ('input#description').clear().type("opis");
        cy.get('input[type="url"]').clear().type("https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        cy.get (':nth-child(2) div:nth-child(1) div:nth-child(1) form:nth-child(2) div:nth-child(3) > button:nth-child(3)').click();
        cy.get('input[type="url"]').eq(1).type("https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg")
        cy.get ('form > button:nth-of-type(1)').click();
        
    })

    it("Create gallery with title and description- using unicode", ()=>{     
        cy.get('input[id="title"]').clear().type("Ššš");
        cy.get ('input#description').clear().type("Ššš");
        cy.get('input[type="url"]').clear().type("https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        cy.get ('form > button:nth-of-type(1)').click();
        
    })

    it("Create gallery with description and title using digits", ()=>{     
        cy.get('input[id="title"]').clear().type("111");
        cy.get ('input#description').clear().type("222");
        cy.get('input[type="url"]').clear().type("https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        cy.get ('form > button:nth-of-type(1)').click();
        
    })

    it("Create gallery with description and title using digits", ()=>{     
        cy.get('input[id="title"]').clear().type("%%%");
        cy.get ('input#description').clear().type("^^^");
        cy.get('input[type="url"]').clear().type("https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01_2x3.jpg");
        cy.get ('form > button:nth-of-type(1)').click();
        
    })

    it("Create gallery with png files", ()=>{     
        cy.get('input[id="title"]').clear().type("naslov");
        cy.get ('input#description').clear().type("opis");
        cy.get('input[type="url"]').clear().type("https://cdn.pixabay.com/photo/2017/02/09/21/08/wings-2053515__340.png");
        cy.get ('form > button:nth-of-type(1)').click();
        
    })










})






    
        


    





