class CreateGallery {

    get createGalleryTitle (){
        return cy.get("input[id='title']");
    }

    get createUrl (){
        return cy.get ("input[type='url']");
    }

    get createUrl2(){
        return cy.get ('div:nth-of-type(2) > .input-group.mb-3 > .form-control')
    }

    get createGalleryDescription(){
        return cy.get ("input#description");

    }
    get addButton(){
        return cy.get (":nth-child(2) div:nth-child(1) div:nth-child(1) form:nth-child(2) div:nth-child(3) > button:nth-child(3)");
    }
    
    create (title, description = " ", url){
        this.createGalleryTitle.type(title);
        this.createGalleryDescription.type(description);
        this.createUrl.type(url);
        
    }
    create2 (title, description = " ", url, url2){
        this.createGalleryTitle.type(title);
        this.createGalleryDescription.type(description);
        this.createUrl.type(url);
        this.addButton.click();
        this.createUrl2.type(url2);
        
    }
 }
   

export const createGallery = new CreateGallery()