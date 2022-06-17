package org.mandatory;
import java.awt.Robot;
import java.awt.AWTException;
import java.awt.RenderingHints.Key;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.stepdefinition.Reports;

import com.aventstack.extentreports.ExtentReporter;
import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;

import io.github.bonigarcia.wdm.WebDriverManager;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;

public class BaseClass extends Reports {
public static WebDriver driver;  //interface
public static ExtentReporter exr;
public static ExtentTest ext;

public static ChromeOptions o;



public static Pojo p() {
	Pojo p = new Pojo();
	return p;
}
public static void launchChrome() {
	WebDriverManager.chromedriver().setup();
	driver = new ChromeDriver();
}
public static void launchFF() {
	WebDriverManager.firefoxdriver().setup();
	driver = new FirefoxDriver();
}
public static void launchEdge() {
	WebDriverManager.edgedriver().setup();
	driver = new EdgeDriver();
}

	// TODO Auto-generated constructor stub
public static void Url(String s){
driver.navigate().to(s);	
}

public static void sendkeys(WebElement e, String s) {
	e.sendKeys(s);
	
}
public static void btnclck(WebElement e) {
	e.click();
}
public static void winMax() {
	driver.manage().window().maximize();
}
public static void scrolldown(WebElement e1) {
	JavascriptExecutor js=(JavascriptExecutor) driver;
	js.executeScript("arguments[0].scrollIntoView(true)",e1);
}

public static void drpdown() throws AWTException {
	Robot r = new Robot();
	for(int i=0;i<6;i++) {
	r.keyPress(KeyEvent.VK_DOWN);
	r.keyRelease(KeyEvent.VK_DOWN);
	}
	r.keyPress(KeyEvent.VK_ENTER);
	r.keyRelease(KeyEvent.VK_ENTER);
}
public static void drpup() throws AWTException {
	Robot r = new Robot();
	for(int i=0;i<3;i++) {
	r.keyPress(KeyEvent.VK_UP);
	r.keyRelease(KeyEvent.VK_UP);
	}
	r.keyPress(KeyEvent.VK_ENTER);
	r.keyRelease(KeyEvent.VK_ENTER);
}

public static void drpdown1() throws AWTException {
	Robot r = new Robot();
	for(int i=0;i<3;i++) {
	r.keyPress(KeyEvent.VK_DOWN);
	r.keyRelease(KeyEvent.VK_DOWN);
	}
	r.keyPress(KeyEvent.VK_ENTER);
	r.keyRelease(KeyEvent.VK_ENTER);
}

public static void drpdown2() throws AWTException {
	Robot r = new Robot();
	for(int i=0;i<2;i++) {
	r.keyPress(KeyEvent.VK_DOWN);
	r.keyRelease(KeyEvent.VK_DOWN);
	}
	r.keyPress(KeyEvent.VK_ENTER);
	r.keyRelease(KeyEvent.VK_ENTER);
}

public static String excelsheet(int rownum, int cellnum) throws IOException {
	File f = new File("F:\\EXCELS\\Excel1.xlsx");
	FileInputStream fin =new FileInputStream(f);
	Workbook w = new XSSFWorkbook(fin);
	Sheet s = w.getSheet("Sheet3");
		Row r = s.getRow(rownum);
		Cell c = r.getCell(cellnum);
		int type = c.getCellType();
		String value=""; 
		if(type==1) {
			value = c.getStringCellValue();
		}
		else if(DateUtil.isCellDateFormatted(c)) {
			Date d = c.getDateCellValue();
			SimpleDateFormat sim = new SimpleDateFormat("dd/MMM/YYYY");
			value = sim.format(d);
		}
		else {
			double d = c.getNumericCellValue();
			long l = (long) d;
			value = String.valueOf(l);
		}
		return value;
			}






public static String adactinsheet(int rownum, int cellnum) throws IOException {
	File f = new File("F:\\EXCELS\\Excel1.xlsx");
	FileInputStream fin =new FileInputStream(f);
	Workbook w = new XSSFWorkbook(fin);
	Sheet s = w.getSheet("Sheet2");
		Row r = s.getRow(rownum);
		Cell c = r.getCell(cellnum);
		int type = c.getCellType();
		String value="";
		if(type==1) {
			value = c.getStringCellValue();
		}
		else if(DateUtil.isCellDateFormatted(c)) {
			Date d = c.getDateCellValue();
			SimpleDateFormat sim = new SimpleDateFormat("dd/MMM/YYYY");
			value = sim.format(d);
		}
		else {
			double d = c.getNumericCellValue();
			long l = (long) d;
			value = String.valueOf(l);
		}
		return value;
			}











public static String urlsheet(int rownum, int cellnum) throws IOException {
	File f = new File("F:\\EXCELS\\Excel1.xlsx");
	FileInputStream fin =new FileInputStream(f);
	Workbook w = new XSSFWorkbook(fin);
	Sheet s = w.getSheet("urlsheet");
		Row r = s.getRow(rownum);
		Cell c = r.getCell(cellnum);
		int type = c.getCellType();
		String value="";
		if(type==1) {
			value = c.getStringCellValue();
		}
		else if(DateUtil.isCellDateFormatted(c)) {
			Date d = c.getDateCellValue();
			SimpleDateFormat sim = new SimpleDateFormat("dd/MMM/YYYY");
			value = sim.format(d);
		}
		else {
			double d = c.getNumericCellValue();
			long l = (long) d;
			value = String.valueOf(l);
		}
		return value;
			}




public static String fbsheet(int rownum, int cellnum) throws IOException {
	File f = new File("F:\\EXCELS\\Excel1.xlsx");
	FileInputStream fin =new FileInputStream(f);
	Workbook w = new XSSFWorkbook(fin);
	Sheet s = w.getSheet("fb");
		Row r = s.getRow(rownum);
		Cell c = r.getCell(cellnum);
		int type = c.getCellType();
		String value="";
		if(type==1) {
			value = c.getStringCellValue();
		}
		else if(DateUtil.isCellDateFormatted(c)) {
			Date d = c.getDateCellValue();
			SimpleDateFormat sim = new SimpleDateFormat("dd/MMM/YYYY");
			value = sim.format(d);
		}
		else {
			double d = c.getNumericCellValue();
			long l = (long) d;
			value = String.valueOf(l);
		}
		return value;
			}




	
	public static void clse() {
		driver.close();
	}
}




