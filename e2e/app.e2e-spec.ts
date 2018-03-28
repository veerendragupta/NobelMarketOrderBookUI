import { NobelMarketOrderBookUIPage } from './app.po';

describe('nobel-market-order-book-ui App', function() {
  let page: NobelMarketOrderBookUIPage;

  beforeEach(() => {
    page = new NobelMarketOrderBookUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
