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
@godaddy
Feature: Test GoDaddy
  I have to test Godaddy site

 
  Scenario Outline: Launch browser 
    Given Open this URL - "<url>"
    And Maximize or set size of browser window.
    When Get Title of page and validate it with expected value.
    And  Get URL of current page and validate it with expected value.
    And Get Page source of web page.
     And Validate that page title is present in page source.
    And check more outcomes

 
    Examples: 
       | url |
       |https://www.godaddy.com/|
         
