package com.reusablelibrary;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

public class Globalmethods {
	public static WebDriver driver;
	
	public static void launchbrowser(String browser){
		
		if(browser.equalsIgnoreCase("Firefox")){
			System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir")+"\\webdriver\\firefox\\firefox.exe");
			driver = new FirefoxDriver();
		}else if(browser.equalsIgnoreCase("Chrome")){
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\webdriver\\chromedriver-win32\\chromedriver.exe");
            ChromeOptions options = new ChromeOptions();
            options.addArguments("--start-maximized");
            options.addArguments("disable-infobars");
            DesiredCapabilities capabilities = DesiredCapabilities.chrome();
            capabilities.setCapability(ChromeOptions.CAPABILITY, options);
			driver= new ChromeDriver(capabilities);
		}else if(browser.equalsIgnoreCase("InternetExplorer")){
			DesiredCapabilities cap = new DesiredCapabilities();
			cap.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS, true);
			System.setProperty("webdriver.ie.driver", System.getProperty("user.dir")+"\\webdriver\\ie\\ie.exe");
			driver= new InternetExplorerDriver(cap);
		}else if(browser.equalsIgnoreCase("safari")){
            DesiredCapabilities cap = new DesiredCapabilities();
            System.setProperty("webdriver.safari.driver", System.getProperty("user.dir")+"\\webdriver\\safari\\safari.exe");
            driver= new InternetExplorerDriver(cap);
        }
		
		
	}
		
	public static void closebrowser(){
		driver.close();
	}

}
