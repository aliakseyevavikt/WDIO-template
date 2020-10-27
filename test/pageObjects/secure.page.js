import BasePage from "./Base.page";

class SecurePage extends BasePage {

    get flashAlert() {
        return $('#flash');
    }
}

export default new SecurePage();
