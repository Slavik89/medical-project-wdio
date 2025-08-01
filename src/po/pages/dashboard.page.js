const SideMenuComponent = require("../components/common/sidemenu.component");
const BasePage = require("./base.page");

class DashboardPage extends BasePage {

  constructor() {
    super('/showcase/angular/appointmentplanner/#/dashboard');
    this.sideMenu = new SideMenuComponent();
  }

/*     get header () {
            return $('h1.clinic-name');
        } */

}

module.exports = DashboardPage;
