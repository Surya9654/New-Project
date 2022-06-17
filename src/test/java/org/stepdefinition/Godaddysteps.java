package org.stepdefinition;

import org.junit.Assert;
import org.mandatory.BaseClass;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;

public class Godaddysteps extends BaseClass{
	

	@When("Get Title of page and validate it with expected value.")
	public void get_Title_of_page_and_validate_it_with_expected_value() {
		driver.getTitle();
		Assert.assertTrue("Worng title",driver.getTitle().contains("GoDaddy"));
		System.out.println(driver.getTitle());
	    
	}

	@When("Get URL of current page and validate it with expected value.")
	public void get_URL_of_current_page_and_validate_it_with_expected_value() {
		Assert.assertTrue(driver.getCurrentUrl().contains("https://www.godaddy.com/en-in" ));	    
	}

	@When("Get Page source of web page.")
	public void get_Page_source_of_web_page() {
		String PageSource = driver.getPageSource();
	
	}

	@When("Validate that page title is present in page source.")
	public void validate_that_page_title_is_present_in_page_source() {
		driver.getTitle();
	    
	}

	@When("check more outcomes")
	public void check_more_outcomes() {
	    
	}

}
