$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("addtocart.feature");
formatter.feature({
  "line": 1,
  "name": "Overstock",
  "description": "",
  "id": "overstock",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "",
  "description": "",
  "id": "overstock;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "open browser as \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User navigates to overstock",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters required \"\u003csearch\u003e\" in search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on first link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User adds the item to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "overstock;;",
  "rows": [
    {
      "cells": [
        "browser",
        "search"
      ],
      "line": 14,
      "id": "overstock;;;1"
    },
    {
      "cells": [
        "chrome",
        "penDrive"
      ],
      "line": 15,
      "id": "overstock;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "",
  "description": "",
  "id": "overstock;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "open browser as \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User navigates to overstock",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters required \"penDrive\" in search textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on first link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User adds the item to the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 17
    }
  ],
  "location": "addtocart.openBrowser(String)"
});
formatter.result({
  "duration": 3718788792,
  "status": "passed"
});
formatter.match({
  "location": "addtocart.User_navigates_to_overstock()"
});
formatter.result({
  "duration": 6022508303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "penDrive",
      "offset": 22
    }
  ],
  "location": "addtocart.user_enters_required_item_in_search_textbox(String)"
});
formatter.result({
  "duration": 88084041,
  "status": "passed"
});
formatter.match({
  "location": "addtocart.user_clicks_on_the_search_button()"
});
formatter.result({
  "duration": 4126764102,
  "status": "passed"
});
formatter.match({
  "location": "addtocart.user_clicks_on_first_link()"
});
formatter.result({
  "duration": 59956323564,
  "status": "passed"
});
formatter.match({
  "location": "addtocart.user_adds_the_item_to_the_cart()"
});
formatter.result({
  "duration": 16755963,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-AH54MIP\u0027, ip: \u002710.1.10.73\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_152\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\ALIENW~1\\AppData\\Local\\Temp\\scoped_dir14276_9242}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d62.0.3202.94, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 2209f26357dfa23acb40316b0cc094e3\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027addCartMain_addCartButton\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat stepdefinition.addtocart.user_adds_the_item_to_the_cart(addtocart.java:52)\r\n\tat ✽.Then User adds the item to the cart(addtocart.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "addtocart.close()"
});
formatter.result({
  "status": "skipped"
});
});