const { faker } = require('@faker-js/faker');
import RegisterPage from '../pom/cypress.register';

describe('Test de registrar usuario', function () {
    let registerPage;

    beforeEach(function () {
        registerPage = new RegisterPage();
        cy.visit('/')
    });

    it('Debería registrarse correctamente', function () {
        const name = faker.person.fullName();
        const username = faker.internet.userName();
        const key = faker.internet.password();

        registerPage.registerUser(name, username, key);
        registerPage.isSuccessMessageVisible();
    });

    it('Debe registrar un usuario que ya existe', function () {
        const name = "alvaro diaz";
        const username = "alvaro";
        const key = "diaz";

        registerPage.registerUser(name, username, key);
        registerPage.isErrorMessageVisible();
    });
});