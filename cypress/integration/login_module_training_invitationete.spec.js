
import ModuleCreatePage from '../pageobjects/createmodule'
import MyModulePage from '../pageobjects/mymodule'
import TrainingCreatePage from '../pageobjects/createtraining'
import MyTraining from '../pageobjects/mytrainings'
import Email from '../pageobjects/mail'
import LoginPage from '../pageobjects/login'
import Helper from '../util/helpers'
context('End to end Test from Creating module then Training and finally Inviting Partcipants', () => {
  let module = ""
  let training = ""
  let cookkiee = ""
  const codeBlock  ='<iframe src="https://player.vimeo.com/video/124780139" width="640" height="269" frameborder="0" allow="autoplay; fullscreen" allowfullscreen>' + ' </iframe>' + '<p>' + '<a href="https://vimeo.com/124780139"Ascension</a>' + 'from' + '<a href="https://vimeo.com/ascensionlefilm"Ascension Le Film</a>' + 'on' + '<a href="https://vimeo.com"Vimeo</a>' + '.' + '</p> '
  before(() => {
    cy.visit("/")

    LoginPage.getEnglishLanguagebutton().click({ force: true })
   
    cy.fixture("login.json", "binary").then(data => {
      cy.login(data.email, data.password)
    })
    Helper.getCookieDisclaimerButton().click()
   // cy.get('button[data-purpose="cookies_disclaimer_button"]').click({ force: true })
    cy.getCookie('_session_id').then((mcookiee) => {
      // save cookie until we need it
      cookkiee = mcookiee.value
    })
  })

  beforeEach(() => {
    cy.setCookie('_session_id', cookkiee)
    cy.on('uncaught:exception', (err) => {
      expect(err.message).to.include('Ignoring error for now');
      return false;
    })

  })
  afterEach(() => {
    cy.clearCookies()
  })

  it('Verify that User is logged in successully', () => {

    MyTraining.getProfileDropdownName().contains("Michael Albert").should('be.exist')


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
   // module = "Module" + (Math.random() * 1000)
   module=Helper.getGeneratedModuleTitle()
    //Save Created Module Name into file to be used later
    cy.writeFile('module.txt', module)
    ModuleCreatePage.getModuleTitleField().type(module)
    ModuleCreatePage.setDurationInMiniuteSlideBar()

    cy.wait(1000)
    ModuleCreatePage.getPublishButton().click()
    ModuleCreatePage.getconfirmPublishPopup().click()
    cy.contains(module).should('be.visible')

  })

  it('Verify User will be able to Update the created Module By adding Card and External content', () => {
    MyModulePage.getMyModuleMenuBarbutton().click()
    MyModulePage.getLastCreatedModule().click()
    ModuleCreatePage.getCard().click()
    cy.on('uncaught:exception', (err) => {
      expect(err.message).to.include('Ignoring error for now');
      return false;
    })
    cy.fixture("module.json", "binary").then(data => {
      cy.wait(1000)
      ModuleCreatePage.getModuleTitleField().type(data.CardTitle)
    })
   
   
  /*
   const fileName = 'logo.jpg'
      cy.fixture(fileName).then(fileContent => {
       cy.get('input[data-purpose="file_input"]').attachFile(fileName);
       //cy.get('input[type="file"]').attachFile({ fileContent, fileName, mimeType: 'application/json' });
       
        });
  
  */

 
  // ModuleCreatePage.getSaveCard().click()
  
 
    ModuleCreatePage.getExternalContent().click()
    cy.wait(1000)
    cy.fixture("module.json", "binary").then(data => {
      ModuleCreatePage.getModuleTitleField().type(data.External)
    })

    ModuleCreatePage.getEmbedButton().click({ force: true })

 
    ModuleCreatePage.getEmbedTxtArea().then(elem => {
      elem.val(codeBlock);
      
  });
  Helper.getCookieDisclaimerButton().click()
  
  
  // MyTraining.getMyTrainingMenuBarButton().click()
 
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

  it('Verify User Can publish Training when all Reuired fields are filled (title)',()=>{
   
   training=Helper.getGeneratedTrainingTitle()
    cy.writeFile('training.txt', training)
    TrainingCreatePage.getTrainingTitleField().type(training)

    TrainingCreatePage.getOPenCoverPickerButton().click()

    TrainingCreatePage.getCover().click()

    TrainingCreatePage.getNextStepButton().click()

    TrainingCreatePage.getLearningModuleButton().click()
    cy.readFile('module.txt').then(text => {
      cy.get('input[data-purpose="search_input"]').type(text)

    });
    TrainingCreatePage.getAddbutton().click()
    TrainingCreatePage.getSubmitButton().click()

    TrainingCreatePage.getNextStepButton().click()
    TrainingCreatePage.getNextStepButton().click()

    TrainingCreatePage.getPublishButton().click()
    TrainingCreatePage.getconfirmPublishPopup().click()
  

  })
  it('Verify User Can invite participants to the created Training', () => {

    MyTraining.getMyTrainingMenuBarButton().click()

    cy.readFile('training.txt').then(text => {
      cy.get('input[data-purpose="filter_query_input"]').type(text)
    })

    cy.wait(1000)
    MyTraining.getEyeIcon().click()
    TrainingCreatePage.getParticiplantsTab().click()
    TrainingCreatePage.getAddParticipantsButton().click()
    cy.fixture("InviteParticipants.json", "binary").then(data => {
      TrainingCreatePage.getSearch().type(data.participantname)
    })
    

    cy.wait(1000)
    TrainingCreatePage.getAddallButton().click()

    TrainingCreatePage.getSubmitButton().click()
    TrainingCreatePage.getSendEmailButton().click()
    cy.fixture("InviteParticipants.json", "binary").then(data => {
      Email.getEmailTitleField().type(data.Invitationtitle)
    })
    

    Email.getSendEmail().click()


  })

})