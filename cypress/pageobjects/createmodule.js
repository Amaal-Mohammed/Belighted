export default{
    getCreateAModuleMenuButton(){
       return cy.get('a[data-purpose="create_new_protomodule_button"]').invoke('show')
    },  
    getLearningModuleButton(){
        return cy.get('img[alt="Learning module"]')
    },
    getPublishButton(){
        return cy.contains("Publish")
    },
    getconfirmPublishPopup(){
      return  cy.get('.swal2-confirm')
    },
    getModuleTitleField(){
        return cy.get('input[data-purpose="title_input"]')
    },
    getCard(){
        return cy.contains("Card")
    },
    getSaveCard(){
        return  cy.get('button[data-purpose="save_file_button"]')
    },
    getExternalContent(){
        return cy.contains("External Content")
    },
    getEmbedButton(){
        return cy.get('input[value="embed"]')
    },
    getEmbedTxtArea(){
        return cy.get('textarea[name="embed"]')
    },
    setDurationInMiniuteSlideBar(){
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  cy.get('input[type="range"]').then(($range) => {
    // get the DOM node
    const range = $range[0];
    // set the value manually
    nativeInputValueSetter.call(range, 15);
    // now dispatch the event
    range.dispatchEvent(new Event('change', { value: 15, bubbles: true }));
  });
    }
    
}