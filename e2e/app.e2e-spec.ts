import { MediumTestPage } from './app.po';

describe('medium-test App', () => {
  let page: MediumTestPage;

  beforeEach(() => {
    page = new MediumTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
