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
Feature: Check features 2
  I want to use this template for my feature file
  Scenario: Title of your scenario
    And  Maximize or set size of browser window.
    And setimplicit wait
    And  Click on the first menu link, which is Domains. It will open up a sub-menu, click on the Domain Name Search link from the sub-menu.
    And  Get the value of title of Domain Name Search page using Selenium Webdrivers command in your script and print it.
		And  Well match value fetched with expected value, if its matched then proceed to next step either failed the test case.
		And  Verify that search box is present on the page and its enabled by using selenium commands.
    And  Verify that Buy It button is available along with search box.
    And  Enter some test value in the search box, like mydomain and click on Buy It button.
    And  If domain is available then verify that Add to Cart button is present alongside domain name.
 	  Then Verify that price of the domain is also displaying alongside domain name.

   
