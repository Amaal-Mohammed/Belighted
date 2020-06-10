export default{
    getMyModuleMenuBarbutton(){
      return  cy.get('li[data-purpose="go_to_my_modules_link"]')  
    },
    
    getLastCreatedModule(){
        return cy.get('ul[class="dashboard__courses cards"] li:first').next().find('a[data-purpose="edit_link"]')
    }
}