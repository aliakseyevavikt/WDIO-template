import BasePage from "./Base.page";

class LoginPage extends BasePage {

    get inputUsername() {
        return $('#username');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }


    login(username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }

    open() {
        return super.open('/login');
    }
}

export default new LoginPage();
