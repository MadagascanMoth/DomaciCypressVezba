class Navigation{
    get loginButton (){
        return cy.get ("a[href='/login']");
    }

    get logoutButton(){
        return cy.get ("a[role='button ']");
    }

    get registerButton (){
        return cy.get("a[href='/register']");
    }

    get loginSubmitButton(){
        return cy.get ("button[type='submit']");
    }
    
    get createGalleryButton (){
        return cy.get ("a[href='/create']");
    }

    get registerSubmitButton(){
        return cy.get("button[type='submit']");
    }

    get registerCheckbox(){
        return cy.get("input[type='checkbox']");
    }

    get createGallerySubmitButton(){
        return cy.get("form > button:nth-of-type(1)");
    }

    get addButton(){
        return cy.get (":nth-child(2) div:nth-child(1) div:nth-child(1) form:nth-child(2) div:nth-child(3) > button:nth-child(3)");
    }

    get cancelButton(){
        return cy.get ("form > button:nth-of-type(2)");
    }

    get deleteButton(){
        return cy.get (":nth-child(2) > .input-group > .input-group-append > :nth-child(1) > .fas");
    }


    clickOnLoginButton(){
        this.loginButton.click();
    }

    clickOnLogoutButton(){
        this.logoutButton.click();
    }

    clickOnRegisterButton(){
        this.registerButton.click();
    }

    clickOnCreateGalleryButton(){
        this.createGalleryButton.click();
    }

    clickOnRegisterSubmitButton(){
        this.registerSubmitButton.click();
    }

    checkOnRegisterCheckboxButton(){
        this.registerCheckbox.check();
    }

    clickOnCreateGallerySubmitButton(){
        this.createGallerySubmitButton.click();
    }

    clickOnAddButton(){
        this.addButton.click();
    }

    clickOnCancelButton(){
        this.cancelButton.click();
    }

    clickOnLoginSubmitButton(){
        this.loginSubmitButton.click();
    }

    clickOnDeleteButton(){
        this.deleteButton.click();
    }


}

export const navigation = new Navigation ()