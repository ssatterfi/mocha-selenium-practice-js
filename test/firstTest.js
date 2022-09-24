const chrome = require("selenium-webdriver/chrome");
const env = require('../capabilities');
const { Builder, By, Key, until, WebDriver, WebElement } = require('selenium-webdriver');
const should = require("chai").should();
var driver;


//describe block
describe('Todo Test Suite 1', function () {

    const browser = env.capabilities.browserName;
    const gridURL = env.capabilities.server;


    beforeEach(function () {
        //Launch the browser
        driver = new Builder()
            .forBrowser(browser)
            .usingServer(gridURL)
            .build()

    });
    this.afterEach(async function () {

        //close the browser
        await driver.quit();
        driver = '';

    });

    //it block
    it('TC_TODOS_001.1', async function () {


        //naviate to our application
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //add a todo 
        await driver.findElement(By.id("sampletodotext"))
            .sendKeys("Learn Selenium", Key.RETURN);

        //asserts
        let todoText = await driver.findElement(By.xpath("//li[last()]"))
            .getText()
            .then(function (value) {
                return value;
            });

        //assert using chai should

        try {
            todoText.should.equal(("Learn Selenium"));
        }
        finally {

        }

    });

});



