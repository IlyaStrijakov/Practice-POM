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

  it('should check the title of the first table',  function () {
    SearchPage.searchBtn.click();
    browser.pause(1000)
    //SearchPage.searchResultField.isDisplayed();
    expect(SearchPage.searchResultField.getAttribute('title')).toContain('Tables');
  });
});
