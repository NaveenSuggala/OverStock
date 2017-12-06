package stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.reusablelibrary.Globalmethods;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class addtocart extends Globalmethods {

    @Given("^open browser as \"(.*)\"$")
    public void openBrowser(String browser) throws Throwable {
        System.out.println("Test Started");
        launchbrowser(browser);
    }

    @Given("^User navigates to overstock$")
    public void User_navigates_to_overstock() throws Throwable {
        driver.get("https://www.overstock.com");
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        driver.findElement(By.xpath("//*[@id='cb_lightbox']/div[1]/div")).click();
        driver.switchTo().defaultContent();
        Thread.sleep(500);
    }

    @When("^User enters required \"([^\"]*)\" in search textbox$")
    public void user_enters_required_item_in_search_textbox(String item) throws Throwable {
        WebElement element = driver.findElement(By.id("search-input"));
        element.sendKeys(item);

    }

    @When("^User clicks on the search button$")
    public void user_clicks_on_the_search_button() throws Throwable {
        driver.findElement(By.xpath("//*[@id='search-form']/fieldset[2]/label")).click();
    }

    @When("^User clicks on first link$")
    public void user_clicks_on_first_link() throws Throwable {
        driver.findElement(By.xpath("(//div[@class='product-wrapper tile-view'])[1]")).click();

    }

    @Then("^User adds the item to the cart$")
    public void user_adds_the_item_to_the_cart() throws Throwable {
        driver.findElement(By.xpath("//*[@id='addCartMain_addCartButton']")).click();
    }

    @When("^close the browser$")
    public void close() throws Throwable {
        driver.quit();
        System.out.println(" Test Completed ");
    }

}
