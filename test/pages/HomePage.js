
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  // locators
  menuIcon: '#menuToggle',
  menuOpenIndicator: 'nav.menu-open',
  menu: {
    logo: { css: 'nav h1.logo' },
    home: { css: 'nav a[href=#home]' },
    about: { css: 'nav a[href=#about]' },
    github: { css: 'nav i.icon-github' },
    close: { css: 'nav i.menu-close' }
  },

  // methods
  go() {
    I.amOnPage('/');
  },

  openMenu() {
    I.waitForText('WhiteBox\n' + 'IT Solutions');
    I.click(this.menuIcon);
    I.waitForVisible(this.menuOpenIndicator);
  },

  clickGithubLink() {
    I.click(this.menu.github);
    I.seeInCurrentUrl('github.com/Rob-Doherty');
  }

};
