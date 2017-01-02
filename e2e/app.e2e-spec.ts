import { AlakadarPage } from './app.po';

describe('alakadar App', function() {
  let page: AlakadarPage;

  beforeEach(() => {
    page = new AlakadarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
