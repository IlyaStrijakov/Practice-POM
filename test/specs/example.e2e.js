import SearchPage from '../pages/search.page';
import BasePage from "../pages/base.page";
const {totalSearch} = require('../../testData/expected.json');

describe('Search page', () => {
    it('should search for stainless steel table', () => {
       BasePage.open();
    });
    it('should fill in search input', function () {
         SearchPage.searchInput.setValue('stainless work table');
         SearchPage.submitButton.click()

    });

    it('should search for stainless steel table  ', function () {
        SearchPage.searchLink1.getAttribute('title');
        expect(SearchPage.searchLink1).toEqual(totalSearch.searchLink);
    });


});


