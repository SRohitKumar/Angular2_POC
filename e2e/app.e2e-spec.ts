import { PeggingUIAppPage } from './app.po';

describe('pegging-ui-app App', function() {
  let page: PeggingUIAppPage;

  beforeEach(() => {
    page = new PeggingUIAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
