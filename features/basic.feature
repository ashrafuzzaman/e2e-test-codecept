Feature: Login to CMP

  Background: Login
    Given I am loged in as "admin@newscred.com" with password "qwe90qwe"

  Scenario: Create Campaign
    Then Switch organization to "Multi-Org Parent"
    Then Click on the New button on the header and click "Campaign"
    Then Write "Dev camp" into textbox with placeholder "Add a Campaign Name"
    Then Write "Campaign for test runner" into textbox with placeholder "Add details about your campaign..."
    Then Write "Aug 5, 2019" into textbox with placeholder "Select start date"
    Then Write "Aug 7, 2019" into textbox with placeholder "Select end date"
    Then Select "#99896A" from dropdown below "Campaign Color"
    Then Click on "Create Campaign"

  Scenario: Assert edit campaign
    Then Click on "Edit"
    Then Should see "Edit Campaign" modal
    Then Should see a text box with text "Dev camp"
    Then Should see a text box with text "Campaign for test runner"
    Then Should see a text box with text "Aug 5, 2019"
    Then Should see a text box with text "Aug 7, 2019"
    Then Click on "Cancel"
