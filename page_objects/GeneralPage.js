class General {
    get headerTitle(){
        return cy.get(".title-style");
    }

    get errorMessage (){
        return cy.get("p[class='alert alert-danger']");
    }

    

    
}

export const general = new General()