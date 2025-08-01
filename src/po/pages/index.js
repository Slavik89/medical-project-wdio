const DashboardPage = require("./dashboard.page");
const DoctorsPage = require("./doctors.page");


/**
 * @param name {'dashboard' | 'doctors'}
 * @returns { DashboardPage | DoctorsPage }
 */

function pages(name) {

  items = {
    doctors: new DoctorsPage(),
    dashboard: new DashboardPage()
  }

  return items[name.toLowerCase()];
  
}

module.exports = {
  DashboardPage,
  DoctorsPage,
  pages,
}