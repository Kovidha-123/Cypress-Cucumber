class InvitationPage
{
    Invitation()
    {
        cy.visit("https://dev.inytes.com/")
        cy.contains("Create Invitation").click()
        
    }
}
export default InvitationPage;