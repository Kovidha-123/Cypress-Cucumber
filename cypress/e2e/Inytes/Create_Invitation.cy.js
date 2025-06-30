import {Given, When, Then, Before} from "cypress-cucumber-preprocessor/steps";
import CreateCard from "../../POM/Create";
beforeEach(() => {

    // cy.mockReCaptcha();

    cy.login("hemanialaparthi@gmail.com", "IamTesting")

    Cypress.on('uncaught:exception', (err, runnable) => {
      // Return false to prevent Cypress from failing the test on uncaught exceptions
      return false;

      cy.intercept('POST', 'https://r.stripe.com/0', {
        statusCode: 200,
        body: { success: true }
      }).as('stripeRequest');
    });
    
  });
 
  let testdata;
  before(() => {
    cy.fixture('testData').then((data) => {
      testdata = data;  // Store the fixture data globally for access in steps
    });
  });

When("create the Invitation with locate address-Indian address", ()=>
{
        const createdata = testdata.Create;
        const create = new CreateCard()
        create.categoryselect(createdata.category)
        create.createInvite(createdata.title, createdata.phoneNo, createdata.venue, createdata.location, createdata.mesg, createdata.regionalmesg)
 })

Then("Invitation should be created", ()=>
{
    cy.get('#invitation-ready').should('contain.text', 'All set. Your invitation ready to send.')
})

When("created the Invitation with locate address-US address", ()=>
  {
          const createdata = testdata.CreateUS;
          const create = new CreateCard()
          create.categoryselect(createdata.category)
          create.createInvite(createdata.title, createdata.phoneNo, createdata.venue, createdata.USlocation, createdata.mesg, createdata.regionalmesg)
   })

When("created the Invitation with adding address manually-Indian address", ()=>
   {
            const createdata = testdata.Create;
            const Cmanually = testdata.Manual_Location;
            const create = new CreateCard()
            create.categoryselect(createdata.category)
            create.createInviteManually(createdata.title, createdata.phoneNo, createdata.venue, Cmanually.address, Cmanually.city, Cmanually.state, Cmanually.zip, Cmanually.liveurl, createdata.mesg, createdata.regionalmesg)
    }) 

When("created the Invitation with adding address manually-US address", ()=>
{
      const createdata = testdata.Create;
      const Cmanually = testdata.Manual_US_Location;
      const create = new CreateCard()
      create.categoryselect(createdata.category)
      create.createInviteManually(createdata.title, createdata.phoneNo, createdata.venue, Cmanually.address, Cmanually.city, Cmanually.state, Cmanually.zip, Cmanually.liveurl, createdata.mesg, createdata.regionalmesg)
  
})

When("created the Invitation by selecting all the radio buttons", ()=>
{
    const createdata = testdata.Create;
    const create = new CreateCard()
    create.categoryselect(createdata.category)
    create.selectAllradiobuttons(createdata.title, createdata.phoneNo, createdata.venue, createdata.location, createdata.mesg, createdata.regionalmesg)
})

When("created the Invitation by unselecting all the radio buttons", ()=>
  {
      const createdata = testdata.Create;
      const create = new CreateCard()
      create.categoryselect(createdata.category)
      create.unselectAllradiobuttons(createdata.title, createdata.phoneNo, createdata.venue, createdata.location, createdata.mesg, createdata.regionalmesg)
  })

When("not providing any data and click on Save", ()=>
{
      const createdata = testdata.Create;
      const create = new CreateCard()
      create.categoryselect(createdata.category)
      create.createInvitewithoutanydata()
})

Then("Invitation should be not be created", ()=>
{
    cy.get('#ui_notifIt').should('contain', "To save the invitation, please fill the event address on the Locate address/Add address Manually section.")
})

When("not providing any data in add address manually and click on Save", ()=>
{
    const createdata = testdata.Create;
    const create = new CreateCard()
    create.categoryselect(createdata.category)
    create.createInvitewithoutManualaddressdata(createdata.title, createdata.phoneNo, createdata.venue, createdata.mesg, createdata.regionalmesg)
})

When("not providing address and click on Save", ()=>
  {
      const createdata = testdata.Create;
      const create = new CreateCard()
      create.categoryselect(createdata.category)
      create.createInvitewithoutaddress(createdata.title, createdata.phoneNo, createdata.venue, createdata.mesg, createdata.regionalmesg)
  })

When("create the Invitation with personalize Event card", ()=>
{
      const createdata = testdata.Create;
      const create = new CreateCard()
      create.categoryselect(createdata.category)
      create.createInviteforEventCard(createdata.title)

})

Given("Select any Featured cards", ()=>
{
      const createdata = testdata.Create;
      const create = new CreateCard()
      create.featuredCards()
})
When("create the Invitation with personalize RSVP card", ()=>
  {
          const createdata = testdata.CreateUS;
          const create = new CreateCard()
          create.categoryselect(createdata.category)
          create.createInvite(createdata.title, createdata.phoneNo, createdata.venue, createdata.USlocation, createdata.mesg, createdata.regionalmesg)
   })

Given("Select any Popular card", ()=>
{
      const createdata = testdata.Create;
      const create = new CreateCard()
      create.popularCards()
})

When("create the Invitation with edited card data", ()=>
{
      const editedData = testdata.EditedCreate;
      const create = new CreateCard()
      create.categoryselect(editedData.category)
      create.createInviteWithEditedData(
            editedData.initialTitle, 
            editedData.editedTitle, 
            editedData.initialPhoneNo, 
            editedData.editedPhoneNo, 
            editedData.initialVenue, 
            editedData.editedVenue, 
            editedData.location, 
            editedData.mesg, 
            editedData.regionalmesg
      )
})

When("create the Event card with personalize Event card option", ()=>
{
    const createdata = testdata.Create;
    const create = new CreateCard()
    create.createEventCard(createdata.title, true)
})

Then("Event card should be created successfully", ()=>
{
    cy.get('#downloadGreeting', { timeout: 15000 }).should('be.visible')
})

When("create the Event card with personalize Event card option from Popular Cards", ()=>
{
    const createdata = testdata.Create;
    const create = new CreateCard()
    create.createEventCard(createdata.title)
})

Given("Select any Do It Yourself card", ()=>
{
    const create = new CreateCard()
    create.selectDoItYourself()
})

Given("Select any Do It Yourself Landscape card", ()=>
{
    const create = new CreateCard()
    create.selectDoItYourselfLandscape()
})

When("create the Event card from Do it yourself option", ()=>
{
    const createdata = testdata.Create;
    const create = new CreateCard()
    create.createEventCard(createdata.title, true)
})

When("create the Event card from Do it yourself option Landscape", ()=>
{
    const createdata = testdata.Create;
    const create = new CreateCard()
    create.createEventCard(createdata.title, true)
})


