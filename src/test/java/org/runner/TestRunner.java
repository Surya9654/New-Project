package org.runner;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.*;

@RunWith(Cucumber.class)
@CucumberOptions(features="Features" , glue = {"org.stepdefinition"} ,dryRun=false,strict=true,monochrome=false,tags= {"@fresco"},plugin= {"pretty",
//		"html:target\\report",
//		"json:target\\Fb.json",
//		"junit:target\\FB1.xml",
		"rerun:target\\failedrerun.txt"})
public class TestRunner {

}

/*,plugin= {"pretty",
"html:target",
"json:target\\Fb.json",
"junit:target\\FB1.xml"}*/