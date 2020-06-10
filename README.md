# Belighted
To run the test :
1. Make Sure to delete mochawesome.json and also to all files in the Folder of mochawesome-report (except asset folder) by executing 
rm mochawesome-report/ For Linux
2. npx Cypress run
3. npx mochawesome-merge "./mochawesome-report/*.json" > mochawesome.json
4. npx marge mochawesome.json
5. Open mochawesome-report 
6. Open mochawesome.html 

Enviroment Details :
* Cypress 3.0.8 was used
* Browser : chrome 70
* OS :Linux Ubunto 18

Release notes:
* login_module_training_invitationete.spec: Test#5 will fail because there Application yields patrial english and partial french  message when user picks english language and loggs in and  publish training with no title
* login_module_training_invitationete.spec: Test# 4 : Performance issue in the application when user tries upload an image in the card (it takes more than 1 min , was executed both Manual and autimation)
* All and all the system has lots of Localization issues

Notes:
* Tests include both ete path and also have tests that can be scalable in teh futhure if if tests are needed for a specific page(Please Check the testplan "BelightedTestPlan")
* Report of the testing tool is in folder mochawesome-report/mochawesome.html
