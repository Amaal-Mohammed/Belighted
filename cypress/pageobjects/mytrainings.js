export default{
    getMyTrainingMenuBarButton(){
        return cy.get('li[data-purpose="go_to_my_trainings_link"]')
    },
    getEyeIcon(){
        return cy.get('div[class="courses-item__actions action-icons"]>a')
    },
    getSerachTraining(){
        return cy.get('input[data-purpose="filter_query_input"]')
    },
    getProfileDropdownName(){
        return  cy.get('span[class="profile-dropdown-name"]')
    }
}