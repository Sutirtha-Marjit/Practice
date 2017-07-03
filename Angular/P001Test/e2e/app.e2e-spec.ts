import { P001TestPage } from './app.po';

describe('p001-test App', () => {
  let page: P001TestPage;

  beforeEach(() => {
    page = new P001TestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
