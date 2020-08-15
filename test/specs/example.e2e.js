import SearchPage from '../pages/search.page';
const { totalSearch,tableTitles } = require('../../testData/expected.json');

before(() => {
  SearchPage.open('/');
});

describe('Search page', () => {

  it('should fill in search input', function () {
    SearchPage.searchInput.setValue(totalSearch.searchText);
    expect(SearchPage.searchInput.getValue()).toEqual(totalSearch.searchText)
  });

  it('should check the title of all tables',  function () {
    SearchPage.searchBtn.click();
    browser.pause(1000)
    //SearchPage.searchResultField.isDisplayed();
    let titles = SearchPage.searchResultField.map(el => el.getAttribute('title'));
    let titlesWithTable = titles.filter(el => el.toLowerCase().includes('table'));
    expect(titles.length).toEqual(titlesWithTable.length);
  });
  it('should click add to cart ', function () {
    let lastItem = SearchPage.addToCart[SearchPage.addToCart.length - 1];
    browser.pause(5000)
    lastItem.click();
    browser.pause(5000)
  expect(SearchPage.cartQuantity).toEqual('1');
  });
  it('should click on cart ', function () {
    let cart = SearchPage.cartBtn.click()
    browser.pause(3000)
    let empty = viewCart.emptyCart.click()
    browser.pause(3000)
    let popUp = viewCart.emptyCartPopUp.click()
    browser.pause(3000)
    expect(viewCart.cartIsEmpty.getText())
  });
});
