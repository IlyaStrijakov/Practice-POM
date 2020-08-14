import BasePage from '../pages/base.page';

class SearchPage extends BasePage {

    get searchInput () { return $('#searchval')}
    get submitButton () {return $("//button[@class='btn btn-info banner-search-btn']")}
    get searchLink1 () {return $("//a[contains(text(),'Stainless Steel Work Tables with Undershelf')]")}





            // login (username, password) {
            //     this.inputUsername.setValue(username);
            //     this.inputPassword.setValue(password);
            //     this.btnSubmit.click();
            // }

        open () {
            return super.open('search');
        }

}

export default new SearchPage();
