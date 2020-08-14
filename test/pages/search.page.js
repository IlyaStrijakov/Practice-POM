import BasePage from '../pages/base.page';

class SearchPage extends BasePage {

  get searchInput() {return $('#searchval');}
  get searchBtn() {return $('button.btn.btn-info.banner-search-btn');}
  get searchResultField() {return $$('.description.ossRelatedLinks')[0];} // should be elements from 0 to 7

}

export default new SearchPage();
