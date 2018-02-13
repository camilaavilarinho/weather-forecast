const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const webdriver = require('selenium-webdriver');

const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

describe('Search form', function () {
    this.timeout(10000);

    before(function (done) {
        driver.navigate().to(' http://localhost:3000/')
            .then(() => done())
    });

    it('search for a city\'s weather forecast', function () {
        return driver.findElement({ css: '.search' }).sendKeys('london').then(() => {
            return driver.findElement({ css: '.btn' }).click()
        }).then(() => {
            return expect(driver.findElement({ css: '.city' }).getText()).to.eventually.equal('London, GB')
        })
    });

    after(function (done) {
        driver.quit()
            .then(() => done())
    });
});