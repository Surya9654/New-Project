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
@sanity
Feature: To validate the Login functionality
Background: The user should launch the browser  
Given The user should launch the browser  
When Vlaidate the page that user is on right page
Scenario Outline: To vlaidate the login Functionality with valid Username and valid Password
When User should enter the "<firstname>" and "<lastname>"
And User Should Enter the  "<email>"
And User Should Enter the "<MobileNo>"
Then Close the browser


Examples:

| firstname | lastname | email                | MobileNo  |
| surya     |  M       | suryam9654@gmail.com | 9952112520|








