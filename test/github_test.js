
Feature('GitHub', { retries: 1 });

Scenario('open homepage', ({I}) => {
  I.amOnPage('https://github.com/');
  I.see('GitHub');
});

Scenario('search for Rob-Doherty', ({I}) => {
  I.amOnPage('https://github.com/');
  I.click({css: 'button.btn-link'});
  I.fillField({css: 'input.header-search-input'}, 'Rob-Doherty');
  I.pressKey('Enter');
  I.click('Users');
  within('#user_search_results', () => {
    I.see('Rob-Doherty');
    I.click('Rob-Doherty');
  });
  I.seeInCurrentUrl('github.com/Rob-Doherty');
});
