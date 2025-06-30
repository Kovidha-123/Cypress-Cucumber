class CreateCard
{
    
    categoryselect(category)
   {
      cy.visit("https://dev.inytes.com")
      

      cy.contains('Create Invitation').click()

      cy.url().should('include', '/invitations')

      cy.contains('a', category).click({force:true});
      cy.wait(4000)
      cy.get("#mix-up-list").find('.cd-item').eq(0).click()
   }

   featuredCards()
   {
    cy.visit("https://dev.inytes.com")
      

      cy.get('.featured').should('contain', "Featured Cards")

      cy.get('.cd-item').eq(1).find('a.cd-trigger').click();
      cy.wait(4000)
   }
   popularCards()
   {
    cy.visit("https://dev.inytes.com")
      

      cy.get('.popular-section').should('contain', "Popular Cards")

      cy.get('.popular-section').find('.cd-item').eq(0).within(() => {
      cy.get('.cd-trigger-popular').click();
      cy.wait(4000)
    });
      
   }
   createInvite(title, phoneNo, venue, location, mesg, regionalmesg)
   {
     
     cy.contains('a', 'Personalize RSVP').should('exist').click()

      cy.get('#nextDetails').click()
      cy.wait(10000)
      cy.get("#vTitle", { timeout: 15000 }).should('be.visible').type(title)
      cy.get('#vPhone').type(phoneNo)
      cy.get('#vLocationName').type(venue)
      cy.get('#vFA').type(location).wait(4000)
      cy.get('.pac-item').first().click(); // Click the first suggestion

      cy.get('#nextSettings').click()

      cy.get('#addMessage').click({ force: true })

      cy.get('#tMessageieditor').type(mesg)
      
      cy.get('#addLangMessage').click({ force: true })

      cy.get('#tOtherMessage').type(regionalmesg).type('{enter}')

      cy.get('#create-preview-card').click()

      cy.get('#addGuests').scrollIntoView()

      cy.wait(1000)
      
   }
   createInviteManually(title, phoneNo, venue, address, city, state, zip, liveurl, mesg, regionalmesg)
   {
     
     cy.contains('a', 'Personalize RSVP').should('exist').click()
      cy.get('#nextDetails').click()
      cy.wait(10000)
      cy.get("#vTitle", { timeout: 15000 }).should('be.visible').type(title)
      cy.get('#vPhone').type(phoneNo)
      cy.get('#vLocationName').type(venue)
      cy.get('#manual_addr_tab').click() //Click on Add Address Manually
      cy.get('#street').type(address)
      cy.get('#city').type(city)
      cy.get('#state').type(state)
      cy.get('#zip').type(zip)
      cy.get('#live_location').type(liveurl)
      cy.get('#nextSettings').click()
      cy.get('#addMessage').click({ force: true })
      cy.get('#tMessageieditor').type(mesg)      
      cy.get('#addLangMessage').click({ force: true })
      cy.get('#tOtherMessage').type(regionalmesg).type('{enter}')
      cy.get('#create-preview-card').click()
      cy.get('#addGuests').scrollIntoView()
      cy.wait(1000)
      
   }
   selectAllradiobuttons(title, phoneNo, venue, location, mesg, regionalmesg, guesttype)
   {
      
      cy.contains('a', 'Personalize RSVP').should('exist').click({force:true})
      cy.get('#nextDetails').click()
      cy.wait(10000)
      cy.get("#vTitle", { timeout: 15000 }).should('be.visible').type(title)
      cy.get('#vPhone').type(phoneNo)
      cy.get('#vLocationName').type(venue)
      cy.get('#vFA').type(location).wait(4000)
      cy.get('.pac-item').first().click(); // Click the first suggestion
      cy.get('#nextSettings').click()
      cy.get('#addMessage').click({ force: true })
      cy.get('#tMessageieditor').type(mesg)  
      cy.get('#addLangMessage').click({ force: true })
      cy.get('#tOtherMessage').type(regionalmesg).type('{enter}')
      cy.get('#iDisableRSVP').click({force:true})
      cy.get('#eHideList').click({force:true})
      cy.get('#iCaptureGuestsPhone').click({force:true})
      cy.get('#guestClassifyinput').click({force:true})
      cy.get('#iadultOnly').check()
      cy.get('#create-preview-card').click()
      cy.get('#addGuests').scrollIntoView()
      cy.wait(1000)
   }
   unselectAllradiobuttons(title, phoneNo, venue, location, mesg, regionalmesg, guesttype)
   {
      
      cy.contains('a', 'Personalize RSVP').should('exist').click({force:true})
      cy.get('#nextDetails').click()
      cy.wait(10000)
      cy.get("#vTitle", { timeout: 15000 }).should('be.visible').type(title)
      cy.get('#vPhone').type(phoneNo)
      cy.get('#vLocationName').type(venue)
      cy.get('#vFA').type(location).wait(4000)
      cy.get('.pac-item').first().click(); // Click the first suggestion
      cy.get('#nextSettings').click()
      cy.get('#addMessage').click({ force: true })
      cy.get('#tMessageieditor').type(mesg)  
      cy.get('#addLangMessage').click({ force: true })
      cy.get('#tOtherMessage').type(regionalmesg).type('{enter}')
      cy.get('#eNotifyCustomer').click({force:true})
      cy.get('#eFood').click({force:true})
      cy.get('#eAllowLinkReply').click({force:true})
      cy.get('#bSendGift_value').click({force:true})
      cy.get('#create-preview-card').click()
      cy.get('#addGuests').scrollIntoView()
      cy.wait(1000)
   }

    createInvitewithoutanydata()
    {
      
      cy.contains('a', 'Personalize RSVP').should('exist').click({force:true})
      cy.get('#nextDetails').click()
      cy.get('#nextSettings').click()
      cy.get('#create-preview-card').click()
      cy.get('#addGuests').scrollIntoView()
      cy.wait(1000)

    }
    createInvitewithoutManualaddressdata(title, phoneNo, venue, mesg, regionalmesg)
    {

      cy.contains('a', 'Personalize RSVP').should('exist').click()
      cy.get('#nextDetails').click()
      cy.wait(10000)
      cy.get("#vTitle", { timeout: 15000 }).should('be.visible').type(title)
      cy.get('#vPhone').type(phoneNo)
      cy.get('#vLocationName').type(venue)
      cy.get('#manual_addr_tab').click() //Click on Add Address Manually
      cy.get('#nextSettings').click()
      cy.get('#addMessage').click({ force: true })
      cy.get('#tMessageieditor').type(mesg)      
      cy.get('#addLangMessage').click({ force: true })
      cy.get('#tOtherMessage').type(regionalmesg).type('{enter}')
      cy.get('#create-preview-card').click()
      cy.get('#addGuests').scrollIntoView()
      cy.wait(1000)

    }

    createInvitewithoutaddress(title, phoneNo, venue, mesg, regionalmesg)
    {
      
      cy.contains('a', 'Personalize RSVP').should('exist').click()
      cy.get('#nextDetails').click()
      cy.wait(10000)
      cy.get("#vTitle", { timeout: 15000 }).should('be.visible').type(title)
      cy.get('#vPhone').type(phoneNo)
      cy.get('#vLocationName').type(venue)
      cy.get('#nextSettings').click()
      cy.get('#addMessage').click({ force: true })
      cy.get('#tMessageieditor').type(mesg)      
      cy.get('#addLangMessage').click({ force: true })
      cy.get('#tOtherMessage').type(regionalmesg).type('{enter}')
      cy.get('#create-preview-card').click()
      cy.get('#addGuests').scrollIntoView()
      cy.wait(1000)

    }

    AftercreateclickonAddGuest(title, phoneNo, venue, location, mesg, regionalmesg)
   {
      
     
     cy.contains('a', 'Personalize RSVP').should('exist').click()

      cy.get('#nextDetails').click()
      cy.wait(10000)
      cy.get("#vTitle", { timeout: 15000 }).should('be.visible').type(title)
      cy.get('[id=vPhone]').type(phoneNo)
      cy.get('[id=vLocationName]').type(venue)
      cy.get('[id=vFA]').type(location).wait(4000)
      cy.get('.pac-item').first().click(); // Click the first suggestion

      cy.get('[id=nextSettings]').click()

      cy.get('[id=addMessage]').click({ force: true })

      cy.get('[id=tMessageieditor]').type(mesg)
      
      cy.get('[id=addLangMessage]').click({ force: true })

      cy.get('[id=tOtherMessage]').type(regionalmesg).type('{enter}')

      cy.get("[id='create-preview-card']").click()

      cy.get('[id=addGuests]').scrollIntoView()

      cy.wait(1000)

      cy.get('[id=addGuests]').click({force:true})
      cy.wait(3000)
      cy.get('#upgrade-section-close').click()

      
   }

   NavigateToTrackTab()
    {

        //Click on Profile
          cy.get("#menu-profile-pic").click()

        //Click on the Invitation from the list
       cy.wait(2000)
        cy.get('.drop-menu').should('be.visible');

        cy.get('.menu-event-item').first().should('be.visible').click();
        cy.wait(6000)
        cy.get('body').then(($body) => {
          if ($body.find('div.row.row-full.upgrade-section').length > 0) {
            cy.get('#upgrade-section-close').should('be.visible'); // Optional: Verify it's visible
            cy.get('#upgrade-section-close').click({force:true}); // Click to close the popup
          }
        });
    }

    createInviteforEventCard(title)
    {
        // First select a card
        cy.get("#mix-up-list").find('.cd-item').eq(0).click({force: true})
        cy.wait(2000) // Wait for card to be selected
        
        // Wait for and click on Personalize Event Card button
        cy.get('a.customize-link1').should('be.visible').should('contain', 'Personalize Event').click({force: true})
        cy.wait(2000)
        
        // Handle the popup
        cy.get('.sweet-alert h2').should('have.text', 'Event Cards')
        cy.get('div.sweet-alert button.confirm').should('be.visible').click({force: true})
        cy.wait(2000)
        
        // Check if URL contains /create-invitation/
        cy.location('pathname', { timeout: 10000 }).should('include', '/create-invitation/')
        
        // Click Next Details button
        cy.get('#nextDetails').click()
        
        // Check if event title input exists and fill it
        cy.get("#vTitle1", { timeout: 15000 }).should('be.visible').type(title)
        
        // Click Save button
        cy.get('#saveGreeting').click()
        
        // Check if download button is present
        cy.get('#downloadGreeting').should('contain', 'Pay to Download')
    }

    createInviteWithEditedData(initialTitle, editedTitle, initialPhoneNo, editedPhoneNo, initialVenue, editedVenue, location, mesg, regionalmesg)
    {
      cy.contains('a', 'Personalize RSVP').should('exist').click()
      cy.get('#nextDetails').click()
      cy.wait(10000)
      
      // first, enter initial data
      cy.get("#vTitle", { timeout: 15000 }).should('be.visible').type(initialTitle)
      cy.get('#vPhone').type(initialPhoneNo)
      cy.get('#vLocationName').type(initialVenue)
      cy.get('#vFA').type(location).wait(4000)
      // click on the first suggestion
      cy.get('.pac-item').first().click();
      
      // now, edit the data
      cy.get("#vTitle").clear().type(editedTitle)
      cy.get('#vPhone').clear().type(editedPhoneNo)
      cy.get('#vLocationName').clear().type(editedVenue)
      
      cy.get('#nextSettings').click()
      cy.get('#addMessage').click({ force: true })
      cy.get('#tMessageieditor').type(mesg)
      cy.get('#addLangMessage').click({ force: true })
      cy.get('#tOtherMessage').type(regionalmesg).type('{enter}')
      cy.get('#create-preview-card').click()
      cy.get('#addGuests').scrollIntoView()
      cy.wait(1000)
    }

   selectDoItYourself()
   {
      cy.visit("https://dev.inytes.com/invitations")
      cy.get('#filter-menu').find('a[data-cat="upload"]').contains('Do It').click()
      cy.wait(3000)
      cy.get('a.cd-trigger[title="Upload Yours"]').first().click()
   }

   selectDoItYourselfLandscape()
   {
      cy.visit("https://dev.inytes.com/invitations")
      cy.get('#filter-menu').find('a[data-cat="upload"]').contains('Do It').click()
      cy.wait(3000)
      cy.get('a.cd-trigger[title="Upload Yours - Landscape"]').click()
   }

   createEventCard(title, requiresImageUpload = false)
   {
      cy.get('a.customize-link1').contains('Event').click({force: true})
      cy.wait(2000)
      
      cy.get('.sweet-alert h2').should('contain', 'Event')
      cy.get('div.sweet-alert button.confirm').click({force: true})
      cy.wait(3000)
      
      if (requiresImageUpload) {
         cy.get('input[type="file"]').selectFile('cypress/fixtures/test-image.png', { force: true })
         cy.wait(2000)
         cy.get('#cropButton').click({force: true})
         cy.wait(2000)
      }
      
      cy.get('#nextDetails').click()
      cy.get("#vTitle1", { timeout: 15000 }).type(title, {force: true})
      cy.get('#vHostName1').type('Test Host Name', {force: true})
      cy.get('#dCountry').select('INDIA', {force: true})
      cy.get('#dDate1').type('2025-12-31', {force: true})
      
      cy.get('#saveGreeting').click({force: true})
      cy.wait(9000)
   }



}
export default CreateCard;