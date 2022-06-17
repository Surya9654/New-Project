$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Godaddy1.feature");
formatter.feature({
  "name": "Test GoDaddy",
  "description": "  I have to test Godaddy site",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@godaddy"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Launch browser",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open this URL - \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Maximize or set size of browser window.",
  "keyword": "And "
});
formatter.step({
  "name": "Get Title of page and validate it with expected value.",
  "keyword": "When "
});
formatter.step({
  "name": "Get URL of current page and validate it with expected value.",
  "keyword": "And "
});
formatter.step({
  "name": "Get Page source of web page.",
  "keyword": "And "
});
formatter.step({
  "name": "Validate that page title is present in page source.",
  "keyword": "And "
});
formatter.step({
  "name": "check more outcomes",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url"
      ]
    },
    {
      "cells": [
        "https://www.godaddy.com/"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Launch browser",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@godaddy"
    }
  ]
});
formatter.step({
  "name": "Open this URL - \"https://www.godaddy.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Godaddyhooks.open_this_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Maximize or set size of browser window.",
  "keyword": "And "
});
formatter.match({
  "location": "Godaddyhooks.maximize_or_set_size_of_browser_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get Title of page and validate it with expected value.",
  "keyword": "When "
});
formatter.match({
  "location": "Godaddysteps.get_Title_of_page_and_validate_it_with_expected_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get URL of current page and validate it with expected value.",
  "keyword": "And "
});
formatter.match({
  "location": "Godaddysteps.get_URL_of_current_page_and_validate_it_with_expected_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get Page source of web page.",
  "keyword": "And "
});
formatter.match({
  "location": "Godaddysteps.get_Page_source_of_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate that page title is present in page source.",
  "keyword": "And "
});
formatter.match({
  "location": "Godaddysteps.validate_that_page_title_is_present_in_page_source()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check more outcomes",
  "keyword": "And "
});
formatter.match({
  "location": "Godaddysteps.check_more_outcomes()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:Features/Godaddy2.feature");
formatter.feature({
  "name": "Check features 2",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@godaddy"
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@godaddy"
    }
  ]
});
formatter.step({
  "name": "Maximize or set size of browser window.",
  "keyword": "And "
});
formatter.match({
  "location": "Godaddyhooks.maximize_or_set_size_of_browser_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "setimplicit wait",
  "keyword": "And "
});
formatter.match({
  "location": "Godaddysteps1.setimplicit_wait()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the first menu link, which is Domains. It will open up a sub-menu, click on the Domain Name Search link from the sub-menu.",
  "keyword": "And "
});
formatter.match({
  "location": "Godaddysteps1.click_on_the_first_menu_link_which_is_Domains_It_will_open_up_a_sub_menu_click_on_the_Domain_Name_Search_link_from_the_sub_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the value of title of Domain Name Search page using Selenium Webdrivers command in your script and print it.",
  "keyword": "And "
});
formatter.match({
  "location": "Godaddysteps1.get_the_value_of_title_of_Domain_Name_Search_page_using_Selenium_Webdrivers_command_in_your_script_and_print_it()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Well match value fetched with expected value, if its matched then proceed to next step either failed the test case.",
  "keyword": "And "
});
formatter.match({
  "location": "Godaddysteps1.well_match_value_fetched_with_expected_value_if_its_matched_then_proceed_to_next_step_either_failed_the_test_case()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that search box is present on the page and its enabled by using selenium commands.",
  "keyword": "And "
});
formatter.match({
  "location": "Godaddysteps1.verify_that_search_box_is_present_on_the_page_and_its_enabled_by_using_selenium_commands()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that Buy It button is available along with search box.",
  "keyword": "And "
});
formatter.match({
  "location": "Godaddysteps1.verify_that_Buy_It_button_is_available_along_with_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter some test value in the search box, like mydomain and click on Buy It button.",
  "keyword": "And "
});
formatter.match({
  "location": "Godaddysteps1.enter_some_test_value_in_the_search_box_like_mydomain_and_click_on_Buy_It_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "If domain is available then verify that Add to Cart button is present alongside domain name.",
  "keyword": "And "
});
formatter.match({
  "location": "Godaddysteps1.if_domain_is_available_then_verify_that_Add_to_Cart_button_is_present_alongside_domain_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that price of the domain is also displaying alongside domain name.",
  "keyword": "Then "
});
formatter.match({
  "location": "Godaddysteps1.verify_that_price_of_the_domain_is_also_displaying_alongside_domain_name()"
});
formatter.result({
  "status": "passed"
});
});