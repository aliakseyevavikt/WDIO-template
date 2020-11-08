import LoginPage from '../pageObjects/login.page';
import SecurePage from '../pageObjects/secure.page';
import {loginPageTestResults} from '../testResult/login.testResult';
import {user} from '../data/login.data';

describe('My Login application', () => {
    before('maximize window', () => {
        browser.maximizeWindow();
    })
    it('should login with valid credentials', () => {
        LoginPage.open();
        LoginPage.login(user.email, user.password);
        expect(SecurePage.flashAlert.getText()).to.equal(loginPageTestResults.flashAlert);
    });

    it.skip('should login with valid credentials', () => {
        LoginPage.open();
        LoginPage.login(user.email, user.password);
        expect(SecurePage.flashAlert.getText()).to.equal(loginPageTestResults.flashAlert);
    });
});
