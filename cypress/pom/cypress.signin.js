class SignInPage {
    constructor() {
        this.enterUserNameLocator = '#nombreUsuario';
        this.enterKeyLocator = '#clave';
        this.registerEnterLocator = '.ui-button-text.ui-c:contains("Ingresar")';
        this.registerGoOut = '.ui-button-text.ui-c:contains("Salir")';
        this.registerMenu = 'span.ui-button-icon-left.ui-icon.ui-c.pi.pi-bars1';
        this.labelUser = '.ui-outputlabel-label:contains("Nombre de Usuario: ")';
        this.labelKey = '.ui-outputlabel-label:contains("Clave: ")';
    }
    fillUsername(username) {        cy.get(this.enterUserNameLocator).type(username);    }
    fillPassword(password) {        cy.get(this.enterKeyLocator).type(password);    }
    clickSignIn() {        cy.get(this.registerEnterLocator).click();    }
    isGoOutVisible() {        cy.get(this.registerGoOut).should('be.visible');    }
    isMenuVisible() {        cy.get(this.registerMenu).should('be.visible');    }
    isLabelUserVisible() {        cy.get(this.labelUser).should('be.visible');    }
    isLabelKeyVisible() {        cy.get(this.labelKey).should('be.visible');    }
}

module.exports = new SignInPage();