
import SignInPage from '../pom/cypress.signin';
describe('Test de inicio de sesión', function () {
    let signInPage;

    beforeEach(function () {
        signInPage = new SignInPage();
        cy.visit('/')
    });

    it('Debería iniciar sesión correctamente', function () {
        const user = 'alvaro';
        const key = 'diaz';

        signInPage.fillUsername(user);
        signInPage.fillPassword(key);
        signInPage.clickSignIn();

        signInPage.isGoOutVisible();
        signInPage.isMenuVisible();
        cy.screenshot();
    });

    it('Debería salir error al intentar iniciar sesión', function () {
        const user = 'error prueba';
        const key = 'error123';

        signInPage.fillUsername(user);
        signInPage.fillPassword(key);
        signInPage.clickSignIn();

        signInPage.isLabelUserVisible();
        signInPage.isLabelKeyVisible();
        cy.screenshot();
    });
});
