export default{
    getEmailTitleField(){
        return cy.get('input[data-purpose="email_title_input"]')
    },
    getSendEmail(){
        return cy.get('button[data-purpose="send_email_button"]')
    }
}