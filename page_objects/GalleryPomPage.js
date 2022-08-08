class CreateGallery {

    get createGalleryTitle (){
        return cy.get("input[id='title']");
    }

    get createUrl (){
        return cy.get ("input[type='url']");
    }

    get createGalleryDescription(){
        return cy.get ("input#description");
    }

    create (title, description, url){
        this.createGalleryTitle.type(title);
        this.createGalleryDescription.type(description);
        this.createUrl.type(url)
    }
}

export const createGallery = new CreateGallery()