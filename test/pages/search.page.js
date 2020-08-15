import BasePage from '../pages/base.page';

class SearchPage extends BasePage {

  get searchInput() {return $('#searchval');}
  get searchBtn() {return $('button.btn.btn-info.banner-search-btn');}
  get searchResultField() {return $$('.description.ossRelatedLinks');} // should be elements from 0 to 7
  get addToCart() {return $$('.add-to-cart');}
  get cartQuantity() {return $('#cartItemCountSpan').getText();}
  get cartBtn() {return $('span.btn.btn-small.btn-primary');}
  get emptyCart() {return $('a.emptyCartButton.btn.btn-mini.btn-ui.pull-right');}
  get emptyCartPopUp() {return $('button.btn.btn-primary');}
  get cartIsEmpty() {return $('p.header-1');}
  get viewCart() {return $('h1.page-header.pull-left');}
}

export default new SearchPage();
