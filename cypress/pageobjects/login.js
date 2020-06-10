export default{

getEmail(){
    return cy.get('input[id="user_login"]')
},
getPassword(){
    return  cy.get('input[id="user_password"]')
},
getSubmit(){
    return cy.get('input[name="commit"]')
},
getEnglishLanguagebutton(){
    return cy.contains("English")
}

}