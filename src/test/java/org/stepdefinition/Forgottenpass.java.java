package org.stepdefinition;

import java.awt.Window;
import java.io.IOException;

import org.junit.Assert;
import org.mandatory.BaseClass;
import org.mandatory.Pojo;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Forgottenpass extends BaseClass{
	
	@Given("user is in the login page")
	public void user_is_in_the_login_page() throws IOException {
		launchChrome();
		Url(urlsheet(0, 0));
		winMax();
		
	     
	}
	@Given("user must guve only the input of username")
	public void user_must_guve_only_the_input_of_username() throws IOException {
		Pojo p = new Pojo();
		sendkeys(p.getUsername(),excelsheet(0, 0));
		
	  
	}

	@When("User should click the forgotten password link")
	public void user_should_click_the_forgotten_password_link() {
		Pojo p = new Pojo();
		p.getForgpass().click();
	   
	}

	@When("User must redirected to forgotten password link")
	public void user_must_redirected_to_forgotten_password_link() {
		String s= driver.getCurrentUrl();
	    Assert.assertTrue("User is in the right page",s.contains("identify"));
	    System.out.println(" User is on right page");
	}

	@Then("User shlould type the email")
	public void user_shlould_type_the_email() throws IOException {
	pojo().getIdemail().sendKeys(excelsheet(3, 0));
		
	}

	@Then("and click recover button")
	public void and_click_recover_button() {
	    
	}



}
