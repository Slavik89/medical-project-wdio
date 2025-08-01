/* const Header = require("../components/common/header.component");
const SideMenuComponent = require("../components/common/sidemenu.component"); */

const { Header, SideMenu } = require('./../components');

class BasePage {
  
  constructor(url) {
    this.url = url;
    this.header = new Header();
    this.sideMenu = new SideMenu();
  }

  async open() {
    return browser.url(this.url);
  }
}

module.exports = BasePage;