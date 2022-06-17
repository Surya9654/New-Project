package org.stepdefinition;

import org.junit.Assert;
import org.mandatory.BaseClass;
import org.testng.annotations.BeforeClass;

import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;

public class Godaddyhooks extends BaseClass {
	
	@BeforeClass
	@Given("Open this URL - {string}")
		public void open_this_URL(String string) {
			launchChrome();
			Url(string);
			Assert.assertTrue("the user is not in the right page",string.contains("www.godaddy.com"));
		    
		}

	@When("Maximize or set size of browser window.")
	public void maximize_or_set_size_of_browser_window() {
		winMax();
	    
	}
}
