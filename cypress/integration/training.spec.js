import ModuleCreatePage from '../pageobjects/createmodule'
import MyModulePage from '../pageobjects/mymodule'
import TrainingCreatePage from '../pageobjects/createtraining'
import MyTraining from '../pageobjects/mytrainings'
import Email from '../pageobjects/mail'
import LoginPage from '../pageobjects/login'
import Helper from '../util/helpers'

context('Testing  scenarios related to createtraining  Page ', () => {
    let  training=""
    beforeEach(() => {
        cy.visit("/")
  
        LoginPage.getEnglishLanguagebutton().click({ force: true })
        cy.fixture("login.json", "binary").then(data => {
            cy.login(data.email, data.password)
          })
  
    })
    afterEach(() => {
      cy.clearCookies()
    })
  
    
  
    
      it('Verify User Can publish Training when all Reuired fields are filled (title)',()=>{
        cy.on('uncaught:exception', (err) => {
          expect(err.message).to.include('Ignoring error for now');
          return false;
        })
      TrainingCreatePage.getCreateTrainingMenuButton().click({ force: true })
      training=Helper.getGeneratedTrainingTitle()
       
        TrainingCreatePage.getTrainingTitleField().type(training)
    
        TrainingCreatePage.getOPenCoverPickerButton().click()
    
        TrainingCreatePage.getCover().click()
    
        TrainingCreatePage.getNextStepButton().click({ force: true })
    
        TrainingCreatePage.getLearningModuleButton().click({force:true})
        cy.readFile('module.txt').then(text => {
          cy.get('input[data-purpose="search_input"]').type(text)
    
        });
        TrainingCreatePage.getAddbutton().click()
        TrainingCreatePage.getSubmitButton().click()
    
        TrainingCreatePage.getNextStepButton().click({ force: true })
        TrainingCreatePage.getNextStepButton().click({ force: true })
    
        TrainingCreatePage.getPublishButton().click()
        TrainingCreatePage.getconfirmPublishPopup().click()
      
    
      })



      it('Verify User Can not  publish a Training with empty title', () => {

    
        cy.wait(1000)
    
    
       MyTraining.getMyTrainingMenuBarButton().click()
        TrainingCreatePage.getCreateTrainingMenuButton().click({ force: true })
    
        cy.wait(1000)
        Helper.getCookieDisclaimerButton().click()
       
        TrainingCreatePage.getPublishButton().click()
    
        TrainingCreatePage.getconfirmPublishPopup().click()
    
        //Assert 
        cy.contains("Title must be filled, Training Cover must be filled, Training Modules must be filled, and Training Modules size cannot be less than 1").should('be.visible')
       
    
      })
      // More tests related to this page can be added in the future if needed

})