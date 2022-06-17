package org.mandatory;

import java.io.IOException;
import java.util.*;

import org.testng.annotations.DataProvider;

public class DataDriven extends BaseClass{
	@DataProvider(name="logindata")
	private Object[][] dat() throws IOException{
		return new Object[][]{ 
		{excelsheet(0, 0),excelsheet(2, 0)}
	};
}

}
