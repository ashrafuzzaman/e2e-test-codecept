Feature: Login to CMP

  # Background: Login
  #   Given I am loged in as "admin@newscred.com" with password "qwe90qwe"

  Scenario: Create Campaign
    Given I am loged in as "**@newscred.com" with password "****"
    Then Switch organization to "Multi-Org Parent"
    # Then Click on the New button on the header and click "Campaign"
    # Then Write "Dev camp" into textbox with placeholder "Add a Campaign Name"
    # Then Write "Campaign for test runner" into textbox with placeholder "Add details about your campaign..."
    # Then Write "Aug 5, 2019" into textbox with placeholder "Select start date"
    # Then Write "Aug 7, 2019" into textbox with placeholder "Select end date"
    # Then Select "#CE515B" as Campaign Color
    # Then Click on "Create Campaign"
    Then open "http://cmp-localdev.newscred.com:3000/cloud/campaign/5e0d9111615bdd25cda117cd"
    Then Click on "write a brief"
    Then Fill in richtext editor with "Sample brief"
    Then Click on "Save"
    Then Click on the campaign comment icon
    Then Enter "Sample comment @ash" into comment box
    Then Click on "Ashrafuzzaman"
    Then Click on the attchment icon
    Then Click on "Comment"
