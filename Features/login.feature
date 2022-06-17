#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@reg
Feature: To access the forgotten functionality
  I wan to access the forgotten password functionality
  Scenario: To check the forgotten password functionality
    Given user is in the login page
    And user must guve only the input of username
    And User should click the forgotten password link
    And User must redirected to forgotten password link  
    Then User shlould type the email
    And and click recover button

  @reg
  Scenario Outline: validate the scenerio
    Given the users input in the username box <name>
    When I check for the <value> in step
    Then I verify the <status> in step

    Examples: 
      | name  | value | status  | USERNAME  |EMAIL            |
      | name1 |     5 | success |  SURYA    |suryamm@gmail.com|
      | name2 |     7 | Fail    |           |                 |
