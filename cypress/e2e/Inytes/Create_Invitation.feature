Feature: Create Invitation
@focus
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