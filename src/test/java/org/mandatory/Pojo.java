package org.mandatory;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Pojo extends BaseClass{
	
	public Pojo() {
		PageFactory.initElements(driver, this);
	}
	//GoDaddy
	//-------------------------------------------------------------------------------------------------------------------------------------
	
	
	@FindBy(id="id-d6f9deab-d554-45df-a52c-8a9ab53948b5")
	public WebElement domain1;
	
	@FindBy(id="id-3a34578f-40f3-4d2f-aaa4-0a1320f3fe6a")
	public WebElement domainsearch;
	
	@FindBy(xpath="//input[@aria-label='Find your best domain']")
	public WebElement searchox;
	
	@FindBy(xpath="//span[text()='Buy It']")
	public WebElement explorenow;
	
	
	public WebElement getDomain1() {
		return domain1;
	}

	public WebElement getSearchox() {
		return searchox;
	}

	public WebElement getExplorenow() {
		return explorenow;
	}

	public WebElement getDomainsearch() {
		return domainsearch;
	}
//--------------------------------------------------------------------------------------------------------------------------------------------------	
	/*@FindBy(id="firstName")
	public WebElement Fn;
	
	@FindBy(id="lastName")
	public WebElement ln;
	
	@FindBy(id="userEmail")
	public WebElement email;
	
	@FindBy(id="userNumber")
	public WebElement num;

	public WebElement getFn() {
		return Fn;
	}

	public WebElement getLn() {
		return ln;
	}

	public WebElement getEmail() {
		return email;
	}

	public WebElement getNum() {
		return num;
	}
	
	//-------------------------------------------------------------------------
	
	@FindBy(id="email")
	public WebElement username;

	public WebElement getUsername() {
		return username;
	}
	
	@FindBy(xpath="//a[text()='Forgotten password?']")
	public WebElement forgpass;

	public WebElement getForgpass() {
		return forgpass;
	}
	
	@FindBy(id="identify_email")
	public WebElement idemail;

	public WebElement getIdemail() {
		return idemail;
	}*/
	
	

/*@FindBy(id="firstName")
public WebElement firstName;

@FindBy(id="lastName")
public WebElement lastName;

@FindBy(id="userNumber")
public WebElement userNumber;

@FindBy(id="subjectsContainer")
public WebElement subjectsContainer;

@FindBy(id="currentAddress")
public WebElement currentAddress;

@FindBy(id="dateOfBirthInput")
public WebElement dob;

@FindBy(xpath="//select[@class='react-datepicker__month-select']")
public WebElement monthselector;//clcik robot down 7 times then Enter

@FindBy(xpath="//select[@class='react-datepicker__year-select']")
public WebElement yearselector;//click robto up 25 times then enter

@FindBy(xpath="//div[@aria-label='Choose Thursday, December 11th, 1997']")
public WebElement date;

public WebElement getFirstName() {
	return firstName;
}

public WebElement getLastName() {
	return lastName;
}

public WebElement getDate() {
	return date;
}

public WebElement getDob() {
	return dob;
}

public WebElement getMonthselector() {
	return monthselector;
}

public WebElement getYearselector() {
	return yearselector;
}

public WebElement getUserNumber() {
	return userNumber;
}

public WebElement getSubjectsContainer() {
	return subjectsContainer;
}

public WebElement getCurrentAddress() {
	return currentAddress;
}*/

}