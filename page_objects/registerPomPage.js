class RegisterPomPage{
    get registerSubmitButton(){
        return cy.get("button[type='submit']");
        
    }

    get registerFirstName(){
        return cy.get("input[id='first-name']");
    }

    get registerLastName(){
        return cy.get ("input[id='last-name']");
    }

    get registerEmail(){
        return cy.get ("input[id='email']");
    
    }

    get registerPassword(){
        return cy.get ("input[id='password']");
    }

    get registerConfirmedPassword (){
        return cy.get ("input[id='password-confirmation']");
    }

    get registerCheckBox (){
        return cy.get ("input[type='checkbox']");
    }

    registration(FirstName, LastName, email, password, confirmedPassword ){
        this.registerFirstName.type(FirstName);
        this.registerLastName.type(LastName);
        this.registerEmail.type(email);
        this.registerPassword.type(password);
        this.registerConfirmedPassword.type(confirmedPassword);
        this.registerCheckBox.check();
        this.registerSubmitButton.click();
        
    }

    registrationUncheck(FirstName,LastName, email, password, confirmedPassword){
        this.registerFirstName.type(FirstName);
        this.registerLastName.type(LastName);
        this.registerEmail.type(email);
        this.registerPassword.type(password);
        this.registerConfirmedPassword.type(confirmedPassword);
        this.registerSubmitButton.click();

    }

} 


export const registerPomPage = new RegisterPomPage();