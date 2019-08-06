Feature: Login to CMP
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system

  Scenario: login
    Given I am loged in as "admin@newscred.com" with password "qwe90qwe"
    Then Switch organization to "Multi-Org Parent"
