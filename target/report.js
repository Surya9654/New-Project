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
  "name": "Open this URL - \u003curl\u003e",
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
  "name": "Open this URL - https://www.godaddy.com/",
  "keyword": "Given "
});
formatter.match({
  "location": "Godaddysteps.open_this_URL_https_www_godaddy_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Maximize or set size of browser window.",
  "keyword": "And "
});
formatter.match({
  "location": "Godaddysteps.maximize_or_set_size_of_browser_window()"
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
});