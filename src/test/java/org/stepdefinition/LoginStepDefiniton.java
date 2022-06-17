package org.stepdefinition;

import java.io.IOException;
import org.mandatory.BaseClass;
import org.mandatory.Pojo;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.aventstack.extentreports.reporter.ExtentHtmlReporter;

import   org.junit.Assert;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginStepDefiniton extends BaseClass{
	@Given("The user should launch the browser")
	public void the_user_should_launch_the_browser_launch_chrome_and_get_the_currentUrl() throws IOException {
		launchChrome();
		winMax();
	    Url(urlsheet(3,0 ));
	   
	    
	}
	
	@When("Vlaidate the page that user is on right page")
	public void vlaidate_the_page_that_user_is_on_right_page() {
		Assert.assertEquals("https://demoqa.com/automation-practice-form",   driver.getCurrentUrl());
		System.out.println("yes user in on right page");
	}

	@When("User should enter the {string} and {string}")
	public void user_should_enter_the_and(String string, String string2) {
		Pojo p= new Pojo();
	  sendkeys(p.getFn(), string);
	  sendkeys(p.getLn(), string2);
	}

	

	@When("User Should Enter the  {string}")
	public void user_Should_Enter_the(String string) {
		Pojo p = new Pojo();
		sendkeys(p.getEmail(), string);
	   
	}

	@When("User Should Enter the {string}")
	public void user_Should_Enter_the1(String string) {
	  Pojo p = new Pojo();
	  sendkeys(p.getNum(), string);
	}
	@Then("Close the browser")
	public void close_the_browser() {
	   
	}
	
	


}