export default{
   
  getCreateTrainingMenuButton(){
      return cy.get('button[data-purpose="create_new_training_button"]').invoke('show')
  },
  getPublishButton(){
    return cy.contains("Publish")
},
getconfirmPublishPopup(){
  return  cy.get('.swal2-confirm')
},
getTrainingTitleField(){
    return cy.get('input[data-purpose="title_input"]')
},
getOPenCoverPickerButton(){
    return cy.get('button[data-purpose="open_cover_picker_button"]')
},
getCover(){
    return cy.get('ul[data-purpose="training_covers_picker"]>li').first()
},
getNextStepButton(){
    return cy.contains('Next step')
},
getLearningModuleButton(){
    return cy.get('img[alt="Learning"]')
},
getSearch(){
    return  cy.get('input[data-purpose="search_input"]')
},
getAddbutton(){
    return  cy.get('.search-result-list__item > .button > .material-icons').first()
},
getSubmitButton(){
    return cy.get('button[data-purpose="validate_button"]')
},
getParticiplantsTab(){
    return  cy.get('a[data-purpose="participants_tab_link"]')
},
getAddParticipantsButton(){
    return  cy.get('button[data-purpose="add_participant_button"]')
},
getAddallButton(){
    return cy.contains("Add all")
},
getSendEmailButton(){
    return cy.get('button[data-purpose="open_send_email_modal_button"]')
}

 
}