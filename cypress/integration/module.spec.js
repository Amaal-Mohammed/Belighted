import LoginPage from '../pageobjects/login'
import ModuleCreatePage from '../pageobjects/createmodule'
import MyModulePage from '../pageobjects/mymodule'
import TrainingCreatePage from '../pageobjects/createtraining'
import MyTraining from '../pageobjects/mytrainings'
import Email from '../pageobjects/mail'
import Helper from '../util/helpers'
context('Testing scenarios related to createModule  Page ', () => {
  
    beforeEach(() => {
        
        
        cy.visit("/")

        LoginPage.getEnglishLanguagebutton().click({ force: true })
       
        cy.fixture("login.json", "binary").then(data => {
          cy.login(data.email, data.password)
        })
        Helper.getCookieDisclaimerButton().click()
       
      
      
    
      })
      afterEach(() => {
        cy.clearCookies()
      })
  
    it('verify User will not be able to publish a module with empty title', () => {

        ModuleCreatePage.getCreateAModuleMenuButton().click({ force: true })
        ModuleCreatePage.getLearningModuleButton().click()
        ModuleCreatePage.getPublishButton().click()
        ModuleCreatePage.getconfirmPublishPopup().click()
    
        //Assert Message
        cy.contains("Title must be filled, Estimated Minutes must be filled, and Estimated Minutes must be greater than or equal to 0").should('be.visible')
    
      })

    


      it('Verify User will be able to pusblish a  module When all required fields are filled (title/DurationinMinites)', () => {
    
        ModuleCreatePage.getCreateAModuleMenuButton().click({ force: true })
        ModuleCreatePage.getLearningModuleButton().click()
       
       module=Helper.getGeneratedModuleTitle()
   
        
        ModuleCreatePage.getModuleTitleField().type(module)
        ModuleCreatePage.setDurationInMiniuteSlideBar()
    
        cy.wait(1000)
        ModuleCreatePage.getPublishButton().click()
        ModuleCreatePage.getconfirmPublishPopup().click()
        cy.contains(module).should('be.visible')
    
      })
 // More tests related to this page can be added in the future if needed
})