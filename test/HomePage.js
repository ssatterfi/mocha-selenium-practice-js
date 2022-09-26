const chrome = require("selenium-webdriver/chrome");
const env = require('../capabilities');
const { Builder, By, Key, until, WebDriver, WebElement } = require('selenium-webdriver');
const should = require("chai").should();
var driver;


describe("Home Page Test Suite", function () {

    const browser = env.capabilities.browserName;
    const gridURL = env.capabilities.server;
    const PAGE_TITLE = 'Medi-Share | Christian Health Sharing';


    before(function () {

        driver = global.driver;

    });

    after(function () {

        driver.quit()

    });

    it('TC_HomePage_001', async function () {

        await driver.get("https://www.medishare.com/");

        //Validate Page Title
        let pageTitle = await driver.getTitle();

        try {
            pageTitle.should.equal((PAGE_TITLE));
        }
        finally {
        }
    });


});

