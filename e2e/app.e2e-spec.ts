import { CallTrumpPage } from './app.po';

describe('call-trump App', function() {
  let page: CallTrumpPage;

  beforeEach(() => {
    page = new CallTrumpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
