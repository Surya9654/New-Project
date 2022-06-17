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
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d102.0.5005.115)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SURYA-LAPTOP-GK\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 102.0.5005.115, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\surya\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51883}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1700edcf11a2ed53cb9422e3fb1ae74c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:326)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.isDisplayed(Unknown Source)\r\n\tat org.stepdefinition.Godaddysteps1.verify_that_search_box_is_present_on_the_page_and_its_enabled_by_using_selenium_commands(Godaddysteps1.java:41)\r\n\tat ✽.Verify that search box is present on the page and its enabled by using selenium commands.(file:Features/Godaddy2.feature:28)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Verify that Buy It button is available along with search box.",
  "keyword": "And "
});
formatter.match({
  "location": "Godaddysteps1.verify_that_Buy_It_button_is_available_along_with_search_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter some test value in the search box, like mydomain and click on Buy It button.",
  "keyword": "And "
});
formatter.match({
  "location": "Godaddysteps1.enter_some_test_value_in_the_search_box_like_mydomain_and_click_on_Buy_It_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "If domain is available then verify that Add to Cart button is present alongside domain name.",
  "keyword": "And "
});
formatter.match({
  "location": "Godaddysteps1.if_domain_is_available_then_verify_that_Add_to_Cart_button_is_present_alongside_domain_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that price of the domain is also displaying alongside domain name.",
  "keyword": "Then "
});
formatter.match({
  "location": "Godaddysteps1.verify_that_price_of_the_domain_is_also_displaying_alongside_domain_name()"
});
formatter.result({
  "status": "skipped"
});
});