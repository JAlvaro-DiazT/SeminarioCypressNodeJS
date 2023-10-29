class RegisterPage {
    constructor() {
        this.registerButtonLocator = "#j_idt76";
        this.registerNameLocator = "#registro\\:nombre";
        this.registerUserNameLocator = "#registro\\:nombreUsuario";
        this.registerKeyLocator = "#registro\\:clave";
        this.registerRepeatKeyLocator = "#registro\\:verificacionClave";
        this.registerButtonAcceptLocator = "#registro\\:j_idt88";
        this.successMessageLocator = '.ui-growl-title:contains("Operación completada")';
        this.errorMessageLocator = '.ui-growl-title:contains("Registro ya existente")';
    }

    clickRegister() {
        cy.get(this.registerButtonLocator).click();
    }

    registerUser(name, username, key) {
        this.clickRegister();
        cy.get(this.registerNameLocator).type(name);
        cy.get(this.registerUserNameLocator).type(username);
        cy.get(this.registerKeyLocator).type(key);
        cy.get(this.registerRepeatKeyLocator).type(key);
        cy.get(this.registerButtonAcceptLocator).click();
    }

    isSuccessMessageVisible() {
        cy.get(this.successMessageLocator).should('be.visible');
    }

    isErrorMessageVisible() {
        cy.get(this.errorMessageLocator).should('be.visible');
    }
}

export default RegisterPage;