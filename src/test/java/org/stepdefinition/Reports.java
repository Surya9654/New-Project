package org.stepdefinition;

import com.aventstack.extentreports.ExtentReporter;
import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;

import net.bytebuddy.agent.builder.AgentBuilder.LambdaInstrumentationStrategy;

public class Reports {
	public static ExtentHtmlReporter exhtml;
	public static ExtentReports exr;
	public static ExtentTest ext;
	public static void ReportGen() {
		 exhtml = new ExtentHtmlReporter("E:\\Eclipse\\Cucumber\\target\\report.html");
		 ext = exr.createTest("Vlaidate the page that user is on right page");
		 
	}

}
