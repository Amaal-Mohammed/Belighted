import LoginPage from '../pageobjects/login'

import ModuleCreatePage from '../pageobjects/createmodule'
import MyModulePage from '../pageobjects/mymodule'
import TrainingCreatePage from '../pageobjects/createtraining'
import MyTraining from '../pageobjects/mytrainings'
import Email from '../pageobjects/mail'

import Helper from '../util/helpers'
context('Testing scenarios related to Login Page ', () => {
  
    beforeEach(() => {
        cy.visit("/")
  
        LoginPage.getEnglishLanguagebutton().click({ force: true })
  
    })
    afterEach(() => {
      cy.clearCookies()
    })
  
    it('Verify that User is logged in successully with valid email and password', () => {
        cy.fixture("login.json", "binary").then(data => {
            cy.login(data.email, data.password)
          })
  
      MyTraining.getProfileDropdownName().contains("Michael Albert").should('be.exist')
  
    })

    it('Verify that User can not login successully with invalid email and password', () => {
        cy.fixture("login.json", "binary").then(data => {
            LoginPage.getEmail(data.invalidemail).click()
            LoginPage.getPassword().type(data.password)
            LoginPage.getSubmit().click()
          })
        

  
    })
})