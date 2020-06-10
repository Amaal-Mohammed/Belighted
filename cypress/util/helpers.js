export default{
    getGeneratedModuleTitle(){
        return "Module" + (Math.random() * 1000)
    },
    getGeneratedTrainingTitle(){
        return "training" + (Math.random() * 1000)
    },
    getCookieDisclaimerButton(){
        return cy.get('button[data-purpose="cookies_disclaimer_button"]')
    }
}