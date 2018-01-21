
Feature('Whitebox Homepage', { retries: 1 });

Scenario('open homepage', I => {
  I.amOnPage('/');
  I.see('WhiteBox\n' + 'IT Solutions');
});
