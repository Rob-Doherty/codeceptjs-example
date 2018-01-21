
Feature('Whitebox', { retries: 1 });

Scenario('open homepage', I => {
  I.amOnPage('/');
  I.see('WhiteBox\n' + 'IT Solutions');
});

Scenario('follow github link in menu', (homePage) => {
  homePage.go();
  homePage.openMenu();
  homePage.clickGithubLink();
});