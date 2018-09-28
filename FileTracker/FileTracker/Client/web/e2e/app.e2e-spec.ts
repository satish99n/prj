import { NgSeedPage } from './app.po';

describe('ng-seed App', () => {
  let page: NgSeedPage;

  beforeEach(() => {
    page = new NgSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
