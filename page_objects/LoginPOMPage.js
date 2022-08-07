class LoginPOMPage {
    get emailInput (){
        return cy.get("input[id='email']");
    }
    get passwordInput(){
        return cy.get ("input[id='password']");
    }
    get submitButton(){
        return cy.get ("button[type='submit']");
    }

    login(email,password){
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.submitButton.click();
    }
    


}

export const loginPOMPage = new LoginPOMPage();