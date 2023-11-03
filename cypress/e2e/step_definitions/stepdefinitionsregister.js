const registerPage = require("../../pom/cypress.register");
const {When, Given, Then} = require("@badeball/cypress-cucumber-preprocessor");
const { faker } = require('@faker-js/faker');
const _ = require('lodash');

beforeEach( () => {
    cy.visit('/')
});

Given(/^The user is on the registration page$/, function () {
});
When(/^The user enters his full name "([^"]*)", username "([^"]*)" and password "([^"]*)"$/,function (name, username, password) {


    if (_.isEmpty(name) && _.isEmpty(username) && _.isEmpty(password)) {
        name = faker.person.fullName();
        username = faker.internet.userName();
        password = faker.internet.password();
    }
    registerPage.registerUser(name, username, password);
});
Then(/^The user should then see the message "([^"]*)"$/,function (message_expected) {
    if(message_expected ==="Operación completada"){
        registerPage.isSuccessMessageVisible();
    }else{
        registerPage.isErrorMessageVisible();
    }
    cy.screenshot()
});