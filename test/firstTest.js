const chrome = require("selenium-webdriver/chrome");
const { Builder, By, Key, until, WebDriver } = require('selenium-webdriver');
const should = require("chai").should();
const testname = 'defaulttest';
const server = 'http://localhost:4444/wd/hub/';
let browser = 'chrome';

//describe block
describe('Add todo tests', function () {

    //it block
    it('successfully add a todo application', async function () {

        //Launch the browser 
        let driver = await new Builder().forBrowser("firefox").build()

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
        todoText.should.equal(("Learn Selenium"));


        //close the browser
        await driver.quit();

    });

});



