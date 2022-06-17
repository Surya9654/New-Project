package org.stepdefinition;

import java.util.concurrent.TimeUnit;

import org.mandatory.BaseClass;
import org.mandatory.Pojo;
import org.openqa.selenium.JavascriptExecutor;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Test;

public class Godaddysteps1 extends BaseClass{
	@Given("setimplicit wait")
	public void setimplicit_wait() {
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
	}

	@When("Click on the first menu link, which is Domains. It will open up a sub-menu, click on the Domain Name Search link from the sub-menu.")
	public void click_on_the_first_menu_link_which_is_Domains_It_will_open_up_a_sub_menu_click_on_the_Domain_Name_Search_link_from_the_sub_menu() {
	    
	}

	@When("Get the value of title of Domain Name Search page using Selenium Webdrivers command in your script and print it.")
	public void get_the_value_of_title_of_Domain_Name_Search_page_using_Selenium_Webdrivers_command_in_your_script_and_print_it() {
		Pojo p = new Pojo();
		p.getDomain1().click();
		p.getDomainsearch().click();
		System.out.println(	driver.getTitle());
	    
	}

	@When("Well match value fetched with expected value, if its matched then proceed to next step either failed the test case.")
	public void well_match_value_fetched_with_expected_value_if_its_matched_then_proceed_to_next_step_either_failed_the_test_case() {
		
	   
	}

	@When("Verify that search box is present on the page and its enabled by using selenium commands.")
	public void verify_that_search_box_is_present_on_the_page_and_its_enabled_by_using_selenium_commands() {
		if(p().getSearchox().isDisplayed()&&p().getSearchox().isEnabled()) {
			System.out.println("Search box is present and enabled");
		}
		JavascriptExecutor j = (JavascriptExecutor)driver;
		j.executeScript("document.getElementById(''), args)
		}

	@When("Verify that Buy It button is available along with search box.")
	public void verify_that_Buy_It_button_is_available_along_with_search_box() {
		if(p().getExplorenow().isDisplayed()) {
			System.out.println("Explore now is enabled");
		}
	   
	}

	@When("Enter some test value in the search box, like mydomain and click on Buy It button.")
	public void enter_some_test_value_in_the_search_box_like_mydomain_and_click_on_Buy_It_button() {
	    
	}

	@When("If domain is available then verify that Add to Cart button is present alongside domain name.")
	public void if_domain_is_available_then_verify_that_Add_to_Cart_button_is_present_alongside_domain_name() {
	    
	}

	@Then("Verify that price of the domain is also displaying alongside domain name.")
	public void verify_that_price_of_the_domain_is_also_displaying_alongside_domain_name() {
	    
	}



}
