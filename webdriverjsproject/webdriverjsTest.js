"use strict";

var wd = require("selenium-webdriver"),
    By = wd.By,
    until = wd.until;


// Setting Desired Capabilities.
var desiredCaps = {
    platformName: "Android",
    deviceName: "a3ae1c63",
    app: "c:\\eribank.apk",
    appPackage: "com.experitest.ExperiBank",
    appActivity: ".LoginActivity",
    browserName: '',
       
};



async function testEribank() {
    // //Initiating the Driver
    let driver = await new wd.Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(desiredCaps).build();
    
    var okElements = await driver.findElements(By.xpath("//*[@text='OK']"));

    if ( okElements.length > 0) {
        var okElement = await driver.findElement(By.xpath("//*[@text='OK']"));   
        await okElement.click();
    } 

    // Locating the element 
    const userElement = await driver.findElement(By.xpath("//*[@text='Username']"));
    // Automation command.
    await userElement.sendKeys("company");
    const passwordElement = await driver.findElement(By.xpath("//*[@text='Password']"));
    await passwordElement.sendKeys("company");
    const loginElement = await driver.findElement(By.xpath("//*[@text='Login']"));
    await loginElement.click();    
    
    await driver.quit();
    }
testEribank()


