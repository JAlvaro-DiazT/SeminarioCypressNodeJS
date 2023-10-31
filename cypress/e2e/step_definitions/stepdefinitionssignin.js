const signInPage = require("../../pom/cypress.signin");
const {When, Given, Then} = require("@badeball/cypress-cucumber-preprocessor");

beforeEach( () => {
    cy.visit('/')
});
Given(/^The user is on the login page$/, function () {

});

When(/^The user enters their username "([^"]*)" and password "([^"]*)"$/,function (param1,param2) {
    const user = param1;
    const key = param2;

    signInPage.fillUsername(user);
    signInPage.fillPassword(key);
    signInPage.clickSignIn();
});

Then(/^The user should see the Logout button and Menu button$/,function () {
    signInPage.isGoOutVisible();
    signInPage.isMenuVisible();
});
Then(/^The user should see the fields username and key$/,function () {
    signInPage.isLabelUserVisible();
    signInPage.isLabelKeyVisible();
});