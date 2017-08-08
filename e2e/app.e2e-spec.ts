import { Angular2UsersPage } from './app.po';

describe('angular2-users App', () => {
  let page: Angular2UsersPage;

  beforeEach(() => {
    page = new Angular2UsersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
