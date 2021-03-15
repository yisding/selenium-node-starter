const webdriver = require("selenium-webdriver");
const test = require("selenium-webdriver/testing");
const expect = require("chai").expect;

const driver = new webdriver.Builder().forBrowser("chrome").build();

describe("webdriver test suite", function () {
  before(function () {
    driver.sleep();
  });

  after(function () {
    driver.quit();
  });

  it("gets the right title when using google", async function () {
    this.timeout(5000);

    await driver.get("https://www.google.com");
    await driver.findElement(webdriver.By.name("q")).sendKeys("webdriver\n");
    const title = await driver.getTitle();
    expect(title).to.be.equal("webdriver - Google Search");
  });

  it("makes sure yahoo has a logo", async function () {
    this.timeout(10000);

    await driver.get("https://www.yahoo.com");
    const logo = await driver.findElement(webdriver.By.id("ybar-logo"));
    const isDisplayed = await logo.isDisplayed();
    expect(isDisplayed);
  });
});
