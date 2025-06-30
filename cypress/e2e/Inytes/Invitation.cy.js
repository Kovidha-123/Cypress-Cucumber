import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import InvitationPage from "../../POM/Invitationspage";
import selectCard from "../../POM/SelectCard";
import Login from "../../POM/Login";

Given("Inytes url", () =>{

    cy.visit("https://dev.inytes.com/")
})

When("Click on Create Invitation", () =>{
  
    cy.contains("Create Invitation").click()

})

Then("Page should nagivate to Invitations page and view all cards.", ()=>{
    cy.url().should('include', '/invitations')  //whether navigating to Invitations page or not
    
})

Given("Invitations page", () =>{
    
    const Invite = new InvitationPage()
    Invite.Invitation() 
})
When("select a card and click on Personalize", () =>{
    const select = new selectCard()
    select.category()
    select.card()
})
Then("Page should nagivate to Login page", () =>{
    cy.url().should('include', '/login/')
})

Given("Login page", ()=>{

    cy.visit('https://dev.inytes.com/login/') 
})
When("valid credentails is provided", ()=>{  
    
    cy.login("hemanialaparthi@gmail.com", "IamTesting")
    
})
Then("should able to Login", ()=>{
    cy.wait(3000)
    // cy.url().should('include', 'https://www.inytes.com/') 
    const Invite = new InvitationPage()
    Invite.Invitation() 
    const select = new selectCard()
    select.category()
    select.card()
})


