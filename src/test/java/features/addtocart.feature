Feature: Overstock
Scenario Outline:


	Given open browser as "<browser>"
	Given User navigates to overstock 
	When User enters required "<search>" in search textbox 
	And User clicks on the search button 
	And User clicks on first link 
	Then User adds the item to the cart 
	And close the browser
	
	    Examples:
    |browser|search|
    |chrome|penDrive|

	
