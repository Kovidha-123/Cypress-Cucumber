Feature: Create Invitation

Scenario: Create the Invitation by locating the address with Indian address
# Given Login into the application
When create the Invitation with locate address-Indian address
Then Invitation should be created

Scenario: Create the Invitation by locating the address with US address

When created the Invitation with locate address-US address
Then Invitation should be created

Scenario: Create the Invitation with Indian address Manually

When created the Invitation with adding address manually-Indian address
Then Invitation should be created

Scenario: Create the Invitation with US address Manually

When created the Invitation with adding address manually-US address
Then Invitation should be created


Scenario: Create the Invitation by selecting all the radio buttons

When created the Invitation by selecting all the radio buttons
Then Invitation should be created


Scenario: Create the Invitation by unselecting all the radio buttons

When created the Invitation by unselecting all the radio buttons
Then Invitation should be created

Scenario: User should not able to Create the Invitation without providing any data in the all the fields

When not providing any data and click on Save
Then Invitation should be not be created


Scenario: User should not able to Create the Invitation without providing all the data in the fields of Add address manually

When not providing any data in add address manually and click on Save
Then Invitation should be not be created

Scenario: User should not able to Create the Invitation without providing address

When not providing address and click on Save
Then Invitation should be not be created


Scenario: Create the Invitation with personalize Event card.
# Given Login into the application
When create the Invitation with personalize Event card
Then Invitation should be created


Scenario: User should able to create RSVP card from the Featured Cards.
# Given Login into the application
Given Select any Featured cards
When create the Invitation with personalize RSVP card
Then Invitation should be created


Scenario: User should able to create RSVP card from the Popular Cards.
# Given Login into the application
Given Select any Popular card
When create the Invitation with personalize RSVP card


Scenario: User should able to create the Invitation when data in card is edited.
# Given Login into the application
When create the Invitation with edited card data
Then Invitation should be created


Scenario: User should able to create Event card from the Featured Cards.
Given Select any Featured cards
When create the Event card with personalize Event card option
Then Event card should be created successfully


Scenario: User should able to create Event card from the Popular Cards.
Given Select any Popular card
When create the Event card with personalize Event card option from Popular Cards
Then Event card should be created successfully


Scenario: User should able to create the invitation from Do it yourself.
Given Select any Do It Yourself card
When create the Event card from Do it yourself option
Then Event card should be created successfully

Scenario: User should able to create the invitation from Do it yourself- Landscape.
Given Select any Do It Yourself Landscape card
When create the Event card from Do it yourself option Landscape
Then Event card should be created successfully