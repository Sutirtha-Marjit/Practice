import { Angularproj001Page } from './app.po';

describe('angularproj001 App', () => {
  let page: Angularproj001Page;

  beforeEach(() => {
    page = new Angularproj001Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
