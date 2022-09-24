const chrome = require("selenium-webdriver/chrome");
const env = require('../capabilities');
const { Builder, By, Key, until, WebDriver, WebElement } = require('selenium-webdriver');
const should = require("chai").should();
var driver;


//describe block
describe('Todo Test Suite 2', function () {

    const browser = env.capabilities.browserName;
    const gridURL = env.capabilities.server;


    beforeEach(function () {
        //Launch the browser
        driver = new Builder()
            .forBrowser(browser)
            .usingServer(gridURL)
            .build()

    });

    this.afterEach(function () {

        //close the browser
        driver.quit();
        driver = '';

    });

    //it block
    it('TC_TODOS_002.2', async function () {

        //navigate to our application
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
    //it block
    it('TC_TODOS_002.3', async function () {

        //navigate to our application
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //add a todo 
        await driver.findElement(By.id("sampletodotext"))
            .sendKeys("Learn Python", Key.RETURN);

        //asserts
        let todoText = await driver.findElement(By.xpath("//li[last()]"))
            .getText()
            .then(function (value) {
                return value;
            });

        //assert using chai should
        try {
            todoText.should.equal(("C#"));
        }
        finally {
            //continue to after block
        }



    });


});



